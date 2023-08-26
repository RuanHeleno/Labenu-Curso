import { AccountDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
  TABLE_NAME = "accounts";

  public async findAccounts() {
    const accountsDB = await super.findAll();

    return accountsDB;
  }

  public async findAccountById(id: string) {
    const [accountDB] = await super.findByID(id);

    return accountDB;
  }

  public async insertAccount(newAccountDB: AccountDB) {
    super.insert(newAccountDB);
  }

  public async updateBalanceById(id: string, newBalance: number) {
    await BaseDatabase.connection(this.TABLE_NAME)
      .update({ balance: newBalance })
      .where({ id });
  }
}
