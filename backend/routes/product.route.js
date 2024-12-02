import { Router } from "express";
const router = Router();

import productController from "../controller/product.controller.js";

router.post('/product', productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/product/:id', productController.getOneProduct);
router.put('/product/:id', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);

export default router;