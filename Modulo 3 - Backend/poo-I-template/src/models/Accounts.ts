export class Accounts {
  constructor(
    private id: string,
    private balance: number,
    private owner_id: string,
    private createdAt: string
  ) {}

  getId(): string {
    return this.id;
  }

  getBalance(): number {
    return this.balance;
  }

  setBalance(newBalance: number): void {
    this.balance = newBalance;
  }

  getOwnerID(): string {
    return this.owner_id;
  }

  getCreatedAt(): string {
    return this.createdAt;
  }

  setCreatedAt(newCreatedAt: string) {
    this.createdAt = newCreatedAt;
  }
}
