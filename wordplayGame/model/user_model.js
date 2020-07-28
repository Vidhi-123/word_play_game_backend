var db=require('../dbconnection');
var user={

    getUser:function(callback){
        return db.query("select * from user_tbl",callback);
    },
    addUser:function(item,callback){
        return db.query("insert into user_tbl values(?,?,?,?,?)",[item.u_id,item.email_id,item.u_name,item.u_birthyear,item.zipcode],callback);
    },
    getUserByWords:function(wname,callback){
        return db.query("select w.*,u.* from word_tbl w,user_tbl u where w.u_id=u.u_id AND w.w_name=?",[wname],callback);
    },

};
module.exports=user;