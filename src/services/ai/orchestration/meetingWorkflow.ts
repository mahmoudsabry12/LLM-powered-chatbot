import { summaryAgent } from "../agents/summaryAgent";
import { actionItemsAgent } from "../agents/actionItemsAgent";
import { risksDecisionsAgent } from "../agents/risksDecisionsAgent";

export const meetingWorkflow = async (transcript: string) => {
  
  const summaryResult = await summaryAgent(transcript);

  const actionItemsResult = await actionItemsAgent(transcript);

  const risksDecisionsResult = await risksDecisionsAgent(transcript);

  return {
    ...summaryResult,
    ...actionItemsResult,
    ...risksDecisionsResult,
  };
};