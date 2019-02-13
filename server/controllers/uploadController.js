module.exports = {
    upload: (req,res) => {
        let uploadFile = req.files.file
        uploadFile.mv(`${__dirname}/public/${req.body.filename}.png`,
        function (error){
            if (error) {
                return res.status(500).send(error)
            }
            res.json({file: `public/${req.body.filename}`,
        })
        },
        )}
    }