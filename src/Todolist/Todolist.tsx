import React, {ChangeEvent} from "react";
import {FilterValueType} from "../App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
// import {EditableSpan} from "./EditableSpan";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeFilter: (value: FilterValueType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    filter: FilterValueType
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (id: string, NewTitle: string, todolistId: string) => void

}

export function Todolist(props: PropsType) {

    const onAllClickHandler = () => {
        props.changeFilter("all", props.id)
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active", props.id)
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed", props.id)
    }
    const removeTodolist =  () => {
        props.removeTodolist(props.id)
    }
const addTask = (title: string) => {
        props.addTask(title, props.id)
}
    return (
        <div className={"todolist"}>
            <h3>
                {props.title}
                <button onClick={removeTodolist }>x</button></h3>

            <AddItemForm addItem={addTask}/>
            <ul>
                {props.tasks.map(t => {
                        const onClickHandler = () => {
                            props.removeTask(t.id, props.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            let newIsDoneValue = e.currentTarget.checked
                           props.changeTaskStatus(t.id, newIsDoneValue, props.id)
                        }
                        const onChangeTitleHandler = (newValue: string) => {
                            // let newIsDoneValue = e.currentTarget.checked
                           props.changeTaskTitle(t.id, newValue, props.id)
                        }
                        return <li key={t.id}
                                   className={t.isDone ? "is-done" : ''}
                        >
                            <input type="checkbox"
                                   onChange={onChangeHandler}
                                   checked={t.isDone}
                            />
                            <EditableSpan title={t.title} onChange={onChangeTitleHandler}/>
                            <button onClick={onClickHandler}>x</button>
                        </li>
                    }
                )}
            </ul>
            <div>
                <button className={props.filter === 'all' ? "active-filter" : ''}
                        onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === 'active' ? "active-filter" : ''}
                        onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === 'completed' ? "active-filter" : ''}
                        onClick={onCompletedClickHandler}>Completed
                </button>
            </div>

        </div>
    )
}