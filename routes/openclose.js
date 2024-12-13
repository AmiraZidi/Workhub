const express =require ("express");
const opencloseRouter = express.Router ();

opencloseRouter.get("/", (req,res) =>{
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    if (day === 0 || day === 6 || hours < 9 || hours >= 18) {
        res.render("closed.ejs");
    } else {
        res.render("index.ejs");
    }
});

opencloseRouter.get("/services", (req,res) =>{
   res.render("services");
});

opencloseRouter.get("/contact", (req,res) =>{
    res.render("contact");
 });

 opencloseRouter.get("", (req,res) =>{
    res.render("index");
 });
module.exports=opencloseRouter;