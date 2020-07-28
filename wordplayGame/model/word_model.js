var db=require('../dbconnection');
var word={

    getAllWords:function(callback){
        return db.query("select * from word_tbl ORDER BY w_rating DESC",callback);
    },
    addWord:function(item,callback){
        return db.query("insert into word_tbl values(?,?,?,?,?,?)",[item.w_id,item.u_id,item.w_name,item.w_rating,item.w_rating_count,item.is_adult],callback);
    },
    deleteWord:function(id,callback){
        return db.query("delete from word_tbl where w_id=?",[id],callback);
    },
    getCntAvgByWorduser:function(id,callback){
        return db.query("select word_tbl.*, user_tbl.*,COUNT(word_tbl.u_id)'Count_words',AVG(word_tbl.w_rating)'Avg_rating' from word_tbl JOIN user_tbl ON user_tbl.u_id=word_tbl.u_id where word_tbl.u_id=?",[id],callback);
    },
    updateword:function(w_rating,w_rating_count,w_id,callback){
        console.log(w_rating,w_rating_count,w_id);
        return db.query("UPDATE `word_tbl` SET `w_rating`=?,`w_rating_count`=? WHERE w_id=? ",[w_rating,w_rating_count,w_id],callback)
    }
};
module.exports=word;