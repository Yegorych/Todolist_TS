import {FilterValueType, TodolistType} from "../App";
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
    title: string
}
type ChangeFilterActionType = {
    type: 'CHANGE-FILTER'
    id: string
    filter: FilterValueType
}

export type ActionType = RemoveTodolistActionType | AddTodolistActionType | ChangeTitleActionType | ChangeFilterActionType

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' :
            return state.filter(tl => tl.id != action.id)
        case 'ADD-TODOLIST' :{
            let newTodolistId = v1()
            let todolist: TodolistType = {
                id: newTodolistId,
                title: action.title,
                filter: "all"
            }
            return [todolist, ...state]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.title = action.title
                return [...state]
            }
            return state
        }
        case "CHANGE-FILTER": {
            let todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.filter = action.filter
                return[...state]
            }
            return state
        }
        default:
            return state
    }
}