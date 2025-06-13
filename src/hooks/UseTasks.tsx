import { useState } from "react";


type Task = {
    id: number;
    text: string;
    completed: boolean;
}

type UseTasksReturn = {
    tasks: Task[];
    addTask: (text: string) => void;
}

const UseTasks = (): UseTasksReturn => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (text: string) => {
        const newTask: Task = {
            id: Date.now(),
            text: text,
            completed: false,
        }
        setTasks(prev => [...prev, newTask]);
    }

    return { tasks, addTask };
}

export default UseTasks;