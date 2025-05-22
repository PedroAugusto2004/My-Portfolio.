'use server';
/**
 * @fileOverview An AI agent for optimizing resume text for different target audiences.
 *
 * - optimizeResume - A function that optimizes resume text.
 * - OptimizeResumeInput - The input type for the optimizeResume function.
 * - OptimizeResumeOutput - The return type for the optimizeResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeResumeInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The complete text of the resume to be optimized.'),
  targetAudience: z
    .string()
    .describe(
      'The target audience for the resume (e.g., software engineers, recruiters, specific companies).'
    ),
  portfolioText: z.string().describe('The text content of the portfolio.'),
});
export type OptimizeResumeInput = z.infer<typeof OptimizeResumeInputSchema>;

const OptimizeResumeOutputSchema = z.object({
  optimizedTextSuggestions: z
    .array(z.string())
    .describe(
      'A list of suggestions for rephrasing sections of the resume or portfolio to be more effective for the target audience.'
    ),
});
export type OptimizeResumeOutput = z.infer<typeof OptimizeResumeOutputSchema>;

export async function optimizeResume(input: OptimizeResumeInput): Promise<OptimizeResumeOutput> {
  return optimizeResumeFlow(input);
}

const optimizeResumePrompt = ai.definePrompt({
  name: 'optimizeResumePrompt',
  input: {schema: OptimizeResumeInputSchema},
  output: {schema: OptimizeResumeOutputSchema},
  prompt: `You are an expert resume and portfolio optimizer.

  Given the following resume and portfolio text, suggest ways to reword the text to be more effective for the specified target audience. Provide at least three distinct suggestions. Take into consideration that the portfolio will present the resume information.

  Target Audience: {{{targetAudience}}}

  Resume Text: {{{resumeText}}}

  Portfolio Text: {{{portfolioText}}}

  Provide a list of optimized text suggestions:
  `,
});

const optimizeResumeFlow = ai.defineFlow(
  {
    name: 'optimizeResumeFlow',
    inputSchema: OptimizeResumeInputSchema,
    outputSchema: OptimizeResumeOutputSchema,
  },
  async input => {
    const {output} = await optimizeResumePrompt(input);
    return output!;
  }
);
