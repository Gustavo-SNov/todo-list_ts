import {JSX} from "react";
import styles from "../styles/home.module.css";

export function ToDoList(): JSX.Element {

    return (
        <div className="container">
            <h1>Lista de Tarefas</h1>
            <div className={styles.inputArea}>
                <input
                    type="text"
                    placeholder="Digite uma tarefa..."
                />
                <button >Adicionar</button>
            </div>

        </div>
    )
}




