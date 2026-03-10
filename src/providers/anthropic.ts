/**
 * Anthropic provider — wraps the @anthropic-ai/sdk.
 *
 * Env vars:
 *   ANTHROPIC_API_KEY   - API key (read automatically by the SDK)
 *   ANTHROPIC_BASE_URL  - endpoint override (read automatically by the SDK)
 *   ANTHROPIC_MODEL     - model name (default: claude-sonnet-4-6)
 */

import Anthropic from "@anthropic-ai/sdk";
import type { LlmProvider } from "./types.ts";

export class AnthropicProvider implements LlmProvider {
  readonly name = "anthropic";
  private readonly model: string;

  constructor(model?: string) {
    this.model = model ?? process.env["ANTHROPIC_MODEL"] ?? "claude-sonnet-4-6";
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    // Reads ANTHROPIC_API_KEY and ANTHROPIC_BASE_URL from env automatically
    const client = new Anthropic();
    const message = await client.messages.create({
      model: this.model,
      max_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    });
    const block = message.content[0];
    if (block?.type !== "text") throw new Error("Unexpected response type from Anthropic");
    return block.text;
  }
}
