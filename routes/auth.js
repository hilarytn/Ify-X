import express from 'express';
import upload from '../middleware/fileUpload.js';
import {register, login,  profilePic} from '../controllers/AuthController.js'
const router = express.Router();

router.post('/user/register', register);
router.post('/profile-pic', upload.single('uploaded_file'), profilePic);
router.post('/user/login', login);

export default router;