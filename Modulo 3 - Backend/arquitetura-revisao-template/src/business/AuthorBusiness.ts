import { AuthorDataBase } from "../database/AuthorsDatabase";
import { Author, AuthorDB } from "../models/Author";

export class AuthorBusiness {
  constructor(private authorDatabase: AuthorDataBase) {}

  public getAllAuthors = async (): Promise<Author[]> => {
    const newsData: AuthorDB[] = await this.authorDatabase.getAllAuthors();

    const news: Author[] = newsData.map(
      (authorDB) => new Author(authorDB.id, authorDB.name, authorDB.cpf)
    );

    return news;
  };
}
