var word = require("../model/word_model");
var express = require("express");
var router = express.Router();

router.get("/date_time",function(req,res,next){
word.getWordsByDateandTime(function(err,rows){
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

router.get("/word_name",function(req,res,next){
    word.getWordsByWordName(function(err,rows){
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

    router.get("/word_name_desc",function(req,res,next){
        word.getWordsByDesc(function(err,rows){
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


        router.get("/word_rating",function(req,res,next){
            word.getWordsByRating(function(err,rows){
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