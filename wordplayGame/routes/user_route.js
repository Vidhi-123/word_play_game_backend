var user = require("../model/user_model");
var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  user.getUser(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
router.post('/',function(req,res,next){
    user.addUser(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;