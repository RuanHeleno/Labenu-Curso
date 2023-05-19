import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista, setLista] = useState(["Estudar", "Comer", "Trabalhar"]);

  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    setLista((arr) => [...arr, novaTarefa]);

    setNovaTarefa("");
  };

  const removeTarefa = (item) => {
    const novaLista = lista.filter((el) => el !== item);

    setLista(novaLista);
  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {lista.map((item, id) => (
            <Tarefa key={id}>
              <p>{item}</p>
              <RemoveButton onClick={() => removeTarefa(item)}>
                <img src={bin} alt="" width="16px" />
              </RemoveButton>
            </Tarefa>
          ))}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
