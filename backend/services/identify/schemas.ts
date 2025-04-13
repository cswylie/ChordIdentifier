import { z } from 'zod';

// Zod schema to validate the input
// The schema parses the object passed to the funciton
// It only takes arrays full of strings with a minimum of 1 and a maximum of 2
// The strings must be valid notes (A-G) with optional sharps (#) or flats (b)
export const chordRequestSchema = z.object({
  notes: z.array(
    z.string().regex(/^[A-G](#|b)?$/, { // Error message if no match
      message: "Each note must be a valid note (e.g., C, D#, Bb)"
    })
  ).min(1).max(2),
});

export const chordResponseSchema = z.object({
  chords: z.array(z.string())
});