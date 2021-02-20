import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";


function App() {

    let [tasks, setTasks] = useState([
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true },
            { id: 3, title: "ReactJS", isDone: false },
        ]
    )

    function removeTask(id: number) {
        tasks = tasks.filter(t => t.id !== id)
        setTasks(tasks)
    }

    return (
        <div className="App">
            <div>
                <Todolist
                    title="What to learn"
                    tasks={tasks}
                    removeTask={removeTask}
                />
            </div>
        </div>
    );
}

export default App;





