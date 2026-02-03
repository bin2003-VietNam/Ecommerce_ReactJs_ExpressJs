import express from 'express';
import { 
    getCart, 
    addItemToCart, 
    changeItemToCart,
    deleteItemInCart
 } from '../controllers/cart.controller.js';

const router = express.Router();

router.get('/', getCart);
router.post('/', addItemToCart);
router.put('/change/:itemId', changeItemToCart);
router.delete('/delete/:itemId', deleteItemInCart);

export default router;