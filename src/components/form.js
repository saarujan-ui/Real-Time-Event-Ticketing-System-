import React, { useState } from 'react';
// import './PopupForm.css'; // Import the CSS file

function PopupForm({ title, fields }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and image upload logic here
    console.log(formData);
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Form</button>

      <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={handleClose}>&times;</span>
          <h2>{title}</h2>
          <form onSubmit={handleSubmit}>
            {fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                />
              </div>
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupForm;