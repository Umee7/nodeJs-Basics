const shortId = require('shortid');;
const URL = require('../models/url');

async function handleGenerateShortUrl(req, res){
    const body = req.body;
    if(!body) return res.status(400).json({error: "bad request.."})
    const shortID = shortId.generate(); 
    if(!shortID) return res.json({status: "error while generating url.."})

    const entry =  await URL.create({
        shortUrl: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    })

    console.log(entry);
    return res.status(201).json({shortUrl: entry.shortUrl})
}

async function handleRedirectShortUrl(req, res){
    const url = req.params.url;
    const entry = await URL.findOneAndUpdate({shortUrl: url}, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    })
    if(!entry) return res.status(400).json({status: "bad request..."})

    res.redirect(entry.redirectUrl)
}

async function handleUrlAnalytics(req, res){
    const url = req.params.url;
    if(!url) return res.status(400).json({status: "bad request..."})
    const urlDetails = await URL.findOne({shortUrl: url})
    if(!urlDetails) return res.status(404).json({error: "user not found.."})
    return res.status(200).json({totalClicks: urlDetails.visitHistory.length, 
        analytics: urlDetails.visitHistory
    })

}

module.exports = {
    handleGenerateShortUrl,
    handleRedirectShortUrl,
    handleUrlAnalytics,
}