import express from 'express';
import { 
    submitOrder, 
    getAllOrder, 
    getOrderById 
} from '../controllers/order.controller.js';

const router = express.Router();

router.post('/', submitOrder);
router.get('/', getAllOrder);
router.get('/:orderId', getOrderById);

export default router;