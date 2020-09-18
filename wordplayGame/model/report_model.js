var db=require('../dbconnection');
var report={

    AddReport:function(item,callback){
        return db.query("insert into report_table (word_id,user_id,is_seen) values (?,?,?)",[item.word_id,item.user_id,item.is_seen],callback);
    },
}
module.exports=report;