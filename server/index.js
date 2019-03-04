require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const { getUsers, getSongs, addSong, addToFavorites, getFavorites, removeFavorite } = require("./controllers/dataController");
const { login, register, me } = require("./controllers/authController");
const cors = require("cors");
const port = process.env.SERVER_PORT || 3003;
const app = express();
const path = require('path');

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.use( express.static( `${__dirname}/../build` ) );

var socket = require('socket.io')
var io = socket(app.listen(3002, () => {
  console.log(`Server listening on port 3002`);
}))

io.on('connection', (socket) => {
  console.log(socket.id)
  socket.on('SEND_MESSAGE', function(data){
    io.emit('RECEIVE_MESSAGE', data)
  })
})

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// var users = [];
// io.on('connection', function(socket) {
//    console.log('A user connected');
//    socket.on('setUsername', function(data) {
//       if(users.indexOf(data) > -1) {
//          users.push(data);
//          socket.emit('userSet', {username: data});
//       } else {
//          socket.emit('userExists', data + ' username is taken! Try some other username.');
//       }
//    })
// });

// io.on("connection", function(socket) {
//   console.log("User connected");
//   socket.on("chat message", function(msg) {
//     console.log("message: " + msg);
//     io.emit("chat message", msg);
//   });
//   socket.on("disconnect", function() {
//     console.log("User disconnected");
//   });
// });

// http.listen(3002, function() {
//   console.log("Chat server listening on port 3002");
// });

app.use(cors());
app.use(json());
app.use("/public", express.static(__dirname + "/public"));
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
app.get("/api/songs", getSongs);
app.get("/api/users", getUsers);
app.post("/api/login", login);
app.post("/api/register", register);
app.get("/api/me", me);
// app.post("/api/upload", upload)
app.post("/api/songs", addSong);
app.delete("/api/users");
app.post("/api/favorites", addToFavorites);
app.get("/api/favorites/:username", getFavorites);
app.delete("/api/favorites/:username", removeFavorite);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});