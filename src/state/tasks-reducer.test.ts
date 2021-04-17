import {RemoveTaskAC, tasksReducer} from './tasks-reducer';
import {TasksStateType} from '../App';
import {v1} from "uuid";

test('correct task should be deleted from correct array', () => {
    const startState: TasksStateType = {
        'todolistId1': [
            {id: v1(), title: 'HTML & CSS', isDone: true},
            {id: v1(), title: 'React', isDone: true},
            {id: v1(), title: 'Redux', isDone: true}
        ],
        'todolistId2': [
            {id: v1(), title: 'MacBook', isDone: true},
            {id: v1(), title: 'Milk', isDone: true},
            {id: v1(), title: 'Cookie', isDone: true}
        ]
    };
    const action = RemoveTaskAC('2', 'todolistId2');
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3);
    expect(endState["todolistId2"].length).toBe(2);
    expect(endState["todolist2"].every(t => t.id != "2")).toBeTruthy()
    });





