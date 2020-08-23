var user = require("../model/user_model");
var express = require("express");
const jwt=require('jsonwebtoken');
var router = express.Router();

router.get("/:id?", function (req, res, next) {
  if (req.params.id) {
    user.getUserById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    user.getUser(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
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


router.post('/jwt',verifytoken,function(req,res,next){
  res.json({
    message:'post created...'
  });
});

router.post('/login',function(req,res){
  user.getUserLogin(req.body.email_id,req.body.password,function(err,rows){
    if(err)
    {
      res.json(err);
    }
    else{
      res.json(rows);
    }
  })
})

function verifytoken(req,res,next)
{
  const bearerheader=req.headers['authorization'];
  if(typeof bearerheader!=='undefined')
  {
    const bearer=bearerheader.split(' ');
  }
  else{
    res.sendStatus(403);
  }
}
router.put('/',function(req,res,next){
  user.updateUserType(req.body.type,req.body.id,function(err,rows){
    if(err)
    {
      res.json(err);
    }
    else{
      res.json(rows);
    }
  })
})

module.exports=router;