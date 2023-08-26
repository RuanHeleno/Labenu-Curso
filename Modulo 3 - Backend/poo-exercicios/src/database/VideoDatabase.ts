import { Video } from "../models/Video";
import { TVideoDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class VideoDatabase extends BaseDatabase {
  async findAllVideos(q: string): Promise<TVideoDB[]> {
    if (q) {
      const result: TVideoDB[] = await BaseDatabase.connection("videos").where(
        "titulo",
        "LIKE",
        `%${q}%`
      );
      return result;
    } else {
      const result: TVideoDB[] = await BaseDatabase.connection("videos");
      return result;
    }
  }

  async findVideoByID(id: string): Promise<TVideoDB | undefined> {
    const [result] = await BaseDatabase.connection("videos").where({ id });
    return result;
  }

  async createVideo(video: Video): Promise<void> {
    await BaseDatabase.connection("videos").insert({
      id: video.getId(),
      titulo: video.getTitulo(),
      duracao_em_segundos: video.getDuracaoEmSegundos(),
      data_de_upload: video.getDataDeUpload(),
    });
  }

  async EditVideo(video: Video): Promise<void> {
    await BaseDatabase.connection("videos")
      .update({
        titulo: video.getTitulo(),
        duracao_em_segundos: video.getDuracaoEmSegundos(),
      })
      .where({ id: video.getId() });
  }

  async DeleteVideo(video: Video): Promise<void> { 
    await BaseDatabase.connection("videos").del().where({ id: video.getId()});
  }
}
