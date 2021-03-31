import {TodolistType} from "../App";

type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
}

export type ActionType = RemoveTodolistActionType | AddTodolistActionType

export const todolistReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' :
            return state.filter(tl => tl.id != action.id)
        case 'ADD-TODOLIST' :
            return
        default:
            throw new Error('I don`t understand this type')
    }
}