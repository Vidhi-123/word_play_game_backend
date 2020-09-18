var db=require('../dbconnection');
var word={

    getAllWords:function(callback){
        return db.query("select * from word_table",callback);
    },
    getWordById:function(id,callback)
    {
        return db.query("SELECT w.*,uw.user_id,u.name,count(*)'rating_count',avg(r.star)'rating_avg' FROM word_table w,user_word_table uw,user_table u,rating_table r WHERE uw.word_id=w.word_id and u.user_id=uw.user_id and w.id=? and r.word_id=w.word_id GROUP by word_id",[id],callback);
    },
    getWordsByPattern:function(w_name,callback)
    {
        return db.query("select SUBSTRING_INDEX(word_name, '-', 1),SUBSTRING_INDEX(word_name, '-', -1) from word_table where SUBSTRING_INDEX(word_name, '-', 1)=? or SUBSTRING_INDEX(word_name, '-', -1)=?",[w_name,w_name],callback);
    },
    addWord:function(item,callback){
        var today=new Date();
        return db.query("insert into word_table (id,word_name,is_adult,date_time) values(?,?,?,?)",[item.id,item.word_name,item.is_adult,today],callback);
    },
    deleteWord:function(id,callback){
        return db.query("delete from word_table where w_id=?",[id],callback);
    },
    getCntAvgByWorduser:function(id,callback){
        return db.query("select avg(star) 'average_rating' from rating_table where  word_id in (SELECT word_id from user_word_table where user_id=?)",[id],callback);
    },
    updateword:function(w_rating,w_rating_count,w_id,callback){
        console.log(w_rating,w_rating_count,w_id);
        return db.query("UPDATE `word_table` SET `w_rating`=?,`w_rating_count`=? WHERE w_id=? ",[w_rating,w_rating_count,w_id],callback)
    },
    getmaxIdPlusOne:function(callback)
    {
        return db.query("SELECT MAX(id)+1 as 'max_id' FROM word_table",callback);
    },
    getWordsByDateandTime:function(callback)
    {
        return db.query("select * from word_table order by date_time desc",callback);
        
    },
    getWordsByWordName:function(callback)
    {
        return db.query("select * from word_table order by word_name",callback);
    },
    getWordsByDesc:function(callback)
    {
        return db.query("select * from word_table order by word_name desc",callback);
    },
    getWordsByRating:function(callback)
    {
        return db.query("select w.*,avg(r.star) from word_table w,rating_table r where w.word_id=r.word_id group by word_id order by avg(r.star) desc",callback);
    },
    getWordsByUserId:function(user_id,callback)
    {
        return db.query("select count(word_id) 'total_words' from user_word_table where user_id=? group by user_id",[user_id],callback)
    },
    getWordIdRatingByUserId:function(user_id,callback)
    {
        return db.query("select AVG(r.star) 'rating',w.word_id from rating_table r,user_word_table w where r.word_id=w.word_id and w.user_id=? GROUP by w.word_id ",[user_id],callback)
    }
    
};
module.exports=word;