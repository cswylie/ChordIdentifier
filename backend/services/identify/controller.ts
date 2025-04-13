import { Request, Response } from 'express';

import { validateChordRequest } from './service';

export const identifyController = async (req: Request, res: Response) => {
  try {
    const input = req.body;
    
    // Validate the input using a Zod-powered service
    // Service does the Zod validation
    const result = await validateChordRequest(input);

    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({
      error: error.message || 'Something went wrong',
    });
  }
};