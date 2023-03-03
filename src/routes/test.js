const express= require('express')
const { default: mongoose } = require('mongoose')
const route= reuire("./route/route.js")
const app=express()

app.use(express.json())

mongoose.connect("djjdksjkkj",{useNewUrlParser:true})
.then(()=>console.log("mongodb is connected"))
.catch(()=> console.log(err))

app.use("/",route)

app.listen(3000, function(){
    console.log("Express app running on port"+3000)
})