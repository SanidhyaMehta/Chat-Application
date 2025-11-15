import mongoose from "mongoose";
const connectMongoDB = async () =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected : ${connection.connection.host}`)
    } catch (error) {
        console.error('MongoDB connection error:', error && error.message ? error.message : error);
        // In development, do not exit the process so the server can run without DB for UI/front-end work.
        if (process.env.NODE_ENV === 'production') {
            process.exit(1);
        } else {
            console.warn('Continuing without MongoDB connection (development mode). Some features will be disabled.');
        }
    }
}
export default connectMongoDB;