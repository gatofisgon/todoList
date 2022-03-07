const express = require("express");
const bodyParser = require("body-parser");
const { redirect } = require("express/lib/response");
const date = require(__dirname + "/date.js")

const app = express();

const items = ["Buy food", "Drink milk", "Keep coding!"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

    const day = date.getDay();

    res.render("list", {kindOfDay: day, newListItem: items});

});

app.post("/", function(req, res){
    const item = req.body.newList;

    items.push(item);
    
    res.redirect("/")
});

app.get("/about", function(req, res){
    res.render("about");
})


app.listen(3000, function(){
    console.log("Server started on port 3000");
});