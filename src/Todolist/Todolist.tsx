import React, {useState} from "react";
import {FilterValueType} from "../App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValueType) => void
    addTask: (title: string) => void

}

export function Todolist(props: PropsType) {

    const addTask = () => {props.addTask(newTaskTitle)
        setNewTaskTitle('')}
    const [newTaskTitle, setNewTaskTitle] = useState("")

    return (
        <div className={"todolist"}>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={(e) => {
                           setNewTaskTitle(e.currentTarget.value)}}
                       onKeyPress={ (e) => {
                           if (e.key === 'Enter') {addTask()}
                       }}
                />
                <button onClick={addTask}>+</button>
            </div>
            <ul>
                {props.tasks.map(t => <li key={t.id}>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={ () => {
                            props.removeTask(t.id)

                        }}>x</button>
                    </li>
                )}
            </ul>
            <div>
                <button onClick={ () => {props.changeFilter("all")}}>All</button>
                <button onClick={ () => {props.changeFilter("active")}}>Active</button>
                <button onClick={ () => {props.changeFilter("completed")}}>Completed</button>
            </div>

        </div>
    )
}