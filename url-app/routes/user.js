const express = require('express');

const Router = express.Router();

const { handleGenerateShortUrl,
        handleRedirectShortUrl,
        handleUrlAnalytics } = require('../controllers/user')

Router.route("/")
.post(handleGenerateShortUrl) 

Router.route("/:url")
.get(handleRedirectShortUrl)

Router.route("/analytics/:url")
.get(handleUrlAnalytics)

module.exports = Router;