const express = require("express");
const studentController=require("../controller/studentsController");

const router=express.Router();

//view all recodes
router.get("/",studentController.view);

//add new recods
router.get("/adduser",studentController.adduser);
router.post("/adduser",studentController.save);

//Upadte Records
router.get("/edituser/:id",studentController.edituser);
router.post("/edituser/:id",studentController.edit);

//Delete Records
router.get("/deleteuser/:id",studentController.deleteuser);


//router.delete("/deleteuser",studentController.delete);
//router.delete("/deleteuser",studentController.delete);


module.exports=router;