const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const data = require("./data");

server.use(express.static('assets'));

server.set("view engine", "njk");

nunjucks.configure("view", {
    express: server
});

server.listen(5003, function(){
    console.log("server is running!");
});

server.get("/", function(req, res){
    return res.render("index", {data});
});

server.get("/receitas/:index", function(req, res){
    const index = req.params.index;
    const recipe = data.find( data => data.id == index);
    return res.render("receitas", {recipe});
});

server.get("/sobre", function(req, res){
    return res.render("sobre");
});