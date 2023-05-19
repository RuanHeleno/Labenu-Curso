import "./styles.css";
export function Item(props) {
  return (
    <div className="Item">
      <p className="label">{props.label}</p>
      <p className="qty">
        Quantidade:
        <input
          type="text"
          value={props.quantity}
          onChange={(e) => props.setQuantity(e.target.value)}
        />
      </p>
      <button onClick={props.onDecrement}>-</button>
      <button onClick={props.onReset}>Restaurar</button>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onIncrementStep}>Definir limites</button>
    </div>
  );
}
