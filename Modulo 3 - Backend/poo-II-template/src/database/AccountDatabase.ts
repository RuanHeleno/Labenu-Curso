import { Account } from "../models/Account";
import { TAccountDB, TUserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
  async findAllAccounts(): Promise<TAccountDB[]> {
    const result: TAccountDB[] = await BaseDatabase.connection("accounts");
    return result;
  }

  async findAccountByID(id: string): Promise<TAccountDB | undefined> {
    const [result] = await BaseDatabase.connection("accounts").where({ id });
    return result;
  }

  async createAccount(account: Account): Promise<void> {
    await BaseDatabase.connection("accounts").insert({
      id: account.getId(),
      owner_id: account.getOwnerId(),
      balance: account.getBalance(),
      created_at: account.getCreatedAt(),
    });
  }

  async EditAccount(account: Account): Promise<void> {
    await BaseDatabase.connection("accounts")
      .update({
        balance: account.getBalance(),
      })
      .where({ id: account.getId() });
  }
}
