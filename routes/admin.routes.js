import {Router} from "express";
const router = Router();
import { AdminLogin, getCurrentAdmin,  RegisterAdmin } from "../Controllers/admin.controllers.js";

router.post("/login-admin", AdminLogin);
router.post("/register-admin", RegisterAdmin);
router.get('/get-current-admin', getCurrentAdmin)


export default router;