import { Router } from 'express';
const router = Router();

import userAddressController from '../controller/userAddress.controller.js';

router.post('/address', userAddressController.addAddressBook);
router.get('/address', userAddressController.getAddress);
router.put('/address/:id', userAddressController.updateAddress);
router.delete('/address/:id', userAddressController.deleteAddress);

export default router;
