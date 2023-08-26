import { BaseDatabase } from "./BaseDatabase";
import { AuthorDB } from "../models/Author";

export class AuthorDataBase extends BaseDatabase {
  private static NEWS_TABLE = "authors";

  public getAllAuthors = async (): Promise<AuthorDB[]> => {
    const result: AuthorDB[] = await BaseDatabase.connection(AuthorDataBase.NEWS_TABLE);

    return result;
  };
}
