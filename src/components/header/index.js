import React from "react";
import { AreaHeader } from "./styled";

function header() {
  return (
    <AreaHeader>
      <div className="Container">
        <div className="Logo"><img src="/mcs_markup__logo.jpeg" alt="Logo" /></div>
        <div className="Title">To-do list</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Tarefas</li>
          </ul>
        </nav>
      </div>
    </AreaHeader>
  );
}
export default header;
