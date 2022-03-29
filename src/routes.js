import { Router } from "express";

import sendingEmail from "./controller/sendingEmail.js";

const router = Router();

router("./sendingEmail", sendingEmail);

export { router };