import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'

export default function TaskEdit() {
    const [inputTask, setInputTask] = useState('')

    const addtask = event => {
        setInputTask(event.target.value)
    }

    const click = color => {
        color.preventDefault();
        alert(inputTask)
    }

    return (
        <div className='EditDiv'>
            <form action="">
                <div className='input-group'>
                    <label htmlFor="">ENTER NEW TASK</label>
                    <input type="text" placeholder='New Task' onChange={addtask} value={inputTask} />
                    <button type='sumbit' onClick={click}>Add</button>
                </div>
            </form>
        </div>
    )
}
