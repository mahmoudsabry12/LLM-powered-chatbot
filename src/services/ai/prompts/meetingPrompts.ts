export const summaryPrompt = (text: string) => `
You are an AI assistant. Summarize the following meeting transcript briefly:

Transcript:
"""
${text}
"""

Return JSON with "summary".
`;

export const actionItemsPrompt = (text: string) => `
You are an AI assistant. Extract action items from this transcript. Each item should have:
- task
- owner
- priority ("high", "medium", "low")

Transcript:
"""
${text}
"""

Return JSON with "actionItems".
`;

export const risksDecisionsPrompt = (text: string) => `
You are an AI assistant. Extract:
- risks (potential risks)
- decisions (decisions made)

Transcript:
"""
${text}
"""

Return JSON ONLY with "risks" and "decisions".
`;