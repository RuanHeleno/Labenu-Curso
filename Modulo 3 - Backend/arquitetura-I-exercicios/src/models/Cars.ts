export class Cars {
  constructor(
    private id: string,
    private modelo: string,
    private marca: string,
    private ano: number,
    private valor: number
  ) {}

  public getId(): string {
    return this.id;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public setModelo(newModelo: string) {
    this.modelo = newModelo;
  }

  public getMarca(): string {
    return this.marca;
  }

  public setMarca(newMarca: string) {
    this.marca = newMarca;
  }

  public getAno(): number {
    return this.ano;
  }

  public setAno(newAno: number) {
    this.ano = newAno;
  }

  public getValor(): number {
    return this.valor;
  }

  public setValor(newValor: number) {
    this.valor = newValor;
  }
}
