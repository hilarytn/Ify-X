import express from 'express';
import upload from '../middleware/fileUpload.js';
import {register, profilePic} from '../controllers/AuthController.js'
const router = express.Router();

router.post('/user/register', register);
router.post('/profile-pic', upload.single('uploaded_file'), profilePic);

export default router;