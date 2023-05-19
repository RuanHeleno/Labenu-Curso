import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
  LinhaHorizontal,
} from "./styled";
import bin from "../../assets/bin.png";
import ListaTarefasCompletadas from "../ListaTarefasCompletadas";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState([
    "Fazer exercícios",
    "Estudar React",
    "Trabalhar",
  ]);
  const [listaCompletada, setListaCompletada] = useState([]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    const novaLista = [...lista, novaTarefa];
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    setListaCompletada((arr) => [...arr, tarefa]);

    const listaFiltrada = lista.filter((item) => item !== tarefa);
    setLista(listaFiltrada);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") adicionaTarefa();
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
          onKeyDown={handleKeyDown}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {lista.map((tarefa, index) => {
            return (
              <Tarefa key={index}>
                <p>{tarefa}</p>
                <RemoveButton onClick={() => removeTarefa(tarefa)}>
                  <img src={bin} alt="" width="16px" />
                </RemoveButton>
              </Tarefa>
            );
          })}
        </ul>
      </ListaContainer>

      <LinhaHorizontal />

      <ListaContainer>
        <ul>
          <ListaTarefasCompletadas
            listaCompletada={listaCompletada}
            Tarefa={Tarefa}
          />
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
