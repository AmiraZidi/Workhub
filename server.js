const express = require("express");
const app = express();
const path= require('path')
app.use("/workhub", require("./routes/openclose"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, (err)=>err?console.log(err):console.log("Running"));