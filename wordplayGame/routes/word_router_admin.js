var word_admin = require("../model/word_model");
var user_word=require("../model/user_word_model");
var rating=require("../model/rating_model");
var express = require("express");
var router = express.Router();

router.get("/:id?", function (req, res, next) {
  if (req.params.id) {
    word_admin.getWordsAdminId(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    word_admin.getwordsAdmin(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.delete("/:id", function (req, res, next) {
  word_admin.deleteWord(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      //res.json(rows);
      user_word.deleteWord(req.params.id,function(err,rows){
        if(err)
        {
          res.json(err);
        }
        else
        {
          rating.DeleteWordById(req.params.id,function(err,rows){
            if(err)
            {
              res.json(err);
            }
            else{
              res.json(rows);
            }
          })
        }
      })
    }
  });
});
module.exports=router;