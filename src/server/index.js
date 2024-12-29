const express = require("express")
const path = require('path');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv")
const {analyze} = require("./analyze.js")
//using cors
app.use(cors());

// configure env files
dotenv.config()

const port = 8001
const key = process.env.API_KEY


//read json file
app.use(express.json())
app.use(express.static('dist'))


app.get("/",(req, res) => {
    res.render("index.html")
})

app.post("/", async (req,res) => {
   const url = req.body.input;
   const Analyze = await analyze(url, key)
   const {code, msg, sample} = Analyze
   if(code == 100 || code ==212){
    return res.send({msg: msg, code:code})
   }
   return res.send({sample: sample, code: code})
})

app.listen(8001, () => console.log(`server is listening on port ${port}`))