import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <div>
                <Header/>
                <Todolist/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;



function Todolist() {
    return (
        <div className="todoList">
            <div className="todoList-tasks">
                <div className="todoList-task">
                    <input type="checkbox" checked={true}/>
                    <span>CSS</span>
                </div>
                <div className="todoList-task">
                    <input type="checkbox" checked={false}/>
                    <span>JS</span>
                </div>
                <div className="todoList-task">
                    <input type="checkbox" checked={false}/>
                    <span>ReactJS</span>
                </div>
                <div className="todoList-task">
                    <input type="checkbox" checked={true}/>
                    <span>Patterns</span>
                </div>
            </div>

        </div>
    )
}

function Footer() {
    return (
        <div className="todoList-footer">
            <button>All</button>
            <button>Completed</button>
            <button>Active</button>
        </div>
    )
}