const express = require('express');
const Router = express.Router();
const { handleGenerateShortUrl } = require('../controllers/user');


Router.post("/",handleGenerateShortUrl)


module.exports = Router;