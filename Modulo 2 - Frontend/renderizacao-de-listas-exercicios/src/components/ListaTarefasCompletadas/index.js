import { Completado } from "./styled";

const ListaTarefasCompletadas = (props) => {
  const { listaCompletada, Tarefa } = props;

  return (
    <div>
      {listaCompletada.map((tarefa, index) => {
        return (
          <Tarefa key={index}>
            <Completado>{tarefa}</Completado>
          </Tarefa>
        );
      })}
    </div>
  );
};

export default ListaTarefasCompletadas;
