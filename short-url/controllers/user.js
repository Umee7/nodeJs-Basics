var shortid = require('shortid')
const Url = require("../models/url")

async function handleGenerateShortUrl(req, res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "Url is required"});
    const newUrl = shortid.generate();
    if(!newUrl) return res.status(500).json({error: "Error generating the url.."})

    await Url.create({
        shortUrl: newUrl,
        redirectUrl: body.url,
        visitHistory: [],
    })

    return res.json({id: newUrl });
}

async function handleRedirectUrl(req, res){
    
}

module.exports = {
    handleGenerateShortUrl,
    
}