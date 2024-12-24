import React from 'react'
import { useState, ChangeEvent } from "react"

export default function Login() {
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const namechange = event => {
        setInputName(event.target.value)
    }

    const emailchange = event => {
        setInputEmail(event.target.value)
    }

    const passwordchange = event => {
        setInputPassword(event.target.value)
    }

    const click = color => {
        color.preventDefault();
        alert(inputName)
        alert(inputEmail)
        alert(inputPassword)
    }

    return (
        <div className="login-container">
            <h2>Login</h2>

            <form >
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={inputEmail}
                        onChange={emailchange}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={inputPassword}
                        onChange={passwordchange}
                        placeholder="Enter your password"
                    />
                </div>

                <button type="submit" className="login-btn" onClick={click}>Login</button>
            </form>
        </div>
    )
}
