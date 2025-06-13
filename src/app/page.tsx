
import {ToDoList} from "@/components/ToDoList";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ToDoList />

    </div>
  );
}
