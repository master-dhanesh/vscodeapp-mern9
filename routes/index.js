var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

const globalpath = path.join(__dirname, "../", "public", "uploads");

router.get("/", function (req, res, next) {
    const files = fs.readdirSync(globalpath);
    res.render("index", { files: files });
});

router.get("/:filename", function (req, res, next) {
    const files = fs.readdirSync(globalpath);
    res.render("index", { files: files });
});

router.post("/createfile", function (req, res, next) {
    // const filename = req.body.filename;
    const { filename } = req.body;
    fs.writeFileSync(path.join(globalpath, filename), "");
    res.redirect(`/${filename}`);
});

module.exports = router;
