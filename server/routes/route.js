import express from  'express';
import { addProduct, editProduct, getProducts} from '../controller/product-controller.js';
import { editOrder, getOrders } from '../controller/order-controller.js';
import { getDelivery } from '../controller/delivery-controller.js';
import { getUser } from '../controller/user-controller.js';
import {editSeller, sellerLogIn, sellerSignUp } from '../controller/seller-controller.js';

const router = express.Router();
router.post('/signup',sellerSignUp);
router.post('/login',sellerLogIn);
router.get('/products',getProducts);
router.get('/orders',getOrders);
router.get('/clist',getUser );
router.get('/dlist',getDelivery );
router.post('/product',addProduct);
router.put('/product/:id',editProduct);
router.put('/account/:id',editSeller);
router.put('/orders/:id/:index',editOrder);
export default router;