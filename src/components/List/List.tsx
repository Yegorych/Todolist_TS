import React from 'react'

export function List() {
    return (
        <div className="list">
                <div className="List-task">
                    <input type="checkbox" checked={true}/>
                    <span>CSS</span>
                </div>
                <div className="List-task">
                    <input type="checkbox" checked={false}/>
                    <span>JS</span>
                </div>
                <div className="List-task">
                    <input type="checkbox" checked={false}/>
                    <span>ReactJS</span>
                </div>
                <div className="List-task">
                    <input type="checkbox" checked={true}/>
                    <span>Patterns</span>
                </div>
            </div>
    )
}