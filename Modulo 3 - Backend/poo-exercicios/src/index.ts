import express, { Request, Response } from "express";
import cors from "cors";

import { TVideoDB } from "./types";
import { Video } from "./models/Video";
import { VideoDatabase } from "./database/VideoDatabase";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

app.get("/ping", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ message: "Pong!" });
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.get("/videos", async (req: Request, res: Response) => {
  try {
    const q = req.query.q as string;

    const videoDB = new VideoDatabase();

    const videos: TVideoDB[] = await videoDB.findAllVideos(q);

    const result: Video[] = videos.map(
      (video) =>
        new Video(
          video.id,
          video.titulo,
          video.duracao_em_segundos,
          video.data_de_upload
        )
    );

    res.status(200).send(result);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.get("/videos/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const videoDB = new VideoDatabase();
    const video: TVideoDB | undefined = await videoDB.findVideoByID(id);

    if (!video) {
      throw new Error("Video não encontrado");
    }

    const result: Video = new Video(
      video.id,
      video.titulo,
      video.duracao_em_segundos,
      video.data_de_upload
    );

    res.status(200).send(result);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.post("/videos", async (req: Request, res: Response) => {
  try {
    const { id, titulo, duracaoEmSegundos, dataDeUpload } = req.body;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser string");
    }

    if (typeof titulo !== "string") {
      res.status(400);
      throw new Error("'name' deve ser string");
    }

    if (typeof duracaoEmSegundos !== "number") {
      res.status(400);
      throw new Error("'duracaoEmSegundos' deve ser number");
    }

    if (typeof dataDeUpload !== "string") {
      res.status(400);
      throw new Error("'password' deve ser string");
    }

    const videoDB = new VideoDatabase();
    const videoDBExists: TVideoDB | undefined = await videoDB.findVideoByID(id);

    if (videoDBExists) {
      res.status(400);
      throw new Error("'id' já existe");
    }

    const newVideo = new Video(id, titulo, duracaoEmSegundos, dataDeUpload);

    await videoDB.createVideo(newVideo);

    res.status(201).send(newVideo);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.put("/videos/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const titulo = req.body.titulo;
    const duracaoEmSegundos = req.body.duracaoEmSegundos;

    const videoDB = new VideoDatabase();
    const videoDBExists: TVideoDB | undefined = await videoDB.findVideoByID(id);

    if (!videoDBExists) {
      res.status(404);
      throw new Error("'id' não encontrado");
    }

    if (titulo) {
      if (typeof titulo !== "string") {
        res.status(400);
        throw new Error("'titulo' deve ser string");
      }
    }

    if (duracaoEmSegundos) {
      if (typeof duracaoEmSegundos !== "number") {
        res.status(400);
        throw new Error("'duracaoEmSegundos' deve ser number");
      }
    }

    const video = new Video(
      videoDBExists.id,
      titulo || videoDBExists.titulo,
      duracaoEmSegundos || videoDBExists.duracao_em_segundos,
      videoDBExists.data_de_upload
    );

    if (titulo) video.setTitulo(titulo);
    if (duracaoEmSegundos) video.setDuracaoEmSegundos(duracaoEmSegundos);

    await videoDB.EditVideo(video);

    res.status(201).send(video);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.delete("/videos/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const videoDB = new VideoDatabase();
    const videoDBExists: TVideoDB | undefined = await videoDB.findVideoByID(id);

    if (!videoDBExists) {
      res.status(404);
      throw new Error("'id' não encontrado");
    }

    const video = new Video(
      videoDBExists.id,
      videoDBExists.titulo,
      videoDBExists.duracao_em_segundos,
      videoDBExists.data_de_upload
    );

    await videoDB.DeleteVideo(video);

    res.status(200).send("Vídeo deletado com sucesso!");
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});