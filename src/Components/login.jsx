import React from 'react'

export default function Login() {
    return (
        <div className='Login'>
            <form action="">
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Name' /> 
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Enter email' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter Password' />
            </form>
        </div>
    )
}
