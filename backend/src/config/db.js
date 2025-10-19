import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB=async()=>{
    if (!ENV.MONGODB_URI) {
        console.error('Error: MONGODB_URI is not defined in environment variables.');
        process.exit(1);
    }
    try{
        // Database connection logic here using ENV.MONGODB_URI
        
        await mongoose.connect(ENV.MONGODB_URI)
        console.log('MongoDB connection established successfully.');
    }catch(error){
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
        
    }
}