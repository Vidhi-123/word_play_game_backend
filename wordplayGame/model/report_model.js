var db=require('../dbconnection');
var report={

    AddReport:function(item,callback){
        return db.query("insert into report_table (word_id,user_id,is_seen) values (?,?,?)",[item.word_id,item.user_id,item.is_seen],callback);
    },
    getReport:function(callback)
    {
        return db.query("select r.*,w.* from report_table r,word_table w where w.word_id=r.word_id",callback);
    },
    updateReportSeen:function(id,callback)
    {
        return db.query("update report_table set is_seen=1 where report_id=?",[id],callback);
    }
}
module.exports=report;