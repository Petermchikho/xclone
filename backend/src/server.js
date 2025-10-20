import express from 'express';
import cors from 'cors';
import {clerkMiddleware} from '@clerk/express';

import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';

import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);

// error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log(`Server is running on PORT: ${ENV.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};
startServer().catch((error) => {
  console.error('Unexpected error during server startup:', error);
  process.exit(1);
});
