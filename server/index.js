require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const controller = require("./controllers/controller");
// const { login, register, me } = require("./controllers/authController");
const port = process.env.SERVER_PORT || 3003;
const app = express();

app.use(json());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
  })
);

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database connected");
});
app.get("/api/songs", controller.getSongs)
app.get("/api/users", controller.getUsers);
// app.post("/api/login", login);
// app.post("/api/register", register);
// app.get("/api/me", me);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
