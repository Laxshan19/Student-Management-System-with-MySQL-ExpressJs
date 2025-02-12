const express = require("express");
const exphbs=require("express-handlebars");  //Templete Engine
const bodyParser=require("body-parser"); // to json formate data
require('dotenv').config();  // if we use any constant value in project we can use this package(here use for .env file)

const app=express();

//middle ware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());  

//static Files
app.use(express.static("public"));

//Templete Engine
const handlebars=exphbs.create({extname:".hbs"});
app.engine('hbs',handlebars.engine );
app.set("view engine","hbs");


//routes
const routes=require("./server/routes/students");
app.use('/',routes);


//Listen Port
const port = process.env.port||5000;  //server port
app.listen(port,()=>{
    console.log("server running at:" +port);
})