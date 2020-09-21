var report = require("../model/report_model");
var express = require("express");
var router = express.Router();


router.post("/", function (req, res, next) {
    report.AddReport(req.body, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  router.get("/",function(req,res,next){
    report.getReport(function(err,rows){
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

  router.put('/',function(req,res,next){
    report.updateReportSeen(req.body.report_id,function(err,rows){
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