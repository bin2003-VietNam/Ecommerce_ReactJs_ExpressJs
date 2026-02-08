import express from 'express';
import { upload } from '../middlewares/upload.js';
import {
    getAllOrder,
    changeOrderStatus,
    createProduct, createCategory,
    updateProduct, updateCategory,
    deleteProduct, deleteCategory,
    getRevenueByDay, getRevenueByMonth
} from '../controllers/admin.controller.js';

const router = express.Router();

// order
router.get('/order', getAllOrder);
router.put('/order/status', changeOrderStatus);
// product
router.post('/product', upload.fields([
    { name: 'main_image', maxCount: 1 },
    { name: 'sub_images', maxCount: 4 }
]),createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);
// category
router.post('/category', createCategory);
router.put('/category/:id', updateCategory);
router.delete('/category', deleteCategory);
// statistic
router.get('/statistic/revenue', getRevenueByDay);
router.get('/statistic/revenue', getRevenueByMonth);

export default router;