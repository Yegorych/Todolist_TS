import {TodolistType} from "../App";
import {v1} from "uuid";

type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
}
type ChangeTitleActionType = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    newTitle: string
}

export type ActionType = RemoveTodolistActionType | AddTodolistActionType | ChangeTitleActionType

export const todolistReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' :
            return state.filter(tl => tl.id != action.id)
        case 'ADD-TODOLIST' :
            let newTodolistId = v1()
            let todolist: TodolistType = {
                id: newTodolistId,
                title: action.title,
                filter: "all"
            }
            return [todolist, ...state]
        case 'CHANGE-TODOLIST-TITLE':
            return state.find(tl => tl.id === action.id)
        default:
            return state
    }
}