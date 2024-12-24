import React from 'react'
import { useState, ChangeEvent } from "react"

export default function Login() {
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const namechange = event =>{
        setInputName(event.target.value)
    }

    const emailchange = event =>{
        setInputEmail(event.target.value)
    }

    const passwordchange = event =>{
        setInputPassword(event.target.value)
    }

    const click = color =>{
        color.preventDefault();
        alert(inputName)
        alert(inputEmail)
        alert(inputPassword)
    }
    
    return (
        <div className='Login'>
            <form action="" method='post'>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Name' onChange={namechange} value={inputName}/>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Enter Email' onChange={emailchange} value={inputEmail}/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Name' onChange={passwordchange} value={inputPassword}/>
                <button type='sumbit' onClick={click}>Login</button>
            </form>
        </div>
    )
}
