import mongoose from "mongoose";

let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = {conn: null, promise: null}
}

async function connectDB() {
    
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        // establish mongoDB collection
        const opts = {
            bufferCommands: false
        }

        console.log(process.env.MONGODB_URI)

        // cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts).then( mongoose => {
        //     return mongoose
        // })
        cached.promise = mongoose.connect('mongodb+srv://mahirtshah13:vnTCPGVZE03c45sN@cluster0.sqbfw.mongodb.net/quickcart', opts).then( mongoose => {
            return mongoose
        })

    }

    cached.conn = await cached.promise
    return cached.conn

}

export default connectDB