import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from './tasks-reducer';
import {TasksStateType} from '../App';


let startState: TasksStateType
beforeEach( () => {
  startState = {
        'todolistId1': [
            {id: '1', title: 'HTML & CSS', isDone: false},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'Redux', isDone: false}
        ],
        'todolistId2': [
            {id: '1', title: 'MacBook', isDone: false},
            {id: '2', title: 'Milk', isDone: true},
            {id: '3', title: 'Cookie', isDone: false}
        ]
    };
})
test('correct task should be deleted from correct array', () => {
    const action = removeTaskAC('2', 'todolistId2');
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        'todolistId1': [
            {id: '1', title: 'HTML & CSS', isDone: false},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'Redux', isDone: false}
        ],
        'todolistId2': [
            {id: '1', title: 'MacBook', isDone: false},
            {id: '3', title: 'Cookie', isDone: false}
        ]
    });

});
test('correct task should be added to correct array', () => {
    const action = addTaskAC("juice", "todolistId2");
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        'todolistId1': [
            {id: '1', title: 'HTML & CSS', isDone: false},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'Redux', isDone: false}
        ],
        'todolistId2': [
            {id: action.taskId, title: 'juice', isDone: false},
            {id: '1', title: 'MacBook', isDone: false},
            {id: '2', title: 'Milk', isDone: true},
            {id: '3', title: 'Cookie', isDone: false}
        ]
    });
})
test('status of specified task should be changed', () => {
    const action = changeTaskStatusAC("2", false, "todolistId2");
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        'todolistId1': [
            {id: '1', title: 'HTML & CSS', isDone: false},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'Redux', isDone: false}
        ],
        'todolistId2': [
            {id: '1', title: 'MacBook', isDone: false},
            {id: '2', title: 'Milk', isDone: false},
            {id: '3', title: 'Cookie', isDone: false}
        ]
    });
});
test('title of specified task should be changed', () => {
    const action = changeTaskTitleAC("2", "juice", "todolistId2");
    const endState = tasksReducer(startState, action)

    expect(endState).toEqual({
        'todolistId1': [
            {id: '1', title: 'HTML & CSS', isDone: false},
            {id: '2', title: 'React', isDone: true},
            {id: '3', title: 'Redux', isDone: false}
        ],
        'todolistId2': [
            {id: '1', title: 'MacBook', isDone: false},
            {id: '2', title: 'juice', isDone: true},
            {id: '3', title: 'Cookie', isDone: false}
        ]
    });
})








