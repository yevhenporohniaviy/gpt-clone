export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig()

  let prompt = 'The following is a conversation with an AI assistant.  The assistant is helpful, creative, clever, and very friendly. The assistant always goes into details. The assistant provides very detailed explanations for his answers. It is very verbose. The assistant always surrounds code with markdown. The assistant always provides code examples when it can. \n\n';
  let messages = [
    {
      actor: 'Human',
      message: "Hello, how are you?"
    },
    {
      actor: 'AI',
      message: "I'am fine. How i can help you?"
    },
  ]

  

  const prevMessages = await readBody(event);
  messages = messages.concat(prevMessages);

  prompt += messages.map((message) => `${message.actor}: ${message.message}`).join("/n") + "\nAI:";


  const req = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.OPENAI_API_KEY}`
    },
    body: JSON.stringify(
      {
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.9,
        max_tokens: 512,
        top_p: 1.0,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [
          "Human:", "AI:"
        ]
      }
    )
  })
  
  const res = await req.json()
  console.log(res, 'req')
  const result = res.choices[0]
  return {
    message: result.text,
    finish_reason: result.finish_reason
  }
})
