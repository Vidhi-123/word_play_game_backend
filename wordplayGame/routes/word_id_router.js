var word_id = require("../model/word_model");
var express = require("express");
var router = express.Router();


router.get('/',function(req,res,next){
    word_id.getmaxIdPlusOne(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});
module.exports=router;