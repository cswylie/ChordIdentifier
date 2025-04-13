import { chordRequestSchema } from "./schemas";

import { Chord, Interval, Note, Scale } from "tonal";

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

// Use Tonal Detect feature
const identifyChords = (notes: string[]) => {
  let chord = Chord.detect(notes);
  return [chord]; // Just a placeholder
};