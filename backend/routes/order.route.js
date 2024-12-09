import { Router } from "express"
const router = Router();

import orderController from "../controller/order.controller.js"

router.post('/order', orderController.createOrder);
router.get('/order', orderController.getUserOrders);
router.put('/order/:id', orderController.updateOrder);
router.delete('/order/:id', orderController.deleteOrder);

export default router;