import {TodolistType} from "../App";

type RemoveTodolistActionType = {
    type: 'REMOVE-TODOLIST'
    id: string
}

type ActionType = RemoveTodolistActionType

export const todolistReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case:
    }
}