require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const {getUsers, getSongs, addSong, addToFavorites } = require("./controllers/dataController");
const { login, register, me } = require("./controllers/authController");
const {upload} = require("./controllers/uploadController")
const cors = require('cors')
// const fileUpload = require('express-fileupload')

const port = process.env.SERVER_PORT || 3003;
const app = express();

app.use(cors())
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(json());
// app.use(fileUpload())
app.use('/public', express.static(__dirname + '/public'))
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
app.get("/api/songs", getSongs)
app.get("/api/users", getUsers);
app.post("/api/login", login);
app.post("/api/register", register);
app.get("/api/me", me);
// app.post("/api/upload", upload)
app.post("/api/songs", addSong)
app.delete("/api/users")
app.post("/api/favorites", addToFavorites)



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});