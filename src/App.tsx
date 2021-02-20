import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";

export type FilterValueType = "all" | "active" | "completed"
function App() {

    let [tasks, setTasks] = useState([
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true },
            { id: 3, title: "ReactJS", isDone: false },
        ])
    let [filter, setFilter] = useState<FilterValueType>("all")

    function removeTask(id: number) {
        tasks = tasks.filter(t => t.id !== id)
        setTasks(tasks)
    }
    let tasksForTodolist = tasks;
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    function changeFilter(value: FilterValueType) {
        setFilter(value)
    }



    return (
        <div className="App">
            <div>
                <Todolist
                    title="What to learn"
                    tasks={tasksForTodolist}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                />
            </div>
        </div>
    );
}

export default App;





