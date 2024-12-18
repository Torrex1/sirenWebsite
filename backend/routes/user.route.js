import { Router } from "express";
const router = Router();

import UserController from "../controller/user.controller.js";

router.post('/user', UserController.createUser);
router.get('/users', UserController.getUsers);
router.get('/user/:id', UserController.getOneUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id', UserController.deleteUser);

export default router;