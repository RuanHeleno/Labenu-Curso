import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

function App() {
  const [tarefas, setTarefa] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("");

  const didMount = useRef(false);

  useEffect(() => {
    didMount.current
      ? localStorage.setItem("tarefas", JSON.stringify(tarefas))
      : (didMount.current = true);
  }, [tarefas]);

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("tarefas"));

    setTarefa(result);
  }, []);

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  const criaTarefa = () => {
    const obj = {
      id: Date.now(),
      texto: inputValue,
      completa: false,
    };

    setTarefa((arr) => [...arr, obj]);
  };

  const selectTarefa = (id) => {
    tarefas.map((item) => {
      if (item.id === id) item.completa = !item.completa;
    });
  };

  const onChangeFilter = (event) => {
    setFiltro(event.target.value);
  };

  const listaFiltrada = tarefas.filter((tarefa) => {
    switch (filtro) {
      case "pendentes":
        return !tarefa.completa;
      case "completas":
        return tarefa.completa;
      default:
        return true;
    }
  });

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onChange={onChangeInput} />
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br />

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map((tarefa, id) => {
          return (
            <li
              key={id}
              completa={tarefa.completa}
              onClick={() => selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </li>
          );
        })}
      </TarefaList>
    </div>
  );
}

export default App;
