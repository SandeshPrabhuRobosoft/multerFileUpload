// const express=require('express')
// const app=express()
// const formidable=require('formidable')

// app.get('/',(req,res)=>[
//     res.sendFile(__dirname+'/index.html')
// ])

// app.post('/',(req,res)=>{
//     let form=new formidable.IncomingForm()
//     form.parse(req)
//     form.on('fileBegin',(name,file)=>{
//         file.path=__dirname+'/uploads/'+file.name
//     })
//     form.on('file',(name,file)=>{
//         console.log("uploaded file"+file.name)
//     })
//     res.sendFile(__dirname+'/index.html')
// })

// app.listen(3000,()=>{
//     console.log("app is running")
// })






// var express = require('express');
// var formidable = require('formidable');

// var app = express();

// app.get('/', function (req, res){
//     res.sendFile(__dirname + '\\index.html');
// });

// app.post('/', function (req, res){
//     var form = new formidable.IncomingForm();

//     form.parse(req);

//     form.on('fileBegin', function (name, file){
//         file.path = __dirname + '\\uploads\\' + file.name;
//     });

//     form.on('file', function (name, file){
//         console.log('Uploaded ' + file.path);
//     });

//     res.sendFile(__dirname + '\\index.html');
// });

// app.listen(3000);