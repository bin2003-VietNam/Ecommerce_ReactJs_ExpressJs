import express from 'express';
import {
    createPayment,
    checkPaymentStatus
} from '../controllers/payment.controller.js';

const router = express.Router();

router.post('/create', createPayment);
router.get('/status', checkPaymentStatus);

export default router;