import React, { useState } from "react";
import { MainContainer } from "./styled";

function Main() {
  // [tarefas, setTarefas] O primeiro elemento é o estado atual (tarefas) e o segundo é a função para atualizar esse estado (setTarefas)
  // useState([]) começa com uma lista vazia de tarefas
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState(""); // Guarda o título da tarefa
  const [descricao, setDescricao] = useState(""); // Guarda a descrição da tarefa

  const adicionarTarefa = () => {
    const textoTitulo = titulo.trim();
    if (!textoTitulo) {
      return; // Sem tarefas vazias :D
    }
    const novaTarefaObjeto = {
      id: Date.now(), // ID baseado no tempo atual p/ ser unico
      titulo: textoTitulo,
      descricao: descricao.trim(),
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefaObjeto]); //pega todas as tarefas e adiciona a nova
    setTitulo(""); // Limpa o input apos adicionar
    setDescricao(""); // Limpa a descrição apos adicionar
  };
  const alternarConcluida = (id) => {
    // Função para alternar o status de concluída de uma tarefa
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida } : tarefa
      // se o ID for o mesmo que o da tarefa, cria uma cópia do objeto com o oposto do valor de concluida, se não, retorna a tarefa semy mmudanças.
      )
    )
  }

  return (
    <MainContainer>
    <main>
      <section>
        <input
          type="text"
          placeholder="Título da tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)} // Atualiza o estado titulo com o valor do input
        />
        <textarea
          placeholder="Descrição da tarefa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          //quando o valor mudar, pega o evento que fez a mudança, e faz o setDescricao com o valor atual do texto, ou seja, oq o usuario digitou.
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </section>
      <section className="Tarefas">
        {tarefas.length === 0 ? (
          "Poidi relaxar"
        ) : (
          <ul>
            {tarefas.map((tarefa) => (
              <li
                key={tarefa.id}
                style={{
                  textDecoration: tarefa.concluida ? "line-through" : "none",
                  color: tarefa.concluida ? "#888" : "#000",
                  // Se a tarefa estiver concluída, risca o texto, se não, deixa normal.
                }}
              >
                <strong>{tarefa.titulo}</strong>
                {tarefa.descricao && <p>{tarefa.descricao}</p>}
                <button
                  type="button"
                  onClick={() => alternarConcluida(tarefa.id)}
                  // Quando clicar no botão, a função para alternar concluida é chamada com o ID da tarefa.
                >
                  {tarefa.concluida ? "Desmarcar" : "Marcar como feita"}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
    </MainContainer>
  );
}

export default Main;
