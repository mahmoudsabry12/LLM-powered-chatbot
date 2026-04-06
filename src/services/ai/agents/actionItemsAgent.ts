import { callLLM } from "../aiClient"
import { summaryPrompt } from "../prompts/meetingPrompts"

export const actionItemsAgent  = async (transcript :string)=>{
    const response = await callLLM(summaryPrompt(transcript))
    try {
        const json = JSON.parse(response)
        return json || "No summary found"
    } catch (e) {
        console.error("Error parsing summary response:", e)
        return { actionItems: [] };
    }
}