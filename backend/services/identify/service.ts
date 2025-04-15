import { chordRequestSchema } from "./schemas";

import { Chord, Interval, Note, Scale } from "tonal";

export const validateChordRequest = async (notes: string[]) => {
  try {
    // Validate input data using Zod schema
    chordRequestSchema.parse(notes);
    // Your business logic to find matching chords
    return identifyChords(notes);  // call another function to identify chords
  } catch (error) {
    throw new Error('Invalid input');
  }
};

// Use Tonal Detect feature
const identifyChords = (notes: string[]) => {
    if (notes.length === 2) {
    const [note1, note2] = notes;
    const interval = Interval.distance(note1, note2);
    return [interval];
  } else if (notes.length >= 3) {
    const chords = Chord.detect(notes);
    return chords;
  }
  return { message: "Please enter at least two notes" };
};