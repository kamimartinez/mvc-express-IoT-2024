// routes/usuarios.ts
import { Router } from "express";
import validate from "../middlewares/validate";
import { professorSchema } from "../schemas/professor";
import {
  getProfessors,
  createProfessors,
  updateProfessors,
  deleteProfessor,
} from "../controllers/professors";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getProfessors);

router.post("/", validate(professorSchema), createProfessors);

router.put("/:id", validate(professorSchema), updateProfessors);

router.delete("/:id", deleteProfessor);

export default router;
