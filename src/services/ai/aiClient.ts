import Openai from 'openai';

export const client = new Openai({
    apiKey: process.env.OPENAI_API_KEY || ''
})

export const callLLM = async (prompt:string)=>{
    const response = await client.chat.completions.create({
        model:"gpt-4o-mini",
        messages:[{role:"user",content:prompt}],
        temperature:0
    })

    return response.choices[0].message?.content || ''
}