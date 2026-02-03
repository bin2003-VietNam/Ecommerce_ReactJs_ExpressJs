import express from 'express';
import {
    getProduct,
    getProductById,
    getProductByCategory,

    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProduct);
router.get('/by-id', getProductById);
router.get('/by-category', getProductByCategory);

router.post('/admin', createProduct);
router.put('/admin/:id', updateProduct);
router.delete('/admin/:id', deleteProduct);

export default router;

