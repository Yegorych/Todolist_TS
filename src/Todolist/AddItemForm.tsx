import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@material-ui/core";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {
    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addItem(title.trim());
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

            <TextField
                variant={"outlined"}
                error={!!error}
                value={title}
                label={"Title"}
                helperText={error}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <Button variant={"contained"} color={"primary"} onClick={addTask}>+</Button>
        </div>
    )
}