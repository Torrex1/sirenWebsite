import { Router } from "express";
const router = Router();

import feedbackController from "../controller/feedback.contoller.js";

router.post('/feedback', feedbackController.createFeedback);
router.get('/userFeedback', feedbackController.getUsersFeedback);
router.put('/feedback/:id', feedbackController.updateFeedback);
router.delete('/feedback/:id', feedbackController.deleteFeedback);

export default router;