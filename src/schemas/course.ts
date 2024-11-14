import { z } from "zod";

export const courseSchema = z.object({
  course_name: z.string().min(2, {
    message: "El nombre del curso debe tener al menos 2 caracteres",
  }),
  credits: z
    .number()
    .int()
    .min(1)
    .max(4)
    .refine((credits) => [2, 3, 4].includes(credits), {
      message: "Los créditos deben ser 2, 3 o 4",
    }),
  description: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" }),
  teacher_id: z
    .number()
    .int()
    .positive()
    .min(1, { message: "El ID del profesor debe ser un número positivo" }),
});
