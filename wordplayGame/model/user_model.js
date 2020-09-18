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
    }

};
module.exports=user;