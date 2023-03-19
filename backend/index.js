import express from "express"

import mysql from "mysql2"
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1Srikanth@1947",
    database:"mydatabase"
})
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
app.listen(8800,()=>{
    console.log("Connected bekend");
})
app.get("/",(req,res)=>{
    res.json("hello guru");
})

app.get("/books",(req,res) =>{
    const booksQuery = "SELECT * FROM books"
    con.query(booksQuery,(err,data)=>{
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books",(req,res)=>{
    const insertBookQuery = "INSERT INTO books (`title`,`author`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.author,
    ]
    con.query(insertBookQuery,[values],(err,data) =>{
        if (err) return res.json(err)
        return res.json(data)
    })

})

