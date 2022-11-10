var express = require("express");
var router = express.Router();
var { numberToWords } = require("./utils/numberToWords");

router.get("/:number", function (req, res, next) {
  res.send({ extenso: numberToWords(req.params.number) });
});

module.exports = router;
