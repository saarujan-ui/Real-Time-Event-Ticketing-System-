import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const EventCard = ({ imageSrc, handleButton }) => {
  const [openPanel, setOpenPanel] = useState(false);
  const TicketPrice = useSelector((state) => state.ticketPrice.ticketPrice);
  const updatedtickets = useSelector((state) => state.bookedtickets.bookedtickets);

  const [currentTicketPrice, setCurrentTicketPrice] = useState('');

  useEffect(() => {
     if (TicketPrice) {
      // Update the current ticket price based on the updated tickets
      setCurrentTicketPrice(TicketPrice);
      console.log(currentTicketPrice,'TicketPriceTicketPrice')

      console.log('updatedddd1111')
    }
  }, [TicketPrice]); 

  useEffect(() => {
    console.log(currentTicketPrice,'currentTicketPricesadsa')
      if (updatedtickets) {
       // Update the current ticket price based on the updated tickets
       setCurrentTicketPrice(updatedtickets);
       console.log('updatedddd')
     }
   }, [updatedtickets]); 

  return (
    <div
      className="event-card"
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Image Section */}
      <img
        src={currentTicketPrice?.imagePath || imageSrc} // Use the imagePath from TicketPrice or fallback to passed imageSrc
        alt="Event"
        style={{
          width: "100%",
          objectFit: "cover",
          height: "200px",
          borderRadius: 15,
        }}
      />

      {/* Details Section */}
      <div style={{ padding: "16px" }}>
        {/* Title */}
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          {TicketPrice?.eventName}
        </h3>

        {/* Event Details */}
     

        {/* Ticket Information */}
        <div>
          {currentTicketPrice?.ticketDetails?.map((item, index) => (
            <div key={index} style={{ marginBottom: "16px" }}>
              {/* Ticket category display */}
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "14px",
                  margin: "8px 0",
                }}
              >
                <span>{item.ticketRate} LKR</span>
                <span style={{ fontWeight: "bold", color: "#007BFF" }}>
                  {item.ticketsAvailable} Tickets Available
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* More Info */}
     

        {/* Buy Tickets Button */}
        <button
          onClick={() => handleButton()}
          style={{
            display: "block",
            width: "100%",
            padding: "10px 0",
            backgroundColor: "#007BFF",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default EventCard;
