const { model } = require('mongoose');
const musicas = require('../models/musicasSchema')


const getMusicas = (req, res) => {
    console.log(req.url);
    musicas.musicasCollection.find((error, musics) => {
        if (error) {
            res.status(500).send(error);
        }else{
            res.status(200).send(musics)
        }
    })
}

const getMusicasId = (req, res) => {
    const idParam = req.params.id
    musicas.musicasCollection.findId(idParam,(error, musics) => {
        if (error) {
            return res.status(500).send(error);            
        }else{
            if (musics){
                res.status(200).send(musics)
            }else{
                return res.status(404).send('Musica não encontrada: ( ')
            }
        }
    })
}

const addMusicas = (req,res) => {
    console.log(req.url);
    const musicasBody = req.body
    const musica = new musicas.musicasCollection(musicasBody)

    musica.save((error) => {
        if(error) {
            return res.status(400).send(error);
        } else {
            return res.status(201).send(musicas)
        } 
    })
    
}

const musicasUpdate = (req, res) => {
    const idParam = req.params.id
    const musicasBody = req.body
    const novo = {new: true} 

    musicas.musicasCollection.findIdUpdate(
        idParam,
        {$set: musicasBody}, 
        novo,
        (error, musics) => {
            if (error){
                return res.status(500).send(error)
            }else if(musics){
                return res.status(200).send(musics)
            }else{
                return res.sendStatus(404)
            }
        }             

    )
}


const deletarMusicas = (req, res) => {
    const idParam = req.params.id
    musicas.musicasCollection.findIdDeletar(idParam,(error, musics) =>{
        if (error) {
            return res.status(500).send(error)
        }else{
            if (musics) {
                return res.status(200).send("Musica Deletada!")
            }else{
                return res.status(404)
            }
        }
    })
}

module.exports = {
    getMusicas,
    getMusicasId,
    addMusicas,
    musicasUpdate,
    deletarMusicas
}
