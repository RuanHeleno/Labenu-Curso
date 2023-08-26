import { AccountDatabase } from "../database/AccountDatabase";
import { AccountDB } from "../types";
import { Account } from "../models/Account";

export class AccountBusiness {
  public async getAccounts(): Promise<Account[]> {
    const accountDatabase = new AccountDatabase();
    const accountsDB: AccountDB[] = await accountDatabase.findAccounts();

    const accounts = accountsDB.map(
      (accountDB) =>
        new Account(
          accountDB.id,
          accountDB.balance,
          accountDB.owner_id,
          accountDB.created_at
        )
    );

    return accounts;
  }

  public async getAccountBalance(id: string): Promise<string> {
    const accountDatabase = new AccountDatabase();
    const accountDB = await accountDatabase.findAccountById(id);

    if (!accountDB) {
      throw new Error("'id' não encontrado");
    }

    const account = new Account(
      accountDB.id,
      accountDB.balance,
      accountDB.owner_id,
      accountDB.created_at
    );

    const balance = account.getBalance();

    return `Balanço: ${balance}`;
  }

  public async createAccount(input: any): Promise<Account> {
    const { id, ownerId } = input;

    if (typeof id !== "string") {
      throw new Error("'id' deve ser string");
    }

    if (typeof ownerId !== "string") {
      throw new Error("'ownerId' deve ser string");
    }

    const accountDatabase = new AccountDatabase();
    const accountDBExists = await accountDatabase.findAccountById(id);

    if (accountDBExists) {
      throw new Error("'id' já existe");
    }

    const newAccount = new Account(id, 0, ownerId, new Date().toISOString());

    const newAccountDB: AccountDB = {
      id: newAccount.getId(),
      balance: newAccount.getBalance(),
      owner_id: newAccount.getOwnerId(),
      created_at: newAccount.getCreatedAt(),
    };

    await accountDatabase.insertAccount(newAccountDB);

    return newAccount;
  }

  public async editAccount(input: any): Promise<string> {
    const { id, value} = input;
    
    if (typeof value !== "number") {
      throw new Error("'value' deve ser number");
    }

    const accountDatabase = new AccountDatabase();
    const accountDB = await accountDatabase.findAccountById(id);

    if (!accountDB) {
      throw new Error("'id' não encontrado");
    }

    const account = new Account(
      accountDB.id,
      accountDB.balance,
      accountDB.owner_id,
      accountDB.created_at
    );

    const newBalance = account.getBalance() + value;
    account.setBalance(newBalance);

    await accountDatabase.updateBalanceById(id, newBalance);

    return newBalance.toString();
  }
}
