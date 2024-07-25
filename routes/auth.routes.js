import {Router} from "express";
import {getCurrentUser, Login, Logout, Register} from "../Controllers/auth.controllers.js"
const router = Router();

router.post('/register',Register);
router.post('/login',Login);
router.get('/get-current-user', getCurrentUser)
router.post("/logout", Logout);

export default router;
