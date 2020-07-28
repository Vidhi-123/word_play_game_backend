var userbyword = require("../model/user_model");
var express = require("express");
var router = express.Router();

router.get("/:wname", function(req, res, next) {
  userbyword.getUserByWords(req.params.wname, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports=router;
