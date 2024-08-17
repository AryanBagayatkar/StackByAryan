import express from "express"
import { deleteanswer,postanswer } from "../controller/Answer.js";
import auth from "../middlware/auth.js"
const router=express.Router();
router.patch("/post/:id",auth,postanswer);
router.patch("/delete/:id",auth,deleteanswer);

export default router;