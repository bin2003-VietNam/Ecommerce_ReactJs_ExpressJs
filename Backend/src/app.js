import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import authRoutes from "./routes/auth.route.js"

const app = express();
app.use(cors());
app.use(express.json());

// ===== Middleware =====
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))


// // ===== Routes =====
app.use('/api/auth', authRoutes);


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
