import { Professor } from "../interfaces/professor";
import {
  deleteProfessor,
  findAllProfessor,
  insertProfessor,
  updateProfessor,
} from "../models/professor";

// Obtener todos los alumnos
export const findAll = async (limit: number, offset: number) => {
  return await findAllProfessor(limit, offset);
};

export const insert = async (professor: Professor) => {
  return await insertProfessor(professor);
};

export const update = async (id: number, professor: Professor) => {
  return await updateProfessor(id, professor);
};

export const deleteById = async (id: number) => {
  return await deleteProfessor(id);
};
