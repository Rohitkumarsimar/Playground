import express from 'express'
import jsonwebtoken from 'jsonwebtoken'

const app = express()

function logger(req, res, next){
    console.log(Date())
    console.log(req.method)
    console.log(req.url)
}


// function authMiddleware(req, res, next){
//     const 
// }

app.use('/',logger,(req, res)=>{
})

app.use('/register',)


app.listen(3000, ()=>{
    console.log(`app is listening on http://localhost:3000`)
})