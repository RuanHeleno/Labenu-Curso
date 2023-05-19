import { Item } from "./Item";
import { useCounter } from "../hooks/useCounter";

export const Cart = () => {
  const [quantity, somar, subtrair, reset, onIncrementStep, setQuantity] =
    useCounter({
      min: 1,
      max: 10,
      initial: 0,
    });

  return (
    <div>
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity}
        onIncrement={somar}
        onDecrement={subtrair}
        onReset={reset}
        onIncrementStep={onIncrementStep}
        setQuantity={setQuantity}
      />
    </div>
  );
};
