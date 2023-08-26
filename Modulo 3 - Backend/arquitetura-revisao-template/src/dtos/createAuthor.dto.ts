import z from "zod";

export interface CreateAuthorInputDTO {
  id: string;
  name: string;
  cpf: string;
}

export interface CreateAuthorOutputDTO {
  message: string;
  cpf: {
    id: string;
    name: string;
    author: string;
  };
}

export const CreateNewsSchema = z
  .object({
    id: z.string().min(2),
    name: z.string().min(5).max(100),
    cpf: z.string().min(2),
  })
  .transform((data) => data as CreateAuthorInputDTO);
