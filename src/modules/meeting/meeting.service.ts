// src/modules/meeting/meeting.service.ts
import MeetingModel from "./meeting.model";
import { Meeting } from "./meeting.types";

export const createMeeting = async (meeting: Meeting) => {
  const newMeeting = new MeetingModel(meeting);
  return await newMeeting.save();
};

export const getMeetings = async () => {
  return await MeetingModel.find().sort({ createdAt: -1 });
};