// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// Import routes
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import productRoutes from "./routes/product.route.js"
import cartRoutes from "./routes/cart.route.js"
import orderRoutes from "./routes/order.route.js"
import paymentRoutes from "./routes/payment.route.js"
import adminRoutes from "./routes/admin.route.js"

// Import middlewares
import { verifyToken } from './middlewares/auth.middleware.js';

dotenv.config();
const app = express();
app.use(cors());  
app.use(express.json());

// ===== Middleware =====
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))


// // ===== Routes =====
app.use('/api/auth', authRoutes);
app.use('/api/user', verifyToken,userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/admin', adminRoutes);


// // ===== 404 =====
app.use((req, res) => {
  res.status(404).json({ message: 'API not found' });
});

// ===== Error handler =====
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error'
  });
});

export default app;
