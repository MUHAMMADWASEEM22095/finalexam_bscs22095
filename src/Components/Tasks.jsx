import React from 'react'

function HandleTask(){

}


export default function Tasks () {
    return (
        <div>
            <div className='Tasks'>
                <h3 className='TasksH'>Task To Complete</h3>
                <ul className='TaskL'>
                    <li className='TaskLI'>
                        <p>TASK 1</p>
                    </li>
                </ul>
            </div>
            <div className='Button'> 
                <button type="button" onClick={HandleTask}>ADD TASK</button>
            </div>
        </div>
    )
}
