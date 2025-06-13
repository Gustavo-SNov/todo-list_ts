import {JSX} from "react";
import styles from "../styles/home.module.css";

export function TaskList(): JSX.Element {
    return <ul id="taskList" className={styles.taskList}>
        <li className={styles.task}>
            <button className={styles.btnCheck}><i className="fa-solid fa-check"></i></button>
            <span className={styles.taskText}>Tarefa 1</span>
            <button className={styles.btnRemove}><i className="fa-solid fa-trash"></i></button>
        </li>
    </ul>
}