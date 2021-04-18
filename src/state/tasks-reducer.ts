import {TasksStateType} from "../App";

export type ActionsType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (taskId: string, todolistId: string) => {
    return {type: "REMOVE-TASK", taskId, todolistId} as const
}

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK' :
            const stateCopy = {...state}
            stateCopy[action.todolistId] = state[action.todolistId]
                .filter(t => t.id !== action.taskId)
            return stateCopy
        default:
            throw new Error("I don't understand")

    }
}


