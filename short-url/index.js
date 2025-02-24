const express = require('express');
const app = express();
const PORT = 9000;

const Router = require('./routes/user')
const { connectMongoDb } = require("./connection")
const URL = require('./models/url')

app.use(express.json())

connectMongoDb("mongodb://127.0.0.1:27017/url-shortner")
.then(()=>{console.log("mongoDb connected...")})
.catch((err)=>{console.log("Error: ", err)})

app.use("/url", Router)
app.get("/:id", async (req, res)=>{
    const shortID = req.params.id;
    const entry = await URL.findOneAndUpdate({ shortUrl: shortID }, {
        $push: {
            visitHistory: {
                timeStamp: Date.now(),
            },
        }
    })
    console.log(entry);
    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(entry.redirectUrl);
})
app.get("/analytics/:id", async (req, res)=>{
    const shortID = req.params.id;
    const data = await URL.findOne({shortUrl: shortID})
    res.status(200).json({clicks: data.visitHistory.length, analytics: data.visitHistory},)
}), 

app.listen(PORT, () => {console.log(`Port ${PORT} is running...`)})