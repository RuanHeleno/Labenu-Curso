import React, { useEffect, useState } from "react";
import { Form } from "./style";

export default function FormLocal() {
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [listaTarefa, setListaTarefa] = useState([]);
  const [cont, setCont] = useState(0);

  const save = () => {
    localStorage.setItem("nome", JSON.stringify(nome));
  };

  const load = () => {
    const result = JSON.parse(localStorage.getItem("nome"));

    alert(result);
  };

  useEffect(() => {
    localStorage.setItem("nome", JSON.stringify(nome));
  }, [nome]);

  const saveTasks = () => {
    setListaTarefa((arr) => [...arr, tarefa]);

    localStorage.setItem("tarefas", JSON.stringify(listaTarefa));
  };

  const loadTasks = () => {
    setListaTarefa(JSON.parse(localStorage.getItem("tarefas")));
  };

  useEffect(() => {
    const tarefas = localStorage.getItem("tarefas");
    if(tarefas) {
      const listaTarefaArray = JSON.parse(tarefas);
      setListaTarefa(listaTarefaArray)
    }
  }, []);

  const handleCont = () => {
    setCont(cont + 1);

    localStorage.setItem("cont", JSON.stringify(cont));
  };

  useEffect(() => {
    document.title = cont;

    setCont(Number(JSON.parse(localStorage.getItem("cont")) + 1));
  }, [cont]);

  return (
    <Form>
      <h3>Prática 1</h3>
      <label htmlFor="nome">
        nome:
        <input
          name="nome"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <div>
        <button onClick={save}>Guardar Dados</button>
        <button onClick={load}>Acessar Dados</button>
      </div>
      <br />
      Nome: {nome}
      <h3>Prática 2</h3>
      <label htmlFor="tarefa">
        tarefa:
        <input
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
      </label>
      <button type="button">adicionar Tarefa</button>
      <ul>
        {listaTarefa.map((task, id) => {
          return <li key={id}>{task}</li>;
        })}
      </ul>
      <div>
        <button onClick={saveTasks}>Guardar tarefa</button>
        <button onClick={loadTasks}>Acessar tarefa</button>
      </div>
      <button onClick={handleCont}>Contador</button>
    </Form>
  );
}
