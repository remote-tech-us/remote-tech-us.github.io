import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react'; // or QRCodeCanvas

const ContactQRForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Combine data into a single string for the QR code
  const qrValue = `Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}`;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Info to QR Code</h2>
      
      {/* Contact Form Fields */}
      <form>
        <div>
          <label>Name: </label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email: </label>
          <input name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Phone: </label>
          <input name="phone" value={formData.phone} onChange={handleChange} />
        </div>
      </form>

      <div style={{ marginTop: '20px' }}>
        <h3>Your QR Code:</h3>
        {/* Render QR code based on form state */}
        {formData.name || formData.email || formData.phone ? (
          <QRCodeSVG 
            value={qrValue} 
            size={200} 
            bgColor={"#ffffff"} 
            fgColor={"#000000"} 
            level={"L"} 
          />
        ) : (
          <p>Enter details above to generate a code.</p>
        )}
      </div>
    </div>
  );
};

export default ContactQRForm;

