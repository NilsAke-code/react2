import React, { useState } from 'react'
import bellicon from '../assets/bell-icon.svg'

const Subscription = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  const [isError, setIsError] = useState(false)
  const [isHidden, setIsHidden] = useState(false)


  const handleInputChange = (e) => {
    setEmail(e.target.value)
  }

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/
    return emailRegex.test(email)
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setMessage('You have successfully subscribed!')
      setIsError(false)
      setIsHidden(true)
      setEmail('')

     
      setTimeout(() => {
        setMessage(null)
        setIsHidden(false)
      }, 5000)
    } else {
      setMessage('Please enter a valid email address.')
      setIsError(true)
    }
  }

  return (
    <section className="subscription">
        {isHidden ? (
          <div className={`feedback-message success`}>
            {message}
          </div>
        ) : (
          <div className="container">
              <div className="content">
                  <div className="bell-text">
                      <img className="bell" src={bellicon} alt="bell icon" />
                      <h1>Subscribe to our newsletter</h1>
                      <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
                  </div>
                  <h3 className="texttablet">Subscribe to our newsletter</h3>

                  {message && (
                    <div className={`feedback-message ${isError ? 'error' : 'success'}`}>
                      {message}
                    </div>
                  )}

                  <form onSubmit={handleSubscribe} className="input-button">
                      <i className="fa-regular fa-envelope"></i>
                      <input
                        className={`input-errors email ${isError ? 'input-error' : ''}`}
                        type="text"
                        placeholder="Your Email"
                        value={email}
                        onChange={handleInputChange}
                      />
                      <button className="btnsubscribe" type="submit">
                        Subscribe
                      </button>
                  </form>
              </div>
          </div>
        )}
    </section>
  )
}

export default Subscription