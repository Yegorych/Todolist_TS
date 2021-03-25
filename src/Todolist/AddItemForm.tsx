import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType = {
    addTask: (title: string, todolistId: string) => void
    id: string
}

export function AddItemForm(props: AddItemFormPropsType) {
    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)
    // const [newTaskTitle, setNewTaskTitle] = useState("")
    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim(), props.id)
            setTitle("")
        } else {
            setError("Title is required")
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === 'Enter') {
            addTask()
        }
    }
    return (
        <div>

            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
    )
}