import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      window.location.reload(false);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format!";
    }
    if (!values.message) {
      errors.message = "message is required";
    }
    return errors;
  };
  return (
    <>
      <div className="contactContainer">
        <form onSubmit={handleSubmit}>
          <h1>Contact Us</h1>

          <div className="contactForm">
            <div className="contactField">
              <label>Nama</label>
              <input
                type="text"
                name="name"
                placeholder="nama"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.name}</p>
            <div className="contactField">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="contactField">
              <label>Message</label>
              <textarea
                type="text"
                name="message"
                placeholder="message"
                style={{height:"200px"}}
                value={formValues.message}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.message}</p>
            <button className="contactButton">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
