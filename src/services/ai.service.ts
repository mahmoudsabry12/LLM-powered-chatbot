import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// Function to summarize transcript and extract action items, decisions, risks
export const analyzeMeeting = async (transcript: string) => {
  const prompt = `
You are an AI assistant. Analyze the following meeting transcript and return JSON with:
- summary: brief summary of the meeting
- actionItems: list of tasks with "task", "owner", "priority" ("high", "medium", "low")
- decisions: list of decisions made
- risks: list of potential risks

Transcript:
"""
${transcript}
"""

Return JSON ONLY.
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0,
  });

  // Parse response text to JSON
  const content = response.choices[0].message?.content;
  try {
    return JSON.parse(content || "{}");
  } catch (error) {
    console.error("Failed to parse AI response:", content);
    return {};
  }
};