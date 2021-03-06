const router = require("express").Router();
const Auth = require("../models/authModel.js");
const hashCrypt = require("bcryptjs");
const { secret, jwt } = require("../utils/authUtils.js");

const bodyValidation = require("../middleware/bodyValidation");

router.post("/register", bodyValidation("register"), (req, res) => {
  const userData = req.body;
  const passwordWithHash = hashCrypt.hashSync(userData.password, 8);

  userData.password = passwordWithHash;
  Auth.insertUser(userData)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        apiCode: 500,
        apiMessage: "Error registering the user into DB",
        ...err,
      });
    });
});

router.post("/login", bodyValidation("login"), async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await Auth.findBy({ email }).first();
    console.log(user);
    if (user && hashCrypt.compareSync(password, user.password)) {
      const payload = {
        subject: user.id,
        email: user.email,
      };

      const options = {
        expiresIn: "2d",
      };

      const token = jwt.sign(payload, secret, options);

      res.status(200).json({ message: `Welcome ${user.name}!`, token: token });
    } else {
      res.status(401).json({ message: "You shall not pass!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      apiCode: 500,
      apiMessage: "Error getting user info from DB",
      ...err,
    });
  }
});

// TODO: logout and update user info, restriction middleware

module.exports = router;
