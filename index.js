const express = require("express");
const bodyParser = require("body-parser")
const ejs = require("ejs");
const app = express();
const path = require('path')


app.use(express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/donorReg", (req,res)=>{
  res.render("donorReg2");
})

app.get("/beneficiaryReg", (req,res)=>{
  res.render("BeneficiaryReg")
})


// const port = process.env.PORT || 3001;
app.listen(3001, async (req, res) => {
  console.log("server is running on port " + port);
});