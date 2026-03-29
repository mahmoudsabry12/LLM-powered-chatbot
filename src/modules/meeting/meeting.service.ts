import MeetingModel from "./meeting.model";
import { Meeting } from "./meeting.types";
import { analyzeMeeting } from "../../services/ai.service";

export const createMeeting = async (meeting: Meeting) => {
  // Call AI to analyze transcript
  const aiResult = await analyzeMeeting(meeting.transcript);

  const newMeeting = new MeetingModel({
    ...meeting,
    summary: aiResult.summary,
    actionItems: aiResult.actionItems,
    decisions: aiResult.decisions,
    risks: aiResult.risks,
  });
  return await newMeeting.save();
};

export const getMeetings = async () => {
  return await MeetingModel.find().sort({ createdAt: -1 });
};