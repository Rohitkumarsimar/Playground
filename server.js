import express from 'express'

const app = express()

function logger(req, res, next){
    console.log(Date())
    console.log(req.method)
    console.log(req.url)
}




app.use('/',logger,(req, res)=>{
    res.json({message: "hello"})
})


app.listen(3000, ()=>{
    console.log(`app is listening on http://localhost:3000`)
})