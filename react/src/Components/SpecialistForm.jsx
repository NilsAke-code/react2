import React, { useState } from 'react'

const SpecialistForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    specialist: '',
  });
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')
  const specialists = [
    'Cardiologist',
    'Dermatologist',
    'Neurologist',
    'Orthopedist',
    'Pediatrician',
    'Psychiatrist',
    'Oncologist',
    'Radiologist'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required'
    }
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    if (!formData.specialist) {
      newErrors.specialist = 'Please select a specialist'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setSuccessMessage('Your form has been submitted successfully!')
      setFormData({
        fullName: '',
        email: '',
        specialist: '',
      })
      setTimeout(() => setSuccessMessage(''), 7000)
    }
  }

    
  return (
    <div className="rightside">
      <form noValidate onSubmit={handleSubmit}>
        <div className="headline">
          <h1>Get Online Consultation</h1>
        </div>
        <div className="body">
        {successMessage && <p className="success-message">{successMessage}</p>}

            <p>Full name</p>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className={`form-input ${errors.fullName ? 'input-error' : ''}`}
            />
            {errors.fullName && <span className="error-text">{errors.fullName}</span>}

            <p>Email address</p>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'input-error' : ''}`}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
            <p>Specialist</p>
            <div className="input-container">
              <select
                name="specialist"
                value={formData.specialist}
                onChange={handleChange}
                className={`form-input ${errors.specialist ? 'input-error' : ''}`}
              >
                <option value="">Select a specialist</option>
                {specialists.map((specialist, index) => (
                  <option key={index} value={specialist}>
                    {specialist}
                  </option>
                ))}
              </select>
            </div>

            {errors.specialist && <span className="error-text">{errors.specialist}</span>}

            <button type="submit">Make an appointment</button>
          </div>

      </form>
    </div>
) }



export default SpecialistForm;