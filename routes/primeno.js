const express = require("express");
const router = express.Router();
//const data = require("../data/primeno");
//const primeNo = data.primeno;

router.get("/", async(req, res) => {
    try {
        res.render('home', {});
    } catch (error) {
        res.status(404).json({ error: error });
    }
});

let result = "";

module.exports = router;