import { EventEmitter } from 'events';
import dotenv from 'dotenv';
import express, { type Request, Response, NextFunction } from "express";
import cors from 'cors';
import { connectDB } from './db';
import authRoutes from './routes/auth';
import servicesRoutes from './routes/services';
import bookingsRoutes from './routes/bookings';
import usersRoutes from './routes/users';
import contactRoutes from './routes/contact';
import { authenticateToken } from './middleware/auth';
import { registerRoutes } from './routes';
import path from 'path';
import { fileURLToPath } from 'url';
import mimeTypes from 'mime-types';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/bookings', authenticateToken, bookingsRoutes);
app.use('/api/users', authenticateToken, usersRoutes);
app.use('/api/contact', contactRoutes);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server after connecting to MongoDB
const startServer = async () => {
  try {
    await connectDB();
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📊 Health check: http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
  console.error('Unhandled Rejection. Shutting down...');
  console.error(err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception. Shutting down...');
  console.error(err);
  process.exit(1);
});

// Start the server
startServer();
