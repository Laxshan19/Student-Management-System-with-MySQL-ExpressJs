const express = require("express");
const studentController=require("../controller/studentsController");

const router=express.Router();

router.get("/",studentController.view);


// router.get('',(req,res)=>{
//     res.render("home");
// });

module.exports=router;