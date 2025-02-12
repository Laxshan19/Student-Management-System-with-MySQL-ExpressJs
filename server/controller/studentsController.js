const mysql=require("mysql2");     //  to communicate to mysql server

//Mysql connection
const con=mysql.createPool({
    connectionLimit:10,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    port: process.env.DB_PORT
});


exports.view=(req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        var sql="select * from students";
        connection.query(sql,(err,result)=>{
        connection.release();
        if(!err){
           // console.log("Fetched Data:", result);
          //  res.json(result);
            res.render("home",{result});
        }else{
            console.log("Error in Listiong"+err);
        }
        })
     })
}

exports.adduser=(req,res)=>{
    res.render("adduser");
}

exports.save=(req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err

        const {name,age,city}=req.body;

     
        var sql="insert into students (name,age,city) values (?,?,?)";
        connection.query(sql,[name,age,city],(err,result)=>{
        connection.release();
        if(!err){;
            res.render("adduser");
        }else{
            console.log("Error in Listiong"+err);
        }
        })
     })
}