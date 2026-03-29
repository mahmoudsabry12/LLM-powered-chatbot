// src/modules/meeting/meeting.route.ts
import { Router } from "express";
import { createMeetingHandler, getMeetingsHandler } from "./meeting.controller";

const router = Router();

router.post("/", createMeetingHandler);
router.get("/", getMeetingsHandler);

export default router;