const express=require('express')
const ejs=require('ejs')
const multer = require('multer')
const path=require('path')

// set storage engine
const storage=multer.diskStorage({
    destination:'./public/uploads',
    filename:function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

// init upload
const upload=multer({
    storage: storage,
    limits:{fileSize:1000000},
    fileFilter:function(req, file, cb){
        checkFileType(file, cb)
    }
}).single('myImage')

// check file type
function checkFileType(file, cb){
    // allowed extensions 
    const fileTypes= /jpeg|jpg|png|gif/
    // check extension
    const extName=fileTypes.test(path.extname(file.originalname).toLocaleLowerCase())
    // check mime type
    const mimeType= fileTypes.test(file.mimetype)
    if(mimeType && extName)
        return cb(null, true)
    else
        cb('Error: Images only')
}

// init app
const app=express()

// EJS
app.set('view engine','ejs')

// public folder
app.use(express.static('./public'))

app.get('/',(req,res)=>res.render("index"))

app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            res.render('index',{
                msg:err
            })
        } else {
            if(req.file == undefined){
                res.render('index',{
                    msg: 'Error: No file selected'
                })
            }
            else{
                res.render('index',{
                    msg: 'File uploaded',
                    file: `uploads/${req.file.filename}`
                })
            }
        }
    })
})

const port=3000

app.listen(port,()=>console.log(`App is running on port ${port}`))