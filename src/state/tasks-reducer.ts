import {TasksStateType} from "../App";
import {TaskType} from "../Todolist/Todolist";
import uuid from 'uuid'

export type ActionsType = ReturnType<typeof RemoveTaskAC> | ReturnType<typeof AddTaskAC>
export const RemoveTaskAC = (taskId: string, todolistId: string) => {
    return {type: "REMOVE-TASK", taskId, todolistId} as const
}
export const AddTaskAC = (title: string, todolistId: string) => {
    return {type: 'ADD-TASK', title, todolistId, taskId: uuid.v1()} as const
}

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK' :
            const stateCopy = {...state}
            stateCopy[action.todolistId] = state[action.todolistId]
                .filter(t => t.id !== action.taskId)
            return stateCopy
        case 'ADD-TASK' : {
            const stateCopy = {...state}
            const tasks = stateCopy[action.todolistId]
            const newTask: TaskType = {
                id: action.taskId,
                title: action.title,
                isDone: false
            }
            const tasksCopy = [newTask, ...tasks]
            stateCopy[action.todolistId] = tasksCopy
            return stateCopy
        }
        default:
            throw new Error("I don't understand")

    }
}


