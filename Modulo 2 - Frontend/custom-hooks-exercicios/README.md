# Custom Hooks - Exercícios

Caso não lembre como funciona o processo de entrega, clique [**aqui**](https://github.com/labenuexercicios/instrucoes-entrega)

## O que você precisa saber e praticar desta aula?
1. Criação de Custom Hooks
2. Implementação de Custom Hooks

## Como eu vou executar os exercícios?

pode usar este template do codesandbox: https://codesandbox.io/s/custom-hooks-exercicio-389k5l

O exercício de hoje é construir um Custom Hook que gerencia um **contador**, que tem valores numéricos que **incrementam** e **decrementam**, e que pode ser zerado. Vamos entender um caso de uso para este Custom Hook.

Imagine que você está construindo um e-commerce. Sempre que uma pessoa quiser comprar um item, ela deve ser capaz de selecionar a quantidade de itens que quer. Algo parecido com isso:
![image](https://user-images.githubusercontent.com/11279432/203055699-c31bbbdf-bd80-4c04-bacb-e79c1abc01eb.png)


O código do componente “Cart” (ou Carrinho) está assim:

```jsx
const Cart = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="Cart">
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity}
        onIncrement={() => setQuantity((q) => q + 1)}
        onDecrement={() => setQuantity((q) => q - 1)}
        onReset={() => setQuantity(0)}
      />
    </div>
  );
}
```

Este componente pode ser simplificado ao criar um Custom Hook `useCounter`. Algo como:

```jsx
function Cart() {
  const quantity = useCounter(0);

  return (
    <div className="Cart">
      <h1>Meu Carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity.value}
        onIncrement={quantity.increment}
        onDecrement={quantity.decrement}
        onReset={quantity.reset}
      />
    </div>
  );
}
```

O exercício de hoje é implementar este Custom Hook! Ao terminar você deve ter algo assim:


https://user-images.githubusercontent.com/11279432/203056366-0f861e64-5a4e-4249-96f4-26d9ce2d6dfd.mp4



Caso tenha conseguido construir, temos algumas sugestões de como melhorar:

- Adicionar um parâmetro de “quantidade de aumento”. Isto é, ao invés de subir de 1 em 1, este valor poder ser customizado
    - algo como `counter.increment(step)`

- Adicionar um valor mínimo e máximo
    - algo como `useCounter({ min: 0, max: 10, initial: 0}))`;
    
- Poder definir o valor do contador escrevendo no campo ao invés de apenas usar + e -
    - algo como `counter.set(value)`
