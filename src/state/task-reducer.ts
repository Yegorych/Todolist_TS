import {TasksStateType} from "../App";

export type SomeActionCreatorActionType1 = {
    type: ''
    id: string
}
export type SomeActionCreatorActionType2 = {
    type: ''
    title: string
}

export type ActionTypes = SomeActionCreatorActionType1 | SomeActionCreatorActionType2

export const taskReducer = (state: TasksStateType, action: ActionTypes): TasksStateType => {
    switch (action.type) {
        case '' :
            return state
        case '': {
            return state
        }
        default:
            return state
    }
}

export const SomeAC1 = (id: string): SomeActionCreatorActionType1 => {
    return {type: '', id: id}
}
export const SomeAC2 = (id: string): SomeActionCreatorActionType1 => {
    return {type: '', id: id}
}



