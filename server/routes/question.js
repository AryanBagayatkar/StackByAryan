import express from "express"
import { Askquestion,getallquestion,votequestion,deletequestion } from "../controller/Question.js";

import auth from "../middlware/auth.js"

const router=express.Router();

router.post('/Ask',auth,Askquestion);
router.get('/get',getallquestion);
router.delete("/delete/:id",auth,deletequestion);
router.patch("/vote/:id",auth,votequestion)


export default router;