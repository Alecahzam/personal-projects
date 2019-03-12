const bcrypt = require("bcryptjs");

module.exports = {
  login: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);

    dbInstance.findUser(req.body.username).then(async users => {
      if (!users.length) {
        res.status(401).json({ error: "Unknown username." });
      } else {
        const matches = await bcrypt.compare(
          req.body.password,
          users[0].password
        );
        if (matches) {
          console.log("User matches");
          req.session.user = { username: users[0].username };
          res.json( req.session.user);
        } else {
          res.status(401).json({ error: "Password not recognized." });
        }
      } console.log("test")
    });
  },
  register: async (req, res) => {
    const db = req.app.get("db");
    const hash = await bcrypt.hash(req.body.password, 10);
    try {
      const response = await db.addUser({
        username: req.body.username,
        password: hash
      });
      res.json({ username: response[0].username });
    } catch (error) {
      console.log(error);
      res.status(401).json("Registrar error.");
    }
  },

  me: (req, res) => {
    if (req.session.user) {
      res.json(req.session.user);
    } else {
      res.status(401).json({ error: "Please log in first." });
    }
  }
};
