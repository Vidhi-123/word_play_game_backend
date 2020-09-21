var db=require('../dbconnection');
var user={

    getUser:function(callback){
        return db.query("select * from user_table",callback);
    },
    addUser:function(item,callback){
        return db.query("insert into user_table values(?,?,?,?,?)",[item.u_id,item.email_id,item.u_name,item.u_birthyear,item.zipcode],callback);
    },
    getUserById:function(uid,callback){
        return db.query("select * from user_table where user_id=?",[uid],callback);
    },
    getUserLogin:function(email_id,password,callback)
    {
        return db.query("select * from user_table where email_id=? and password=?",[email_id,password],callback);
    },
    updateUserType:function(type,id,callback)
    {
        return db.query("update user_table set type=? where user_id=?",[type,id],callback);
    },
    updateCoin:function(user_id,coins,callback)
    {
        return db.query("update user_table set coins=? where user_id=?",[coins,user_id],callback)
    },
    userAdmin:function(callback)
    {
        return db.query("select u.*,count(DISTINCT uw.word_id)'words_count',AVG(star)'average_rating' from user_table u,user_word_table uw,rating_table r where u.user_id=uw.user_id and uw.word_id=r.word_id group by uw.user_id ",callback);
    },
    userViewAdmin:function(user_id,callback)
    {
        return db.query("select w.word_name,AVG(r.star)'average_rating',count(r.user_id)'rater_count' from word_table w,user_word_table uw,rating_table r where uw.word_id=w.word_id and uw.word_id=r.word_id and uw.user_id=? group by r.word_id",[user_id],callback);
    },
    disableUser:function(user_id,callback)
    {
        return db.query("update user_table set is_enabled=0 where user_id=?",[user_id],callback);
    }


};
module.exports=user;