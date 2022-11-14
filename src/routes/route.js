// Aquí pondremos las rutas de nuestro proyecto

const {Router} = require('express')

const router = Router()

router.get('/saludo', (req, res) => {
    res.json({saludo : "Buenas tardes"})
})
router.get('/', (req,res) => {
     res.sendFile(join(__dirname, staticFolder,'/index.html'))
 })

module.exports = router