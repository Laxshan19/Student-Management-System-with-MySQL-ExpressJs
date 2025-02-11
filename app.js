const exphbs=require("express-handlebars");  //
const bodyParser=require("body-parser"); // to json formate data
const mysql=require("mysql2");     //  to communicate to mysql server
const express = require("express");

require('dotenv').config();  // if we use any constant value in project we can use this package


const app=express();
const port = process.env.port||5000;

//middle ware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());  

//static Files
app.use(express.static("public"));

//Templete Engine
const handlebars=exphbs.create({extname:".hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs");

/*
//Mysql connection
const con=mysql.createPool({
    connectionLimit:10,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    port: process.env.DB_PORT
});
//check connection
 con.getConnection((err,connection)=>{
    if(err) throw err
    console.log("connection Success!");
 })

*/
//Router
// app.get('/',(req,res)=>{
//     res.render("home");
// });

const routes=require("./server/routes/students");
app.use('/',routes);

//Listen Port
app.listen(port,()=>{
    console.log("server running at:" +port);
})