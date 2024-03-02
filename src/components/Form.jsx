import React, { useState } from 'react';
import axios from 'axios';


function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    
    const [errors, setErrors] = useState({});
    

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
    };
    const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) {
        errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
     // You can add more validation rules for other fields as needed
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {

      try {
        const response = await axios.post('http://localhost:8000/postcontact/', formData);
        console.log('Form submitted:', response.data);
        // Assuming the form submission was successful, you can handle it here
        alert('Message sent Successfully');
        // page reload
        window.location.reload();
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error accordingly
      }
    }
  };

  return (
    <>
     <form action="" onSubmit={handleSubmit}>
            <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
              <input type="text" name='name' value={formData.name} className={`form-control ${errors.name && 'is-invalid'}`} placeholder='Name'
            onChange={handleChange}/>
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="flex-grow-1 ms-2">
              <input type="email" name='email' value={formData.email} className={`form-control ${errors.email && 'is-invalid'}`} placeholder='Email'
            onChange={handleChange}/>
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </div>

            <div className="d-flex mt-3">
              <div className="flex-grow-1 me-2">
              <input type="text" className="form-control" name='phone' value={formData.phone} placeholder='Phone (Optional)' 
            onChange={handleChange} />
              </div>
              <div className="flex-grow-1 ms-2">
              <input type="text" className={`form-control ${errors.message && 'is-invalid'}`}  
            onChange={handleChange} name="subject" value={formData.subject} placeholder='Subject' />
            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
              </div>
            </div>

            <textarea name="message" id="" className={`form-control mt-3 ${errors.message && 'is-invalid'}`} placeholder='Enter your message here' cols="30" rows="10" 
        onChange={handleChange} value={formData.message}></textarea>
         {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            <div className="mt-3">
              <button className="btn btn-danger">Submit</button>
            </div>
            </form>


    </>
  )
}

export default Form