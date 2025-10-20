import express from 'express';
import { get } from 'mongoose';
import { protectRoute } from '../middleware/auth.middleware.js';
import { followUser, getCurrentUser, getUserProfile, syncUser, updateProfile } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/profile/:username",getUserProfile);

router.post("/sync",protectRoute,syncUser);
router.post("/me",protectRoute,getCurrentUser);
router.put("/profile",protectRoute,updateProfile);
router.post("/follow/:targetUserId",protectRoute,followUser);

export default router;