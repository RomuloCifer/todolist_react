import React, { useState } from "react";

function Main() {
  const [tarefas, setTarefas] = useState([]); // guarda a lista de tareas
  const [novaTarefa, setNovaTarefa] = useState(""); // Guarda o texto do usuario

  const adicionarTarefa = () => {
    const texto = novaTarefa.trim();
    if (!texto) {
      return; // Sem tarefas vazias :D
    }
    const novaTarefaObj = {
      id: Date.now(), // ID baseado no tempo atual p/ ser unico
      texto,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefaObj]); // Adiciona a nova tarefa na lista
    setNovaTarefa(""); // Limpa o input apos adicionar
  };

  return (
    <main>
      <section>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)} // Atualiza o estado novaTarefa com o valor do input
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </section>
      <section className="Tarefas">
        {tarefas.length === 0 ? (
          "Nada por enquanto"
        ) : (
          <ul>
            {tarefas.map((tarefa) => (
              <li key={tarefa.id}>{tarefa.texto}</li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default Main;
