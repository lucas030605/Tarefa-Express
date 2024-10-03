const express = require('express');
const router = express.Router();
const path = require("path");
const basePath = path.join(__dirname);


router.get('/', (req, res) => {
    res.sendFile(`${basePath}/inicial2.html`);
});

module.exports = router;