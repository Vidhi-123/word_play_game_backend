var userword = require("../model/user_word_model");
var word = require("../model/word_model");
var express = require("express");
var router = express.Router();




router.post("/", function (req, res, next) {
    console.log(req.body)
    userword.addUser_word(req.body, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });


  router.get('/rating/:user_id',function(req,res,next){
    word.getWordIdRatingByUserId(req.params.user_id,function(err,rows){
      if(err){
        res.json(err);
      }
      else{
        res.json(rows);
      }
    })
  })

  module.exports=router;