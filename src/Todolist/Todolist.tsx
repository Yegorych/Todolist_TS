import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValueType} from "../App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValueType, tolistId: string) => void
    addTask: (title: string) => void
    filter: FilterValueType
    changeTaskStatus: (id: string, isDone: boolean) => void

}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [newTaskTitle, setNewTaskTitle] = useState("")
    const addTask = () => {
        if(title.trim() !== "") {
            props.addTask(title.trim())
            setTitle("")
        }else {
            setError("Title is required")
        }
        props.addTask(newTaskTitle)
        setNewTaskTitle('')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter') {
            addTask()
        }
    }

    const onAllClickHandler = () => {
        props.changeFilter("all", props.id)
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active", props.id)
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed", props.id)
    }

    return (
        <div className={"todolist"}>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? "error" : ""}
                />
                <button onClick={addTask}>+</button>
                {error && <div className={"error-message"}>{error}</div>}
            </div>
            <ul>
                {props.tasks.map(t => {
                        const onClickHandler = () => {
                            props.removeTask(t.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked
                           props.changeTaskStatus(t.id, newIsDoneValue)
                        }
                        return <li key={t.id}
                                   className={t.isDone ? "is-done" : ''}
                        >
                            <input type="checkbox"
                                   onChange={onChangeHandler}
                                   checked={t.isDone}
                            />
                            <span>{t.title}</span>
                            <button onClick={onClickHandler}>x</button>
                        </li>
                    }
                )}
            </ul>
            <div>
                <button className={props.filter === 'all' ? "active-filter" : ''} onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === 'active' ? "active-filter" : ''} onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === 'completed' ? "active-filter" : ''} onClick={onCompletedClickHandler}>Completed
                </button>
            </div>

        </div>
    )
}