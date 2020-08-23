var db=require('../dbconnection');
var rating={

    getRatingCountAvg(w_id,callback)
    {
       return db.query("SELECT COUNT(*)'rating_count',AVG(star)'avg_rating' FROM rating_table WHERE word_id=?",[w_id],callback);
    },
    deleteRatingByWordId(w_id,callback)
    {
        return db.query("delete from rating_table where word_id=? and user_id=0",[w_id],callback);
    },
    addRating(item,callback)
    {
        return db.query("insert into rating_table (user_id,word_id,star) values (?,?,?)",[item.user_id,item.word_id,item.star],callback);
    },
    getWordStarByWordUserId(word_id,user_id,callback)
    {
        return db.query("SELECT star FROM rating_table WHERE word_id=? and user_id=?",[word_id,user_id],callback);
    }
};

module.exports=rating;