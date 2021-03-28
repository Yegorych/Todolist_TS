import React, {useState} from "react";


type EditableSpanPropsType = {
    title: string
}
export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)
    const activeEditMode = () => setEditMode(true)

    return editMode
           ? <input value={props.title}/>
            :<span onDoubleClick={activeEditMode}>{props.title}</span>
}
