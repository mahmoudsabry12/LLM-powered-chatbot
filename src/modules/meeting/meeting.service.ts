import MeetingModel from "./meeting.model";
import { Meeting } from "./meeting.types";
import { meetingWorkflow } from "../../services/ai/orchestration/meetingWorkflow";

export const createMeeting = async (meeting: Meeting) => {
  // Call AI to analyze transcript
  const aiResult = await meetingWorkflow(meeting.transcript);

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