var rating = require("../model/rating_model");
var express = require("express");
var router = express.Router();


router.get('/:w_id',function(req,res,next){
    rating.getRatingCountAvg(req.params.w_id,function(err,rows){
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


router.delete('/:w_id',function(req,res,next){
   rating.deleteRatingByWordId(req.params.w_id,function(err,rows){
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

router.get('/getstar/:word_id/:user_id',function(req,res,next){
    rating.getWordStarByWordUserId(req.params.word_id,req.params.user_id,function(err,rows){
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

router.post('/',function(req,res,next){
    rating.addRating(req.body,function(err,rows){
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