import { Request, Response } from "express";

import { deleteById, findAll, insert, update } from "../services/professor";
import { Professor } from "../interfaces/professor";

// Obtener todos los alumnos
export const getProfessors = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    const offset = (page - 1) * limit;
    const professor = await findAll(limit, offset);
    res.status(200).json(professor);
  } catch (error) {
    res.status(400).json({ message: "Error al obtener alumnos", error });
  }
};

export const createProfessors = async (req: Request, res: Response) => {
  try {
    const professor: Professor = req.body;
    const newProfessor = await insert(professor);

    const io = req.app.get("io");
    io.emit("newProfessor", newProfessor);
    res.status(201).json({ message: "Profesor creado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al crear profesor", error });
  }
};

export const updateProfessors = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    const professor: Professor = req.body;
    await update(id, professor);
    res.status(201).json({ message: "Profesor actualizado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar el profesor", error });
  }
};

export const deleteProfessor = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id);
    await deleteById(id);
    res.status(201).json({ message: "Profesor eliminado exitosamente" });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar el profesor", error });
  }
};
