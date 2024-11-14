import pool from "../db";
import { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { Course } from "../interfaces/course";
import { PaginatedCourse } from "../interfaces/course";

// Obtener todos los alumnos
export const findAllCourse = async (
  limit: number,
  offset: number,
): Promise<PaginatedCourse> => {
  const [rows] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM courses LIMIT ? OFFSET ?",
    [limit, offset],
  );

  const [totalRows] = (await pool.query(
    "SELECT COUNT(*) as count FROM courses",
  )) as [{ count: number }[], unknown];
  const total = totalRows[0].count;

  // Calcular el total de páginas
  const totalPages = Math.ceil(total / limit);

  return {
    page: offset / limit + 1,
    limit,
    total,
    totalPages,
    data: rows as Course[],
  };
};

export const insertCourses = async (course: Course): Promise<Course> => {
  const { course_name, credits, description, teacher_id } = course;
  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO courses (course_name, credits, description, teacher_id)
     VALUES (?, ?, ?, ?)`,
    [course_name, credits, description, teacher_id],
  );
  const { insertId } = result;
  return { id: insertId, ...course };
};

export const updateCourses = async (
  id: number,
  course: Course,
): Promise<Course> => {
  const { course_name, credits, description, teacher_id } = course;
  await pool.query<ResultSetHeader>(
    `UPDATE courses
     SET course_name = ?,
         credits = ?,
         description = ?,
         teacher_id = ?
     WHERE id = ?;`,
    [course_name, credits, description, teacher_id, id],
  );

  return { id, ...course };
};

export const deleteCourses = async (id: number): Promise<number> => {
  await pool.query<ResultSetHeader>("DELETE FROM courses WHERE id = ?", [id]);
  return id;
};
