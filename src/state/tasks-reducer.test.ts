import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from './tasks-reducer';
import {TasksStateType} from '../App';
import {AddTodolistAC, RemoveTodolistAC} from "./todolists-reducer";


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

test('new array should be added when new todolist is added', () => {
    const action = AddTodolistAC("new todolist");
    const endState = tasksReducer(startState, action)


    const keys = Object.keys(endState);
    const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    if (!newKey) {
        throw Error("new key should be added")
    }

    expect(keys.length).toBe(3);
    expect(endState[newKey]).toEqual([]);
});
test('property with todolistId should be deleted', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "2", title: "milk", isDone: true },
            { id: "3", title: "tea", isDone: false }
        ]
    };

    const action = RemoveTodolistAC("todolistId2");
    const endState = tasksReducer(startState, action)
    const keys = Object.keys(endState);

    expect(keys.length).toBe(1);
    expect(endState["todolistId2"]).not.toBeDefined();
});










