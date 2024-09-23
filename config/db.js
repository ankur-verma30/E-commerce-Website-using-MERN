import mongoose from 'mongoose'
import colors from 'colors'


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
          console.log(`Connection Successfull at ${conn.connection.host}`.green.underline.bold)
        }
    catch (error) {
        console.log(`Error: ${error}`.red.underline.bold)
    }}

    export default connectDB
