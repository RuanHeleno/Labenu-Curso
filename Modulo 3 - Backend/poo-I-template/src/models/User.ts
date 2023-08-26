export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private createdAt: string
  ) {}

  getId = (): string => {
    return this.id;
  };

  getName = (): string => {
    return this.name;
  };

  setName(newName: string): void {
    this.name = newName;
  }

  getEmail = (): string => {
    return this.email;
  };

  setEmail(newEmail: string): void {
    this.email = newEmail;
  }

  getPassword = (): string => {
    return this.password;
  };

  setPassword(newPassword: string): void {
    this.password = newPassword;
  }

  getCreatedAt = (): string => {
    return this.createdAt;
  };
}