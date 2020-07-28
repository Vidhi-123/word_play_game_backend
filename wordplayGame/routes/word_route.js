var word = require("../model/word_model");
var express = require("express");
var router = express.Router();

router.get("/:id?", function (req, res, next) {
  if (req.params.id) {
    word.getCntAvgByWorduser(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    word.getAllWords(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.post("/", function (req, res, next) {
  word.addWord(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:id", function (req, res, next) {
  word.deleteWord(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


router.put("/",function(req,res,next){
  console.log(req.body);
  word.updateword(req.body.w_rating,req.body.w_rating_count,req.body.w_id,function(err,rows){
    if(err){
      res.json(err);
    }
    else{
      res.json(rows);
    }
  })
})

module.exports = router;
