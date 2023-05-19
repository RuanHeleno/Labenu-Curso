# Imutabilidade e useState() - Exercício

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)


## Como eu vou executar os exercícios?
Para o exercício de hoje, vamos utilizar um template! Dentro desse template vocês vão encontrar uma estrutura para trabalharmos com Pokemons! :) 


Para executar este exercício, você pode criar uma nova aplicação React, utilizar o **CodeSandbox** ou usar este template do repositório.
- Caso use este template, lembre-se de dar um `npm install` assim que baixar! 
- Caso estiver usando o codeSandBox, pode usar esse template aqui: https://codesandbox.io/s/imutabilidade-e-usestate-forked-cr3wyx?file=/src/App.js (Atualização)

Caso queira criar uma nova aplicação React, basta copiar os conteúdos deste repositório e colar dentro da pasta do seu projeto criado.

# **Observação: A aplicação não vai funcionar até você finalizar o exercício 2!**

# Exercício 1

Primeiro, vamos analisar todo o código que vocês estão recebendo. 

- Observe o `App.js`, o que você consegue visualizar que já conhece? 

Resposta: `<GlobalStyles/>` e Componentes

- Entende o `<GlobalStyles/>`?

Resposta: Sim, apenas o reset de estilos para o HTML

- Analize o useState criado, que tipo de dado está armazenado neste estado?

Resposta: Não tem esse state.

- Agora analize o `JSX`, quais componentes existem nesta aplicação?

Resposta: PokemonCard

- O que existe dentro do componente `PokemonCard`?

Resposta: function, props e styled-components

- O que a função `evoluirPokemon` está fazendo no momento?

Resposta: Chamando um console.log com o texto de "Cliquei no botão de evoluir"

- Quais informações estão sendo recebidas pelo componente PokemonCard via props?

Resposta: color, src, alt, onClick

# Exercício 2

Agora é hora de criar seus próprios cards, para recolher as informações dos pokemons, você pode usar o site https://bulbapedia.bulbagarden.net/wiki/Main_Page como referência! 

Seu trabalho nesse momento é passar as Props corretamente do componente `App.js` para dentro do componente `PokemonCard`. Verifique se todas elas estão funcionando.

Você vai perceber que é necessário passar uma cor para os styled-components. Você não precisa entender 100% como isso funciona agora, mas se você passar as props corretamente, vai dar certo! :) 


# Exercício 3
 Implemente a função de evoluir o Pokemon. Nessa função de onClick, você precisa modificar o estado criado no App.js para que, ao clicar, o Pokemon evolua pra sua próxima forma, se isso for possível.
Perceba que alguns pokemons evoluem e outros não.
Para isso, você precisa modificar os dados de dentro do objeto salvo no useState. Através de um spread operator, modifique apenas os dados necessários para que o pokemon evolua: 

- Cor
- Imagem
- Nome
- Tipo
- Evoluido (perceba que isso é um boolean, se ele já estiver evoluído, deve ser true; caso contrário, false.)
- Peso

Depois disso, crie novos cards com pokemons diferentes para praticar :) 
