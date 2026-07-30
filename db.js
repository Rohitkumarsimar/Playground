
// import { MongoClient } from 'mongodb'

// const url = "mongodb://127.0.0.1:27017/playgroundDb"

// const client = new MongoClient(url)

//  async function run(){
//     try{
//       await client.connect();
//         console.log("connected")

//         const db = client.db("playgroundDb")
//         const collection = client.Collection("testCollection")
//         const result = await db.insertOne({message: "hello mongo db"})
//         console.log("created successfully")
//     }catch(err){
//         console.log("Error occured")
//         throw  err
//     }finally{
//         await client.close()
//         console.log("connection close successfully")
//     }
// }

// run()







import { MongoClient } from 'mongodb'

const url = "mongodb://127.0.0.1:27017/playgroundDb"
const client = new MongoClient(url)

async function run(){
    try {
        await client.connect();
        console.log("Connected to MongoDB...");

        // 1. Database reference lein
        const db = client.db("playgroundDb");

        // 2. Collection select karein (Yeh bhi lazily create hoti hai)
        const collection = db.collection("testCollection");

        // 3. Ek dummy data insert karein (Is step ke bina DB Compass me nahi dikhega)
        const result = await collection.insertOne({ message: "Hello MongoDB", createdAt: new Date() });
        
        console.log("Database and Collection created successfully!");
        console.log("Inserted Document ID:", result.insertedId);

    } catch(err) {
        console.log("Error occurred:", err.message);
    } finally {
        await client.close();
        console.log("Connection closed successfully");
    }
}

run();






// import mongoose from "mongoose";

// const uri = "mongodb://127.0.0.1:27017/playground-db"

// mongoose.connect(uri).catch((err)=>console.log(err))