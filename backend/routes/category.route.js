import { Router } from 'express';
const router = Router();

import categoryController from '../controller/category.controller.js';

router.post('/category', categoryController.createCategory);
router.delete('/category/:id', categoryController.deleteCategory);

export default router;