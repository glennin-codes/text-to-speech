// import express from "express";
// import  {gTTS}  from "gtts.js";
// import bodyParser from "body-parser";
// import fs from "fs"

// const app =express();
const PORT =7000
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.json())
// app.set("view engine","ejs");
// app.get("/",(req,res)=>{
//     res.render("index" )
// })
// 
//   app.get('/', function(req, res) {
//       res.set({'Content-Type': 'audio/mpeg'});
//       speech.stream(req.body.text).pipe(res);
//     })

const gTTS = require('gtts');
const express = require('express');
const bodyParser =require ('body-parser')
const fs = require ('fs')
const app = express();
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
  res.render('index',{title:"media"})
})
app.post("/index.js",(req,res)=>{
    const speech=req.body.text;
    const lang=req.body.language;
    const modifiedLang= lang.toLowerCase();
    const voice= new gTTS(speech,modifiedLang)
    voice.stream().pipe(res)
    console.log(speech)
})
// app.post("/index.js", (req,res)=>{
//         const language=req.body.language
//         const modLang=language.toLowerCase()
//       const Text= req.body.text
//       const outPutFilePath= Date.now() + "outPut.mp3"
//       console.log(Text)
      
//       const speech = new gTTS(Text,modLang)
//       speech.save(outPutFilePath,(err,result)=>{
//         if (err){
//             fs.unlinkSync(outPutFilePath)
//             res.send("unable to convert to mp3")
//         }
//         res.download(outPutFilePath,(err)=>{
//             fs.unlinkSync(outPutFilePath)
//             res.send("download failed")
//         })
//         fs.unlinkSync(outPutFilePath)
//       })
      
// })
      
      
      
      
      
      
     
// var speech = 'Welcome to the world';
// var gtts = new gTTS(speech, 'en');

// gtts.save('speech.mp3', function (err, result){
//   if(err) { throw new Error(err); }
//   console.log("Text convered into speech");
// });
// })
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT} ...`);
})