const express = require("express");
const studentController=require("../controller/studentsController");

const router=express.Router();

//view all recodes
router.get("/",studentController.view);

//add new recods
router.get("/adduser",studentController.adduser);
router.post("/adduser",studentController.save)


// router.get('',(req,res)=>{
//     res.render("home");
// });

module.exports=router;