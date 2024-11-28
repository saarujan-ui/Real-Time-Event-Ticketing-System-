// import React from 'react';
// import image from '../../assets/images.jpeg';

// const EventCard = () => {
//   return (
//     <div className="modal-overlay">
//       <div style={{ backgroundColor: 'red', width: '25%', padding: '16px' }}>
//         {/* Image placed inside the red div */}
//         <img
//           src={image}
//           alt="Diyaluma Waterfall"
//           style={{ width: '100%', borderRadius: '8px' }} // Optional styling for better appearance
//         />
//         {/* Event details below the image */}
//         <div className="event-details" style={{ marginTop: '16px' }}>
//           <div className="ticket-info">
//             <h4>Ticket Prices</h4>
//             <div className="ticket-prices">
//               <p>
//                 <span className="label">Per Person With transport:</span>
//                 <span className="price">22,500 LKR</span>
//               </p>
//               <p>
//                 <span className="label">Per Person Without transport:</span>
//                 <span className="price">21,500 LKR</span>
//               </p>
//             </div>
//             <button className="buy-tickets-btn">Buy Tickets</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventCard;


// import React from 'react';
// import image from '../../assets/images.jpeg';

// const EventCard = () => {
//   return (
//     <div
//       className="event-card"
//       style={{
//         backgroundColor: '#FFFFFF',
//         borderRadius: '12px',
//         boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.1)',
//         maxWidth: '400px',
//         overflow: 'hidden',
//         fontFamily: 'Arial, sans-serif',
//         // margin: 'auto',
//       }}
//     >

//       <img
//         src={image}
//         alt="Diyaluma Waterfall"
//         style={{ width: '100%', objectFit: 'cover', height: '200px', borderRadius:15 }}
//       />

//       {/* Details Section */}
//       <div style={{ padding: '16px' }}>
//         {/* Title */}
//         <h3
//           style={{
//             fontSize: '18px',
//             fontWeight: 'bold',
//             marginBottom: '8px',
//           }}
//         >
//           Ticket Prices
//         </h3>

//         {/* Ticket Information */}
//         <div style={{ marginBottom: '16px' }}>
//           <p
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               fontSize: '14px',
//               margin: '8px 0',
//             }}
//           >
//             <span>Per Person With transport:</span>
//             <span style={{ fontWeight: 'bold', color: '#007BFF' }}>22,500 LKR</span>
//           </p>
//           <p
//             style={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               fontSize: '14px',
//               margin: '8px 0',
//             }}
//           >
//             <span>Per Person Without transport:</span>
//             <span style={{ fontWeight: 'bold', color: '#007BFF' }}>21,500 LKR</span>
//           </p>
//         </div>

    
//         <button
//           style={{
//             display: 'block',
//             width: '100%',
//             padding: '10px 0',
//             backgroundColor: '#007BFF',
//             color: '#FFFFFF',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '16px',
//             fontWeight: 'bold',
//             cursor: 'pointer',
//             textAlign: 'center',
//           }}
//         >
//           Buy Tickets
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EventCard;


import React from 'react';

const EventCard = ({ imageSrc }) => {
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
        src={imageSrc} // Use the imageSrc prop here
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
            <span>Per Person With transport:</span>
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
            <span>Per Person Without transport:</span>
            <span style={{ fontWeight: 'bold', color: '#007BFF' }}>21,500 LKR</span>
          </p>
        </div>

        {/* Buy Tickets Button */}
        <button
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
