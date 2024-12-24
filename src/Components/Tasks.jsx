import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function Tasks (task) {
    return (
        <div>
            <div className='Tasks'>
                <h3 className='TasksH'>Task To Complete</h3>
                <ul className='TaskL'>
                    <li className='TaskLI'>
                        <p>{task}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
