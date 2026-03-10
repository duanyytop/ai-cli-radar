/**
 * OpenAI provider — wraps the openai SDK.
 *
 * Env vars:
 *   OPENAI_API_KEY   - API key
 *   OPENAI_BASE_URL  - endpoint override (optional)
 *   OPENAI_MODEL     - model name (default: gpt-4o)
 */

import OpenAI from "openai";
import type { LlmProvider } from "./types.ts";

export class OpenAIProvider implements LlmProvider {
  readonly name = "openai";
  private readonly client: OpenAI;
  private readonly model: string;

  constructor(opts?: { apiKey?: string; baseURL?: string; model?: string }) {
    this.model = opts?.model ?? process.env["OPENAI_MODEL"] ?? "gpt-4o";
    this.client = new OpenAI({
      apiKey: opts?.apiKey ?? process.env["OPENAI_API_KEY"],
      baseURL: opts?.baseURL ?? process.env["OPENAI_BASE_URL"],
    });
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: this.model,
      max_completion_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    });
    const text = response.choices[0]?.message?.content;
    if (!text) throw new Error("Unexpected empty response from OpenAI");
    return text;
  }
}
