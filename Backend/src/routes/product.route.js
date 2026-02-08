import express from 'express';
import {
    getProduct,
    getProductById,
    getProductByCategory,
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProduct);
router.get('/by-id', getProductById);
router.get('/by-category', getProductByCategory);



export default router;

