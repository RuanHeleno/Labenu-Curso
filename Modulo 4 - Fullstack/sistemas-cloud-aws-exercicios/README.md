# Deploy - Sistemas Cloud e AWS

## Antes de começar
Esse exercício é opcional. Caso prefira não criar uma conta na AWS, use o tempo livre para revisar outros conteúdos ou focar no projeto.

## Enunciado

Hoje você aprendeu como deployar aplicações através da EC2, um serviço IaaS. Chegou a hora de praticar! <br><br>
Você pode reaproveitar o código feito do exercício pós-aula anterior (Deploy), mas recomendamos praticar o setup completo!

### Exercício 1

Crie uma API Express em até 30 minutos (simplifique o que você quiser). Ela precisa ter pelo menos um endpoint público e não é obrigatório criar endpoints protegidos. Deixe a aplicação em execução localmente por enquanto. <br>

Dica: endpoints GET são mais rápidos de se implementar.

### Exercício 2

Crie um aplicativo React em até 30 minutos. Ele precisa possuir pelo menos um componente que consome localmente a API anterior.
<br>

Dica: cards são componentes naturalmente simples e não necessitam de muita estilização.

### Exercício 3

Agora que você tem uma aplicação Full Stack, faça o deploy de ambas na mesma instância da EC2.<br>
- Caso você já tenha criado uma instância durante a aula, aproveite ela.<br>
- Caso você tenha decidido não cadastrar uma conta na AWS por conta das cobranças automáticas, faça novamente o deploy através do Surge para o front e Render para o back.

## Dicas para o deploy de dois apps em uma única instância

### Faça tudo rodar localmente na máquina virtual
É só abrir dois terminais diferentes, um para executar o front na porta 3000 e outro para o back na porta 3003.

### Abra somente a porta para acessar seu front
Não é necessário abrir a porta 3003, basta liberar a 3000 que clientes poderão acessar seu app React (que consome internamente a API na porta 3003).
