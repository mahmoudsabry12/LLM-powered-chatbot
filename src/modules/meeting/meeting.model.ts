import mongoose, { Schema, Document } from "mongoose";
import { Meeting } from "./meeting.types";

interface MeetingDoc extends Meeting, Document {}

const ActionItemSchema = new Schema(
  {
    task: { type: String, required: true },
    owner: { type: String, required: true },
    priority: { type: String, enum: ["high", "medium", "low"], default: "medium" },
  },
  { _id: false }
);

const MeetingSchema = new Schema<MeetingDoc>(
  {
    transcript: { type: String, required: true },
    summary: { type: String },
    actionItems: [ActionItemSchema],
    decisions: [String],
    risks: [String],
  },
  { timestamps: true }
);

const MeetingModel = mongoose.model<MeetingDoc>("Meeting", MeetingSchema);

export default MeetingModel;