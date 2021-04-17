import {TasksStateType} from "../App";


export type ActionTypes = ReturnType<typeof RemoveTaskAC>

export const RemoveTaskAC = (taskId: string, todolistId: string) => ({type: "REMOVE-TASK", taskId, todolistId}) as const


export const tasksReducer = (state: TasksStateType, action: ActionTypes): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK' :
            return state
        default:
            return state
    }
}


