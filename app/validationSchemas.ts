import { z } from "zod";

export const createIssueSchema = z.object({
  //within min is the server side error message
  title: z.string().min(1, 'Title is required.').max(255),
  description: z.string().min(1, 'Description is required.'),
});
