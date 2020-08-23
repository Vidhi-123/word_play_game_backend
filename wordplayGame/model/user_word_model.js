var db=require('../dbconnection');
var user_word={

  
    addUser_word:function(item,callback){
        console.log(item);
        return db.query("insert into user_word_table (user_id,word_id) values(?,?)",[item.user_id,item.word_id],callback);
    }
};
module.exports=user_word;
