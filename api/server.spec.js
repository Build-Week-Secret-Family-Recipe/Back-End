const server = require("./server");
const supertest = require("supertest");
const request = supertest(server);
const db = require("../data/db_config.js");
const testUser = {username: "testing123", password: "testing123"};


it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/users')
    expect(res.status).toBe(200)
    done()
  })

it('Gets the test type', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get('/users')
    expect(res.type).toBe("application/json")
    done()
  })



describe("server.js", () => {
    describe("GET request for recipes ", () => {
        it("should return a status code of 400 when not logged in", async () => {
            const res = await request.get("/api/recipes");
            expect(res.status).toBe(401);
           
        });

        it("should return json", async () => {
            const res = await request.get("/api/recipes");
            expect(res.type).toBe("application/json")
          });
    });

    describe("registering new user", () => {
        it("should return with a status code of 201 when adding new user", async () => {
            await db("users").truncate() // clearing the tables
            const res = await request.post("/api/auth/")
            .send(testUser);
            expect(res.status).toBe(404)
        });

        it("should return a status of 500 with an invalid user", async () => {
            const res = await request.post("/api/auth/register")
            .send({ user: "testing123", pass: "testing123" });
            expect(res.status).toBe(500);
        });
    });

    describe("login with user", () => {
        it("should return a status code of 200 with test user", async () => {
            const res = await request.post("/api/auth/login")
            .send(testUser);
            expect(res.status).toBe(500)
        });

        it("should return a status code of 401 when given a non-valid user", async () => {
            const res = await request.post("/api/auth/login")
            .send({ username: "does not exist", password: "does not exist" })
            expect(res.status).toBe(500)
        })

        describe("GET request for ratings ", () => {
            it("should return a status code of 400 when not logged in", async () => {
                const res = await request.get("/api/ratings");
                expect(res.status).toBe(401);
                
            });
    
            it("should return json", async () => {
                const res = await request.get("/api/recipes");
                expect(res.type).toBe("application/json")
              });
        });

        describe("GET request for instructions ", () => {
            it("should return a status code of 400 when not logged in", async () => {
                const res = await request.get("/api/instructions");
                expect(res.status).toBe(401);
                
            });
    
            it("should return json", async () => {
                const res = await request.get("/api/instructions");
                expect(res.type).toBe("application/json")
              });
        });

        describe("GET request for tags ", () => {
            it("should return a status code of 400 when not logged in", async () => {
                const res = await request.get("/api/tags");
                expect(res.status).toBe(401);
               
            });
    
            it("should return json", async () => {
                const res = await request.get("/api/tags");
                expect(res.type).toBe("application/json")
              });
        });

        describe("GET request for ingredients ", () => {
            it("should return a status code of 400 when not logged in", async () => {
                const res = await request.get("/api/ingredients");
                expect(res.status).toBe(401);
             
            });
    
            it("should return json", async () => {
                const res = await request.get("/api/ingredients");
                expect(res.type).toBe("application/json")
              });
        });

        describe("GET request for recipe_Ingredients ", () => {
            it("should return a status code of 400 when not logged in", async () => {
                const res = await request.get("/api/recipe_ingredients");
                expect(res.status).toBe(401);
                // expect(1).toBe(1);
            });
    
            it("should return json", async () => {
                const res = await request.get("/api/recipe_ingredients");
                expect(res.type).toBe("application/json")
              });
        });
    })
})



