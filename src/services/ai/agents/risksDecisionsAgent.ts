import { callLLM } from "../aiClient"
import { risksDecisionsPrompt } from "../prompts/meetingPrompts"

export const risksDecisionsAgent = async(transcript: string)=>{
    const response = await callLLM(risksDecisionsPrompt(transcript))
    try {
        const json = JSON.parse(response)
        return json || "No summary found"
    } catch (e) {
        console.error("Error parsing summary response:", e)
        return { risks: [], decisions: [] };
    }
}