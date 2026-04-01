const mongoose = require ("mongoose")
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoDB)
        console.log("mongoDB is connected")
    } catch(error){
        console.error(error);
        console.log(error);
        process.exit(1);
    }
}
module.exports= connectDB;