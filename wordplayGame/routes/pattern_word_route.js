var pattern = require("../model/word_model");
var express = require("express");
var router = express.Router();


router.get('/:w_name',function(req,res,next){
    pattern.getWordsByPattern(req.params.w_name,function(err,rows){
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