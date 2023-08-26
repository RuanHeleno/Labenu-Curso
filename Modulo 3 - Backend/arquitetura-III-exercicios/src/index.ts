import express from "express";
import cors from "cors";

import { coursesRouter } from "./routes/CourseRouter";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

app.use("/courses", coursesRouter);

// instalar lib: "express-async-errors"
// esse middleware tem que ficar no fim do arquivo 
/* app.use((err:any, req: Request, res: Response, _:any) => {
  res.status(err.statusCode || 500).send(err.message );
}); */