var user = require("../model/user_model");
var express = require("express");
var router = express.Router();


router.get("/:id?", function (req, res, next) {
    if (req.params.id) {
      user.userViewAdmin(req.params.id, function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    } else {
      user.userAdmin(function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    }
  });

  router.put('/',function(req,res,next){
      user.disableUser(req.body.user_id,function(err,rows){
          if(err)
          {
              res.json(err);
          }
          else
          {
              res.json(rows);
          }
      })
  })
  module.exports=router;



