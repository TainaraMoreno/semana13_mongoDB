const express = require('express')
const router = express.Router()
const controller = require('../controllers/musicasController')

router.get('/musicas', controller.getMusicas)

router.post('/musicas', controller.addMusicas)

router.get('/musicas/:id', controller.getMusicasId)

router.put('/musicas/:id', controller.musicasUpdate)

router.delete('/musicas/:id', controller.deletarMusicas)

module.exports = router