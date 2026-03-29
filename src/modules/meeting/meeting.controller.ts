import { Request, Response } from "express";
import * as meetingService from "./meeting.service";

export const createMeetingHandler = async (req: Request, res: Response) => {
  try {
    const meeting = await meetingService.createMeeting(req.body);
    res.status(201).json(meeting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create meeting" });
  }
};

export const getMeetingsHandler = async (_req: Request, res: Response) => {
  try {
    const meetings = await meetingService.getMeetings();
    res.status(200).json(meetings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch meetings" });
  }
};