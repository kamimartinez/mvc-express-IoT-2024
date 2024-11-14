// routes/usuarios.ts
import { Router } from "express";
import validate from "../middlewares/validate";
import { courseSchema } from "../schemas/course";
import {
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/course";

const router = Router();

// Regresa todos los alumnos en la base de datos
router.get("/", getCourse);

router.post("/", validate(courseSchema), createCourse);

router.put("/:id", validate(courseSchema), updateCourse);

router.delete("/:id", deleteCourse);

export default router;
