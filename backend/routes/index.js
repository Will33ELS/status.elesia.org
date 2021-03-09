var express = require('express');
var router = express.Router();

var axios = require("axios");

/* GET home page. */
router.get('/', async function(req, res, next) {
    const httpClient = axios.create();
    httpClient.defaults.timeout = 500;

    let elenox = await httpClient.get("https://www.elenox.net/api/v1/status").then(response => { return response.data; }, (err) => {
        console.log(err)
    });
    elenox.id = 1;

    let hizonia = await httpClient.get("https://hizonia.net/api/v1/status").then(response => { return response.data; });
    hizonia.id = 2;

    const final = [elenox, hizonia];

    res.status(200).json(final);
});

module.exports = router;
