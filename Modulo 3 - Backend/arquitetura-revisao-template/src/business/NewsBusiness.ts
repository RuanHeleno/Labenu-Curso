import { AuthorDataBase } from "../database/AuthorsDatabase";
import { NewsDatabase } from "../database/NewsDatabase";
import { CreateNewsInputDTO } from "../dtos/createNews.dto";
import { DeleteNewsInputDTO } from "../dtos/deleteNews.dto";
import { UpdateNewsInputDTO } from "../dtos/updateNews.dto";
import { AuthorDB } from "../models/Author";
import { News, NewsDB } from "../models/News";

export class NewsBusiness {
  constructor(private newsDatabase: NewsDatabase) {}

  public getAllNews = async (): Promise<News[]> => {
    const newsData: NewsDB[] = await this.newsDatabase.getAllNews();

    const news: News[] = newsData.map(
      (newDB) =>
        new News(
          newDB.id,
          newDB.title,
          newDB.description,
          newDB.published_at,
          newDB.author
        )
    );

    return news;
  };

  public createNews = async (input: CreateNewsInputDTO): Promise<void> => {
    const { title, description, author } = input;

    const authorDatabase = new AuthorDataBase();
    const authors: AuthorDB[] = await authorDatabase.getAllAuthors();

    const authorExist: AuthorDB | undefined = authors.find(
      (element) => element.id === author
    );

    if (!authorExist) {
      throw new Error("ID do autor inválido!");
    }

    const id: string = "n" + Math.floor(Math.random() * 256).toString();

    const today = new Date().toISOString();

    const news = new News(id, title, description, today, author);

    await this.newsDatabase.createNews(news.toDBModel());
  };

  public editNews = async (input: UpdateNewsInputDTO): Promise<void> => {
    const { id, title, description } = input;

    const news: NewsDB[] = await this.newsDatabase.getAllNews();
    const newsIDExist = news.find((element) => element.id === id);

    if (!newsIDExist) {
      throw new Error("ID da notícia inválido!");
    }

    const today = new Date().toISOString();

    const newsUpdate = new News(
      id,
      title || newsIDExist.title,
      description || newsIDExist.description,
      today,
      newsIDExist.author
    );

    await this.newsDatabase.editNews(newsUpdate.toDBModel());
  };

  public deleteNews = async (input: DeleteNewsInputDTO): Promise<void> => {
    const { id } = input;

    const news: NewsDB[] = await this.newsDatabase.getAllNews();
    const newsIDExist = news.find((element) => element.id === id);

    if (!newsIDExist) {
      throw new Error("ID da notícia inválido!");
    }

    await this.newsDatabase.deleteNews(newsIDExist);
  };
}
