type Msg = { role: 'system' | 'user' | 'assistant'; content: string };

export const llm = {
  async chat(messages: Msg[]): Promise<string> {
    const lastUser = [...messages].reverse().find(m => m.role === 'user')?.content ?? '';
    return `Got it. You said: "${lastUser}". What matters most to you—fit, price, or story?`;
  },

  async judge(_input: { rubric: string; transcript: string; persona: string }) {
    return {
      storytelling: 7,
      emotional: 6,
      persuasion: 7,
      productKnow: 6,
      total: 26,
      strengths: "Clear exclusivity framing and at least one discovery question.",
      tips: "Personalize sooner; add one concrete lifestyle benefit."
    };
  },

  async generateScript(args: { product: any; persona?: any; tone: string; steps: number }) {
    const personaName = args.persona?.name ?? "General Shopper";
    return {
      persona: personaName,
      script: [
        `Open with ${args.product.brand ?? 'the brand'} heritage and what makes this drop special.`,
        `Feature: ${args.product.attributes?.material ?? 'premium materials'}; explain why it feels different.`,
        `Emotional hook: connect to ${args.tone} style and everyday wear.`,
        `Close: suggest a try-on or limited-availability hold today.`
      ]
    };
  }
};
