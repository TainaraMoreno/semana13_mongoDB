const mongoose = require('mongoose')
const Schema = mongoose.Schema

const musicasSchema = new Schema({
    _id: { 
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        require: true
    },

    name:{
        type: String,
        required: true
    },

    duration_ms:{
        type: Number,
        required: true
    },

    preview_url:{
        type: String,
        required: true
    },

    album:[{        
        id: Number,
        release_date: String,
        total_tracks: Number,
        url: String
    }],

    artists:[{
        id: Number,
        name: String,
    }],
},

    {
        collection: "musicas",
        versionKey: false 
    }

    );
    
    const musicasCollection = mongoose.model('musicas', musicasSchema)

    module.exports = {musicasCollection}

    