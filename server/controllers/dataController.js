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
          errorMessage: "Error retrieving songs."
        });
        console.log(error);
      });
  },
  addSong: (req, res) => {
    const dbInstance = req.app.get("db");
    const { title, genre, artist, url, image } = req.body;
    dbInstance
      .addSong([title, genre, artist, url, image])
      .then(() => res.status(200))
      .catch(error => {
        res.status(500).send({ errorMessage: "Error adding song." });
        console.log(error);
      });
  },
  addToFavorites: (req, res) => {
    const dbInstance = req.app.get("db");
    console.log(req.body);
    dbInstance
      .addToFavorites([req.body.username, req.body.songid])
      .then((response) => res.status(200).send(response))
      .catch(error => {
        res.status(500).send({ errorMessage: "Couldn't add to favorites." });
        console.log(error);
      });
  },
  getFavorites: (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getFavorites( [req.params.username]).then(response => { 
      res.status(200).send(response)
    }).catch(error => {
      res.status(500).send({
        errorMessage: "Error retrieving favorites."
      }) 
      console.log(error)
    })
  },
  removeFavorite: (req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.removeFavorite([req.params.username, req.body.songid]).then(response => {
      res.status(200).send(response)
    }).catch(error => {
      res.status(500).send({ errorMessage: "Error removing favorite."})
    })
  },
 getBio: (req, res) => {
  const dbInstance = req.app.get('db')
  dbInstance.getBio().then(response => { 
    res.status(200).send(response)
  }).catch(error => {
    res.status(500).send({
      errorMessage: "Error retrieving favorites."
    }) 
    console.log(error)
  })
}
}
