import z from "zod";

export interface UpdateNewsInputDTO {
  id: string;
  title: string;
  description: string;
}

export interface UpdateNewsOutputDTO {
  message: string;
  news: {
    id: string;
    title: string;
    description: string;
  };
}

export const UpdateNewsSchema = z
  .object({
    id: z.string().min(2).startsWith('n'),
    title: z.string().min(2).optional(),
    description: z.string().min(5).max(100).optional(),
  })
  .transform((data) => data as UpdateNewsInputDTO);
