//const express = require("express");
//const app = express();
import express from 'express';
import { engine } from 'express-handlebars';
const app = express();

import { createRequire } from 'module';
//import articales from './data/articles';
const require = createRequire(import.meta.url);
//const path = require("path");

//expresss handlebars 設定
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//假資料export
const articles = require("./data/articles");

//定義public floder，網址有/static
const path = require("path");
app.use("/static",express.static("public"));

app.get("/",function(req,res){
    res.render("home");
    //res.send("Hello WWorld");
});
//文章列表
app.get("/articles",(req,res)=>{
    res.render("articles",{articles : articles});
    //res.send("articles");
});
//單篇文章
app.get("/articles/:id",(req,res)=>{
    //res.send("article");
    const id = req.params.id;
    res.render("article",{
        articles : [articles[id]],
        backUrl : "/articles",
    });
});

/* error page */
app.get("/*",function(req,res){
    res.send("page not found");
});

app.listen(3000, ()=>{
    console.log("express app listen on port 3000");
});