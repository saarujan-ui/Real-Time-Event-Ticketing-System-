import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';
import image from '../../Assets/images.jpeg';

const EventCard = ({ handleButton }) => {

  const [openPanel, setOpenPanel] = useState(false);

  return (
    <div
      className="event-card"
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Image Section */}
      <img
        src={image} // Use the imageSrc prop here
        alt="Event"
        style={{ width: '100%', objectFit: 'cover', height: '200px', borderRadius: 15 }}
      />

      {/* Details Section */}
      <div style={{ padding: '16px' }}>
        {/* Title */}
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '8px',
          }}
        >
          Ticket Prices
        </h3>

        {/* Ticket Information */}
        <div style={{ marginBottom: '16px' }}>
          <p
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '14px',
              margin: '8px 0',
            }}
          >
            <span>10 000 LKR:</span>
            <span style={{ fontWeight: 'bold', color: '#007BFF' }}>22,500 LKR</span>
          </p>
          <p
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '14px',
              margin: '8px 0',
            }}
          >
            <span>5000 LKR:</span>
            <span style={{ fontWeight: 'bold', color: '#007BFF' }}>21,500 LKR</span>
          </p>
        </div>

        {/* Buy Tickets Button */}
        <button onClick={() => handleButton()}
          style={{
            display: 'block',
            width: '100%',
            padding: '10px 0',
            backgroundColor: '#007BFF',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          Buy Tickets
        </button>
        
      </div>
     
    </div>
    
  );
};

export default EventCard;
