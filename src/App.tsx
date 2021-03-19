import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";
import {v1} from "uuid";

export type FilterValueType = "all" | "active" | "completed"
export type TodolistType = {
    id: string
    title: string
    filter: FilterValueType
}

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
    ])
    // let [todolist, setTodolists] = useState

    let [todolists, setTodolists] = useState <Array<TodolistType>>([
        {
            id: v1(),
            title: 'What to learn',
            filter: 'active'
        },
        {
            id: v1(),
            title: 'What to buy',
            filter: 'completed'
        }
    ])

    function removeTask(id: string) {
        tasks = tasks.filter(t => t.id !== id)
        setTasks(tasks)
    }
    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }
    function changeStatus(id: string, isDone: boolean) {
        let task = tasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTasks([...tasks])
        }
    }

    function changeFilter(value: FilterValueType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }


    return (
        <div className="App">

            {
                todolists.map(tl => {
                    let tasksForTodolist = tasks;
                    if (tl.filter === "active"){
                        tasksForTodolist = tasks.filter(t => t.isDone === false)
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasks.filter(t => t.isDone === true)
                    }
                    return (
                        <Todolist
                            key={tl.id}
                            id={tl.id}
                            title={tl.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={tl.filter}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;





