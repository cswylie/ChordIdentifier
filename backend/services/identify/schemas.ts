import { z } from 'zod';

// Zod schema to validate the input
// The schema parses the object passed to the funciton
// It only takes arrays full of strings with a minimum of 1 and a maximum of 2
// The strings must be valid notes (A-G) with optional sharps (#) or flats (b)
// Input: an array of valid note strings (e.g., C, D#, Bb), minimum 1, max 2 notes
export const chordRequestSchema = z.array(
  z.string().regex(/^[A-G](#|b)?$/, {
    message: "Each note must be a valid note (e.g., C, D#, Bb)"
  }).min(1).max(2)
);

// Output: an array of chord name strings
export const chordResponseSchema = z.array(z.string());
// export const chordResponseSchema = z.array(
//   z.string().regex(/^[A-G](#|b)?(m|M|maj|min|dim|aug|sus)?[0-9#b]*?(\/[A-G](#|b)?)?$/, {
//     message: "Each chord must be a valid chord name (e.g., C, Dm, C#maj7, Am#5/F)"
//   })
// );