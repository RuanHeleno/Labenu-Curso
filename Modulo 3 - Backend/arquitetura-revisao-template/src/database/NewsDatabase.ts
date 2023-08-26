import { BaseDatabase } from "./BaseDatabase";
import { News, NewsDB } from "../models/News";

export class NewsDatabase extends BaseDatabase {
  private static NEWS_TABLE = "news";

  public getAllNews = async (): Promise<NewsDB[]> => {
    const result: NewsDB[] = await BaseDatabase.connection(
      NewsDatabase.NEWS_TABLE
    );

    return result;
  };

  public createNews = async (input: NewsDB): Promise<void> => {
    await BaseDatabase.connection(NewsDatabase.NEWS_TABLE).insert(input);
  };

  public editNews = async (input: NewsDB): Promise<void> => {
    await BaseDatabase.connection(NewsDatabase.NEWS_TABLE)
      .update(input)
      .where({ id: input.id });
  };

  public deleteNews = async (input: NewsDB): Promise<void> => {
    await BaseDatabase.connection(NewsDatabase.NEWS_TABLE)
      .del()
      .where({ id: input.id });
  };
}
