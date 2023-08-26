import { UserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  TABLE_NAME = "users";

  public async findUsers(q: string | undefined) {
    let usersDB;

    if (q) {
      const result: UserDB[] = await BaseDatabase.connection(
        this.TABLE_NAME
      ).where("name", "LIKE", `%${q}%`);

      usersDB = result;
    } else {
      const result = await super.findAll();

      usersDB = result;
    }

    return usersDB;
  }

  public async findUserById(id: string) {
    const [userDB] = await super.findByID(id);

    return userDB;
  }

  public async insertUser(newUserDB: UserDB) {
    super.insert(newUserDB);
  }
}
