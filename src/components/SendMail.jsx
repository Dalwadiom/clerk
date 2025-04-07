import React from 'react'
import { useUser } from '@clerk/clerk-react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';

function SendMail() {
    const { isLoaded, isSignedIn, user } = useUser()
    const [message, setMessage] = useState("")
    if (!isLoaded) {
        return <h1>Loadding</h1>
    }

    if (!isSignedIn) {
        return <h1>Pleas sign in</h1>
    }

    async function handleClick(e) {
        e.preventDefault()
        await emailjs.send("service_qm20u0k", "template_x8jxrxg", { message, to_email: user.primaryEmailAddress.emailAddress }, "1ikkNzWhrukzWtydy")
        alert("send successfully")
    }
    return (
        <div>
            <input type="email" name='email' value={user.primaryEmailAddress.emailAddress} readOnly />
            <input type="text" name='message' onChange={(e) => setMessage(e.target.value)} />
            <button onClick={handleClick}>Send</button>
        </div>
    )
}

export default SendMail
