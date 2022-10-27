import React, { useState } from 'react'

const Contact = () => {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handleMessgaeChange = (e: any) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!email || !message) {
      console.log('all fields are required')
    } else {
      console.log(email)
      console.log(message)
      setEmail('')
      setMessage('')
    }
  }

  return (
    <div className='contact-form-container'>
      <form className='contact-form'>
        <label htmlFor='email'>
          <p>Email</p>
        </label>
        <input 
          className='contact-email-input'
          type='email'
          name='email'
          value={email}
          onChange={(e) => handleEmailChange(e)}
          placeholder='your email'  
        />
        <label htmlFor='message'>
          <p>Your message</p>
        </label>
        <textarea
          className='contact-message-input'
          value={message}
          name='messgae'
          onChange={(e) => handleMessgaeChange(e)}
          placeholder='your message'  
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Contact