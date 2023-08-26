export class Video {
  constructor(
    private id: string,
    private titulo: string,
    private duracaoEmSegundos: number,
    private dataDeUpload: string
  ) {}

  public getId(): string { return this.id; }

  public getTitulo(): string { return this.titulo; }

  public setTitulo(newTitulo: string) { return this.titulo = newTitulo; }

  public getDuracaoEmSegundos(): number { return this.duracaoEmSegundos; }

  public setDuracaoEmSegundos(newDuracaoEmSegundos: number) { return this.duracaoEmSegundos = newDuracaoEmSegundos; }

  public getDataDeUpload(): string { return this.dataDeUpload; }
}