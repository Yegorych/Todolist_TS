import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist/Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./Todolist/AddItemForm";

export type FilterValueType = "all" | "active" | "completed"
export type TodolistType = {
    id: string
    title: string
    filter: FilterValueType
}
 export type TasksStateType = {
    [key: string]: Array<TaskType>
}

function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState <Array<TodolistType>>([
        {
            id: todolistId1,
            title: 'What to learn',
            filter: 'all'
        },
        {
            id: todolistId2,
            title: 'What to buy',
            filter: 'all'
        }
    ])
    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]: [
            {id: v1(), title: 'HTML & CSS', isDone: true},
            {id: v1(), title: 'React', isDone: true}
        ],
        [todolistId2]: [
            {id: v1(), title: 'MacBook', isDone: true},
            {id: v1(), title: 'Milk', isDone: true}
        ]
    })
    function removeTodolist(id: string) {
        setTodolists(todolists.filter(tl => tl.id != id))
        delete tasks[id]
        setTasks({...tasks})
    }
    function removeTask(id: string, todolistId: string) {
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = todolistTasks.filter(t => t.id !== id)
        setTasks({...tasks})
    }
    function changeTodolistTitle(id: string, newTitle: string) {
       const todolist = todolists.find(tl => tl.id === id)
        if (todolist) {
            todolist.title = newTitle
            setTodolists([...todolists])
        }
    }
    function addTask(title: string, todolistId: string) {

        let task = {id: v1(), title: title, isDone: false}
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = [task, ...todolistTasks]
        setTasks({...tasks})
    }
    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        let todolistTasks = tasks[todolistId]
        let task = todolistTasks.find(t => t.id === id)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }
    }
    function changeTitle(id: string, newValue: string, todolistId: string) {
        let todolistTasks = tasks[todolistId]
        let task = todolistTasks.find(t => t.id === id)
        if (task) {
            task.title = newValue
            setTasks({...tasks})
        }
    }

    function changeFilter(value: FilterValueType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }
function addTodolist(title: string) {
        let newTodolistId = v1()
        let todolist: TodolistType = {
            id: newTodolistId,
            title: title,
            filter: "all"
        }
        setTodolists([todolist, ...todolists])
    setTasks({
        ...tasks,
        [todolist.id] : []
    })
}

    return (

        <div className="App">
            <AddItemForm addItem={addTodolist}/>
            {
                todolists.map(tl => {
                    let tasksForTodolist = tasks[tl.id];
                    if (tl.filter === "active"){
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false)
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true)
                    }
                    return (
                        <Todolist
                            key={tl.id}
                            id={tl.id}
                            title={tl.title}
                            filter={tl.filter}
                            addTask={addTask}
                            removeTask={removeTask}
                            tasks={tasksForTodolist}
                            changeFilter={changeFilter}
                            changeTaskTitle={changeTitle}
                            removeTodolist={removeTodolist}
                            changeTaskStatus={changeStatus}
                            changeTodolistTitle={changeTodolistTitle}
                        />
                    )
                })
            }
        </div>
    );
}

export default App;





