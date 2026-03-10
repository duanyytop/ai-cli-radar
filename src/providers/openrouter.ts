/**
 * OpenRouter provider — OpenAI-compatible endpoint via openrouter.ai.
 *
 * Env vars:
 *   OPENROUTER_API_KEY  - API key
 *   OPENROUTER_MODEL    - model name (default: anthropic/claude-sonnet-4)
 */

import OpenAI from "openai";
import type { LlmProvider } from "./types.ts";

const OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

export class OpenRouterProvider implements LlmProvider {
  readonly name = "openrouter";
  private readonly client: OpenAI;
  private readonly model: string;

  constructor(opts?: { apiKey?: string; model?: string }) {
    this.model = opts?.model ?? process.env["OPENROUTER_MODEL"] ?? "anthropic/claude-sonnet-4";
    this.client = new OpenAI({
      apiKey: opts?.apiKey ?? process.env["OPENROUTER_API_KEY"],
      baseURL: OPENROUTER_BASE_URL,
    });
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: this.model,
      max_completion_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    });
    const text = response.choices[0]?.message?.content;
    if (!text) throw new Error("Unexpected empty response from OpenRouter");
    return text;
  }
}
