import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017/PlayGround-DB"

const client = new MongoClient(url)

async function createDb(){
    try{
        await client.connect()
        console.log("Client connected successfully")
        const db = client.db("PlayGround-DB")
        const collection  = db.collection("Test-Collection")
        const result = await collection.insertOne({name: "Rohit Kumar", message:"Testing database creation in MongoDB",created_at:new Date()})

        console.log("Db created successfully")
        console.log("message: ", result)

    }catch(err){
        console.log("error: ", err.message)
    }finally{
        await client.close()
        console.log("Client closed successfully")
    }
}

createDb()