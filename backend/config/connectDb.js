import mongoose from "mongoose";

export const dbconnection = async()=>{
    await mongoose.connect(process.env.CONNECT_STRING)
    .then(()=> console.log('connected to db')
    )
}