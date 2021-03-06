import {FilterValueType, TodolistType} from "../App";
import {v1} from "uuid";

export type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}
export type AddTodolistActionType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId: string
}
export type ChangeTitleActionType = {
    type: 'CHANGE-TITLE'
    id: string
    title: string
}
export type ChangeFilterActionType = {
    type: 'CHANGE-FILTER'
    id: string
    filter: FilterValueType
}
export const RemoveTodolistAC = (todolistId: string):
    RemoveTodolistActionType => ({type: "REMOVE-TODOLIST", id: todolistId})
export const AddTodolistAC = (title: string):
    AddTodolistActionType => ({type: "ADD-TODOLIST", title, todolistId: v1()})
export const TodolistTitleAC = (id: string, title: string):
    ChangeTitleActionType => ({type: "CHANGE-TITLE", title, id})

export const TodolistFilterAC = (id: string, filter: FilterValueType):
    ChangeFilterActionType => ({type: 'CHANGE-FILTER', id, filter} as const);

export type ActionTypes = RemoveTodolistActionType | AddTodolistActionType | ChangeTitleActionType | ChangeFilterActionType

export const todolistsReducer = (state: Array<TodolistType>, action: ActionTypes) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' :
            return state.filter(tl => tl.id !== action.id)
        case 'ADD-TODOLIST': {
            return [...state, {
                id: action.todolistId,
                title: action.title,
                filter: "all"
            }]
        }
        case 'CHANGE-TITLE': {
            const todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.title = action.title
            }
            return [...state]
        }
        case "CHANGE-FILTER": {
            let todolist = state.find(tl => tl.id === action.id)
            if (todolist) {
                todolist.filter = action.filter

            }
            return [...state]
        }
        default:
            return state
    }
}



