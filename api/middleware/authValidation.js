function bodyLoginValidation(req, res, next) {
  const body = req.body;
  if (!body || body === {}) {
    res.status(400).json({
      apiCode: 400,
      apiMessage: "Missing Resource data",
    });
  } else {
    if (body.description) {
      next();
    } else {
      res.status(400).json({ message: "Missing required Description field" });
    }
  }
}

module.exports = {};
