import express from 'express';
import {
    getAllOrder,
    changeOrderStatus,
    getRevenueByDay,
    getRevenueByMonth
} from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/order', getAllOrder);
router.put('/order/status', changeOrderStatus);
router.get('/statistic/revenue', getRevenueByDay);
router.get('/statistic/revenue', getRevenueByMonth);

export default router;