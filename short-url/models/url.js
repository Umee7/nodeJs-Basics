const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
    shortUrl: {
        type: String,
        required: true,
        unique: true,

    },

    redirectUrl: {
        type: String
    },

    visitHistory: [
        {
            timeStamp: {
                type: Number,
                required: true,
            }
        }
    ]
}, { timestamps: true})


const URL = mongoose.model("url", UrlSchema)

module.exports = URL;