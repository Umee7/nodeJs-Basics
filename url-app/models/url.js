const mongoose = require('mongoose');

const UrlSchema = mongoose.Schema({
    shortUrl: {
        type: String,
        requried: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
    },
    visitHistory: [
        {
            timestamp: {
                type: Number,
            }
        }
    ]
}, {timestamps: true});

const URL = new mongoose.model("url", UrlSchema);

module.exports = URL;
