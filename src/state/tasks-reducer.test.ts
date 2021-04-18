import {AddTaskAC, RemoveTaskAC, tasksReducer} from './tasks-reducer';
import {TasksStateType} from '../App';

test('correct task should be deleted from correct array', () => {
    const startState: TasksStateType = {
        'todolistId1': [
            {id: '1', title: 'HTML & CSS', isDone: true},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'Redux', isDone: true}
        ],
        'todolistId2': [
            {id: '4', title: 'MacBook', isDone: true},
            {id: '5', title: 'Milk', isDone: true},
            {id: '6', title: 'Cookie', isDone: true}
        ]
    };
    const action = RemoveTaskAC('5', 'todolistId2');
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        'todolistId1': [
            {id: '1', title: 'HTML & CSS', isDone: true},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'Redux', isDone: true}
        ],
        'todolistId2': [
            {id: '4', title: 'MacBook', isDone: true},
            {id: '5', title: 'Milk', isDone: true},
            {id: '6', title: 'Cookie', isDone: true}
        ]
    });

});

test('correct task should be added to correct array', () => {
    const startState: TasksStateType = {
        'todolistId1': [
            {id: '1', title: 'HTML & CSS', isDone: true},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'Redux', isDone: true}
        ],
        'todolistId2': [
            {id: '4', title: 'MacBook', isDone: true},
            {id: '5', title: 'Milk', isDone: true},
            {id: '6', title: 'Cookie', isDone: true}
        ]
    };

    const action = AddTaskAC("juice", "todolistId2");
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        'todolistId1': [
            {id: '1', title: 'HTML & CSS', isDone: true},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'Redux', isDone: true}
        ],
        'todolistId2': [
            {id: action.taskId, title: 'juice', isDone: false},
            {id: '4', title: 'MacBook', isDone: true},
            {id: '5', title: 'Milk', isDone: true},
            {id: '6', title: 'Cookie', isDone: true}
        ]
    });
})






