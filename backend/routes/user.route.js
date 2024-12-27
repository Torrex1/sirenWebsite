import { Router } from "express";
const router = Router();

import UserController from "../controller/user.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.post('/registration', UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.post('/refresh', UserController.refresh)
router.get('/users', authMiddleware ,UserController.getUsers);
router.get('/user/:id', UserController.getOneUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

export default router;