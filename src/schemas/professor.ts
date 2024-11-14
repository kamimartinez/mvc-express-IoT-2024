import { z } from "zod";

export const professorSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  last_name: z
    .string()
    .min(2, { message: "El apellido debe tener al menos 2 caracteres" }),
  department: z
    .string()
    .min(2, { message: "El departamento debe tener al menos 2 caracteres" })
    .refine(
      (dept) =>
        [
          "Mathematics",
          "Science",
          "History",
          "English",
          "Physical Education",
        ].includes(dept),
      {
        message:
          "El departamento debe ser uno de los siguientes: Mathematics, Science, History, English, Physical Education",
      },
    ),
  email: z.string().email({ message: "Debe ser un email válido" }),
  phone: z
    .string()
    .regex(/^\d{3}-\d{4}$/, {
      message: "El formato del teléfono debe ser '555-1234'",
    })
    .optional(),
});
