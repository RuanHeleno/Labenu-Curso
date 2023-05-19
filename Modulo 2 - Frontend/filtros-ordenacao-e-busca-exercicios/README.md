# Filtros, ordenação e busca

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)


## Como eu vou executar os exercícios?
Para o exercício de hoje, vamos utilizar um template! Dentro desse template vocês estão recebendo uma resolução dos exercícios que fizemos durante a aula e vão continuar com mais duas outras implementações.


Para executar este exercício, você pode criar uma nova aplicação React, utilizar o **CodeSandbox** ou usar este template do repositório.
- Caso use este template, lembre-se de dar um `npm install` assim que baixar! 
- Caso estiver usando o codeSandBox, pode usar esse template aqui: https://codesandbox.io/s/filtros-ordenacao-e-busca-exercicios-7ontnl

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.

# Exercício 1

Primeiro, vamos analisar todo o código que vocês estão recebendo.

Você **não precisa** responder às questões abaixo dentro de seu projeto, mas é importante que leia o projeto e reflita sobre os questionamentos antes de prosseguir.

- Observe o `App.js`, o que você consegue visualizar que já conhece? Lembra dos filtros e map aplicados durante a aula? 
- Analize o componente `Header`, o componente `PokemonCard` e o `App.js`.
  - No componente `Header` temos um array de tipos de pokemon que está sendo mapeado e retornando as opções dentro do dropdown de tipos.
  - No componente `PokemonCard` todas as props já estão sendo passadas corretamente também. Os filtros por id e por nome também já funcionam. 

### - Agora vamos dar uma breve explicação sobre a pasta /utils no projeto: 

Dentro dessa pasta você encontrará 2 arquivos, cada um com uma função. O objetivo dessa pasta é isolar funções que tem objetivos muito específicos para que elas possam ser reutilizadas posteriormente. Uma função retorna uma `cor` para o card ao receber o `tipo` do pokemon; a outra retorna o ícone correspondente a cada tipo do pokemon. Cada card tem no máximo 2 ícones de tipo. Se quiser, dê uma olhada nessas funções e tente entender o funcionamento delas.

# Exercício 2

O seu trabalho hoje é bem simples: Você precisa aplicar `mais 2 filtros`. Primeiro, aplique o filtro de tipos de pokemon. Os requisitos são: 

- Ao selecionar um tipo de pokemon no dropdown, todos os pokemons que tiverem aquele tipo precisam aparecer na tela, independente se o tipo for o primário ou o secundário. 
  - Primário é o tipo que aparece primeiro, secundário é o tipo que aparece depois, caso exista.
- Quando o input estiver vazio, todos os pokemons continuam aparecendo na tela.
- No objeto que representa um pokemon, `type` é um array de tipos, use apenas o primeiro elemento do array como referência.


# Exercício 3

O segundo filtro será uma ordenação por ordem crescente ou decrescente alfabeticamente. Baseando-se no nome do pokemon, se a ordem `crescente` estiver ativada, os pokemons são ordenados em ordem alfabética (a-z). Se a ordem `decrescente` estiver ativada, os pokemons ficam organizados ao inverso da ordem alfabética (z-a).
