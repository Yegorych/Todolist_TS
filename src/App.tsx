import React from 'react';
import './App.css';
import {Todolist} from "./Todolist/Todolist";


function App() {

    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
    ]

    return (
        <div className="App">
            <div>
                <Todolist title="What to learn" tasks={tasks} />
            </div>
        </div>
    );
}

export default App;





