import z from "zod";

export interface CreateNewsInputDTO {
  title: string;
  description: string;
  author: string;
}

export interface CreateNewsOutputDTO {
  message: string;
  news: {
    title: string;
    description: string;
    author: string;
  };
}

export const CreateNewsSchema = z
  .object({
    title: z.string().min(2),
    description: z.string().min(5).max(100),
    author: z.string().min(2).startsWith('a'),
  })
  .transform((data) => data as CreateNewsInputDTO);
