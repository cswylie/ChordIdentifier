import { z } from 'zod';

// Zod schema to validate the input
// The schema parses the object passed to the funciton
// It only takes arrays full of strings with a minimum of 1 and a maximum of 2
// The strings must be valid notes (A-G) with optional sharps (#) or flats (b)
const chordRequestSchema = z.object({
  notes: z.array(
    z.string().regex(/^[A-G](#|b)?$/, { // Error message if no match
      message: "Each note must be a valid note (e.g., C, D#, Bb)"
    })
  ).min(1).max(2),
});

export const validateChordRequest = async (notes: string[]) => {
  try {
    // Validate input data using Zod schema
    chordRequestSchema.parse({ notes });
    // Your business logic to find matching chords
    return identifyChords(notes);  // call another function to identify chords
  } catch (error) {
    throw new Error('Invalid input');
  }
};

// A mock function to identify chords, you can replace this with your real logic
// Use Tonal Stuff here
const identifyChords = (notes: string[]) => {
  return ['C Major', 'A Minor']; // Just a placeholder
};