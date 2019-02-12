module.exports = {
  getUsers: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getUsers()
      .then(response => res.status(200).send(response))
      .catch(error => {
        res.status(500).send({
          errMessage: "Error retrieving users."
        });
        console.log(error);
      });
  },
  getSongs: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance
      .getSongs()
      .then(response => res.status(200).send(response))
      .catch(error => {
        res.status(500).send({
          errMessage: "Error retrieving songs."
        });
        console.log(error);
      });
  }
};
