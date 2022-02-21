const app = require("../server");
const supertest = require("supertest");
const fetch = supertest(app);

describe("POST /register", () => {
  it("Tests the register endpoint", (done) => {
    fetch
      .post("/api/auth/register")
      .send({
        firstName: "Emmanuel",
        lastName: "Emmanuel",
        email: "ben@test.com",
        phoneNumber: "07053376569",
        password: "testhvcjfhjfjj",
      })
      .expect(201)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe("POST /login", () => {
  it("Tests the login endpoint", (done) => {
    fetch
      .post("/api/auth/login")
      .send({
        email: "ben@test.com",
        password: "testhvcjfhjfjj",
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});
