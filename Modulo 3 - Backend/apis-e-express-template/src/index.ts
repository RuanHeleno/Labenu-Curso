import express, { Request, Response } from "express";
import cors from "cors";

import { courses, students } from "./database";
import { COURSE_STACK, TCourse, TStudent } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

//teste api
app.get("/", (req: Request, res: Response) => {
  res.send("Rodando!");
});

//Teste Ping
app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

//All Courses
app.get("/courses", (req: Request, res: Response) => {
  res.status(200).send(courses);
});

//Courses Search by name
app.get("/courses/search", (req: Request, res: Response) => {
  const { name } = req.query;

  res
    .status(200)
    .send(
      courses.filter((course) =>
        course.name.toLowerCase().includes(name.toString().toLowerCase())
      )
    );
});

//Create new Course
app.post("/courses", (req: Request, res: Response) => {
  const {
    id,
    name,
    lessons,
    stack,
  }: { id: string; name: string; lessons: number; stack: COURSE_STACK } =
    req.body;
  const newCourse: TCourse = {
    id,
    name,
    lessons,
    stack,
  };

  if (stack !== COURSE_STACK.FRONT && stack !== COURSE_STACK.BACK) {
    res.status(403).send("Stack Inválida");
  }

  courses.push(newCourse);

  res.status(201).send("Curso registrado com sucesso!");
  console.log(courses);
});

//All Students
app.get("/students", (req: Request, res: Response) => {
  res.status(200).send(students);
});

//Students Search by name
app.get("/students/search", (req: Request, res: Response) => {
  const { name } = req.query;

  res
    .status(200)
    .send(
      students.filter((student) =>
        student.name.toLowerCase().includes(name.toString().toLowerCase())
      )
    );
});


//Create new Student
app.post("/students", (req: Request, res: Response) => {
    const {
      id,
      name,
      age
    }: { id: string; name: string; age: number } =
      req.body;
    const newStudent: TStudent = {
      id,
      name,
      age
    };
  
    students.push(newStudent);
  
    res.status(201).send("Aluno registrado com sucesso!");
    console.log(students);
  });