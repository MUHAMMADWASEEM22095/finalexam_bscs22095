import React from 'react'
import Tasks from '../Components/Tasks'
import { Outlet, Link } from "react-router-dom";

function HandleTask(){

}
export default function TaskPage() {
    return (
        <div>
            <div>
                <Tasks/>
            </div>
            <div className='Button'>
                <Link to="/TaskAdd">
                    <button type="button" onClick={HandleTask}>ADD TASK</button>
                </Link>
            </div>
        </div>
        
    )
}
