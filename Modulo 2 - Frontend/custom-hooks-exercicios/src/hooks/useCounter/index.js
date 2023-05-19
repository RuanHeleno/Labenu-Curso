import { useState } from "react";

export const useCounter = (obj) => {
  const [min, setMin] = useState(obj.min);
  const [max, setMax] = useState(obj.max);
  const [initial, setInitial] = useState(obj.initial);
  const [quantity, setQuantity] = useState(initial);

  const somar = () => {
    quantity < max
      ? setQuantity(quantity + 1)
      : alert("Quantidade máxima atingida!");
  };

  const subtrair = () => {
    quantity <= min
      ? setQuantity(quantity - 1)
      : alert("Quantidade mínima atingida!");
  };

  const reset = () => {
    setQuantity(0);
  };

  const onIncrementStep = () => {
    const newMin = Number(prompt("Digite o limite mínimo:"));
    setMin(newMin);

    const newMax = Number(prompt("Digite o limite máximo:"));
    setMax(newMax);

    const newInitial = Number(prompt("Digite o número inicial:"));
    setInitial(newInitial);
  };

  return [quantity, somar, subtrair, reset, onIncrementStep, setQuantity];
};
