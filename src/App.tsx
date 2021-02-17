import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist/Todolist";

function App() {
    return (
        <div className="App">
            <div>
                <Todolist/>
                <Todolist/>
                <Todolist/>
                <Todolist/>
            </div>
        </div>
    );
}

export default App;





