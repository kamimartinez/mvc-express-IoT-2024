import { Course } from "../interfaces/course";
import {
  findAllCourse,
  insertCourses,
  updateCourses,
  deleteCourses,
} from "../models/course";

// Obtener todos los alumnos
export const findAll = async (limit: number, offset: number) => {
  return await findAllCourse(limit, offset);
};

export const insert = async (course: Course) => {
  return await insertCourses(course);
};

export const update = async (id: number, course: Course) => {
  return await updateCourses(id, course);
};

export const deleteById = async (id: number) => {
  return await deleteCourses(id);
};
