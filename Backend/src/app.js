import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// import authRoutes from './routes/auth.route.js';
// import userRoutes from './routes/user.route.js';
// import productRoutes from './routes/product.route.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
})

app.post('/api/auth/login', (req, res) => {
    res.send('FUCK YOU LOGIN');
})

// // ===== Middleware =====
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

// // ===== Routes =====
// app.use('/api/v1/auth', authRoutes);
// app.use('/api/v1/users', userRoutes);
// app.use('/api/v1/products', productRoutes);

// // ===== 404 =====
// app.use((req, res) => {
//   res.status(404).json({ message: 'API not found' });
// });

// ===== Error handler =====
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error'
  });
});

export default app;
