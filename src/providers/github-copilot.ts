/**
 * GitHub Copilot provider — OpenAI-compatible endpoint via GitHub Models.
 *
 * Env vars:
 *   GITHUB_TOKEN           - GitHub personal access token
 *   GITHUB_COPILOT_MODEL   - model name (default: gpt-4o)
 */

import OpenAI from "openai";
import type { LlmProvider } from "./types.ts";

const GITHUB_COPILOT_BASE_URL = "https://models.github.ai/inference";

export class GitHubCopilotProvider implements LlmProvider {
  readonly name = "github-copilot";
  private readonly client: OpenAI;
  private readonly model: string;

  constructor(opts?: { apiKey?: string; model?: string }) {
    this.model = opts?.model ?? process.env["GITHUB_COPILOT_MODEL"] ?? "gpt-4o";
    this.client = new OpenAI({
      apiKey: opts?.apiKey ?? process.env["GITHUB_TOKEN"],
      baseURL: GITHUB_COPILOT_BASE_URL,
    });
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    const response = await this.client.chat.completions.create({
      model: this.model,
      max_completion_tokens: maxTokens,
      messages: [{ role: "user", content: prompt }],
    });
    const text = response.choices[0]?.message?.content;
    if (!text) throw new Error("Unexpected empty response from GitHub Copilot");
    return text;
  }
}
