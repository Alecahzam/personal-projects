module.exports = {
    upload: (req,res,next) => {
        let uploadFile = req.files.file
        const fileName = req.files.file.name
        uploadFile.mv(`${__dirname}/public/files/${fileName}`,
        function (error){
            if (error) {
                return res.status(500).send(error)
            }
            res.json({file: `public/${req.files.file.name}`,
        })
        },
        )}
    }