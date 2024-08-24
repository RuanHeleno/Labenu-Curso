import { useContext } from "react";

import { GlobalContext } from "../../contexts/GlobalContext";

import { Container, Quantity, SelectQuantity } from "./styled";

const Filter = () => {
  const context = useContext(GlobalContext);
  const { setItensPerPage } = context;

  const options = [
    { value: "30", label: "30" },
    { value: "60", label: "60" },
    { value: "90", label: "90" },
  ];
  
  const optionsMobile = [
    { value: "10", label: "10" },
    { value: "20", label: "20" },
    { value: "30", label: "30" },
  ];

  const selectHandle = (e) => {
    setItensPerPage(e.target.value);
  };
  
  const renderOptions =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
      ? optionsMobile.map((item, id) => (
          <option key={id} value={item.value}>
            {item.label}
          </option>
        ))
      : options.map((item, id) => (
          <option key={id} value={item.value}>
            {item.label}
          </option>
        ));

  return (
    <Container>
      <Quantity>
        Quantidade:
        <SelectQuantity onChange={selectHandle}>{renderOptions}</SelectQuantity>
      </Quantity>
    </Container>
  );
};

export default Filter;
