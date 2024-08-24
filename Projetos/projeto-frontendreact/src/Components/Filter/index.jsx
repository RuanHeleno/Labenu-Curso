import { MainContent, Input, Select, Div, Order, Label } from "./styles.js";

const Filter = (props) => {
  const {
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    searchByName,
    setSearchByName,
    setOrder,
  } = props;

  return (
    <MainContent>
      <Div>
        <Label>Valor mínimo:</Label>
        <Input
          type="number"
          value={minValue}
          onChange={(e) => setMinValue(e.target.value)}
          min="0"
        />
      </Div>

      <Div>
        <Label>Valor máximo:</Label>
        <Input
          type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
          min="0"
        />
      </Div>

      <Div>
        <Label>Busca por nome:</Label>
        <Input
          type="text"
          value={searchByName}
          onChange={(e) => setSearchByName(e.target.value)}
        />
      </Div>

      <Order>
        <label>
          Ordenação:
          <Select
            defaultValue="decrescente"
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </Select>
        </label>
      </Order>
    </MainContent>
  );
};

export default Filter;
