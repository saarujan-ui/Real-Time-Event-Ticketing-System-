import React, { useState, useEffect } from "react";
import SlidingPanel from "react-sliding-side-panel";
import Eventheader from "../components/event/eventheader";
import EventCard from "../components/event/eventcard";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import TopNav from "../components/layout/TopNav";
import { FiCalendar, FiMapPin, FiUser } from "react-icons/fi"; // Importing icons
import { FiPlusCircle, FiCamera, FiTruck } from "react-icons/fi"; // Icons from react-icons
import { FaUtensils, FaGamepad } from "react-icons/fa"; // Additional icons from react-icons/fa
import { useLocation } from "react-router-dom";
import "./eventstyle.css";
import axios from "axios";
import { setTicketPrice } from "../Slices/ticketprices";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setBookedtickets } from "../Slices/bookedtickets";
import SockJS from "sockjs-client";
import { Client, over } from "stompjs";
import { useSelector } from "react-redux";

// or for older versions of JavaScript (ES5):
// var Stomp = require('stompjs');
// var stompClient: Client;

function Event() {
  const navigate = useNavigate();
  const updatedtickets = useSelector(
    (state) => state.bookedtickets.bookedtickets
  );
  console.log(updatedtickets, "updatedticketsupdatedtickets");
  const [data, setData] = useState("");
  const userKey = useSelector((state) => state.userId.userId);

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const options = ["one", "two", "three"];
  // const defaultOption = options[0];
  const handleButton = () => {
    // if (userKey) {
    setIsOpen(true);
    // } else {
    //   alert("You need to Signup/Login");
    //   navigate("./signup");
    //   window.location.reload();
    // }
  };
  const eventData = location.state;
  console.log("eventDataeventData", eventData);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const [selectedTicketRate, setSelectedTicketRate] = useState("");

  // Handle dropdown value change
  const handleDropdownChange = (selectedOption) => {
    console.log(selectedOption, "selectedOptiona");
    setSelectedTicketRate(selectedOption.value); // Update the state with the selected ticketRate
  };
  // Function to handle increment
  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  // Function to handle decrement
  const handleDecrement = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0)); // Prevents going below 0
  };
  // const location = useLocation();
  const item = location.state;
  console.log(item, "itemitemitemitemitem");
  // Function to handle direct input change
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(isNaN(newValue) ? 0 : newValue); // Ensure value is a number
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API
        const response = await axios.get(
          `http://localhost:8088/events/${item?.adminId}/${item?.eventId}`
        ); // Example API endpoint
        // console.log(first)
        setData(response.data); // Store response data in state
        dispatch(setTicketPrice(response.data)); // Dispatch the action

        // setLoading(false);  // Set loading to false after data is fetched
      } catch (err) {
        // setError(err.message);  // Capture any error that occurs
        //  setLoading(false);
      }
    };

    fetchData(); // Call fetchData function to initiate the GET request
    // if(item){
    // connect();
    // }

    // connect();
  }, [navigate, location]); // Empty dependency array means this runs once when the component mounts

  const ticketRates =
    data?.ticketDetails?.map((ticket) => {
      return { label: ticket.ticketRate, value: ticket.ticketRate };
    }) || [];

  const defaultOption = ticketRates[0]; // Set the first ticket rate as default, or use another logic

  const handlePayment = async () => {
    const payment = {
      adminId: data?.adminId,
      eventId: data?.eventId,
      ticketRate: selectedTicketRate,
      ticketCount: value,
    };
    console.log(payment, "paymentpaymentss");

    try {
      // Make a GET request to the API
      const response = await axios.post(
        `http://localhost:8088/events/purchase`,
        JSON.stringify(payment),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        //    dispatch(setBookedtickets(bookedDetails)); // Dispatch the action

        navigate("/");
        alert(response.data);
      } else {
        alert("Network Error");
      }
    } catch (err) {
      alert("Network Error", err);
    }
  };

  useEffect(() => {
    const socket = new SockJS("http://localhost:8088/ws");
    const stompClient = over(socket);

    stompClient.connect({}, () => {
    //  setClient(stompClient);
     // setSocketConnected(true); // Indicate that WebSocket is connected

      stompClient.subscribe("/topic/events/" + item?.eventId, (message) => {
        const event = JSON.parse(message.body);
        dispatch(setBookedtickets(event)); // Dispatch the action

        // Dispatch your event data here
        console.log(event);
      });
    }, (error) => {
      console.error("WebSocket Connection Failed:", error);
      alert("Failed to connect to WebSocket.");
    });

    // Cleanup: Disconnect WebSocket when the component unmounts
    // return () => {
    //   if (stompClient) {
    //     stompClient.disconnect(() => {
    //       console.log("WebSocket disconnected");
    //     });
    //   }
    // };
  }, []);

  return (
    <div className="event-page">
      <TopNav />
      <div className="event-header">
        <Eventheader />
      </div>
      <div className="event-main-content">
        <div className="event-card">
          <div className="event-content">
            <h3 className="section-title">{data?.eventName}</h3>

            <div className="section">
              <p className="iconsection">
                <FiCalendar style={{ marginRight: "5px" }} />
                {data?.date}
              </p>

              <p className="iconsection">
                <FiMapPin style={{ marginRight: "5px" }} />
                {data?.place}
              </p>

              <p className="iconsection">
                <FiUser style={{ marginRight: "5px" }} />
                {data?.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="event-container">
        <div className="event-header">
          <h3>More info</h3>
          <p>{data?.description}</p>
          <h3 className="event-title">{data?.eventName}</h3>

          {/* <div> */}
          {/* <FaUtensils className="icon" /> Breakfast / Lunch / Snacks */}
          {/* <h1>Thirimana show</h1>
          </div> */}
          <div>
            {/* <FiPlusCircle className="icon" /> Insurance Cover - Up & Included
            Activities */}
            <h3>Ticket Policy</h3>
          </div>
          <div>
            {/* <FiTruck className="icon" /> Up & Down Transport From Colombo */}
            <p>
              Only the initial email or SMS provided by MyTicketsLK will be
              accepted as proof of purchase, Tickets will not be redeemed for
              any forwarded or screenshots.
            </p>
          </div>
          <div>
            {/* <FiCamera className="icon" /> DSLR Photography */}
            <p>
              Valid NIC or Passport will be required if needed during the
              process of Redeeming
            </p>
          </div>
          {/* <div>
            <FaGamepad className="icon" /> Drone Coverage
          </div> */}

          <div></div>
          {/* <div>
            <p>Pick up Point: Colombo Fort</p>
            <p>Pick up Time: 12.30 AM</p>
            <p>Location: Diyaluma</p>
            <p>Event Start Time: 8.00 AM</p>
            <p>Event Duration: 1 Day</p>
            <p>Weight Limit: 110KG</p>
          </div> */}
        </div>

        <div className="event-card-right">
          <EventCard imageSrc={data?.imagePath} handleButton={handleButton} />
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-400px", // Slide in from the left
          width: "300px",
          height: "100%",
          backgroundColor: "#f4f4f4",
          boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
          transition: "left 0.3s ease-in-out",
          zIndex: 1000,
          padding: "16px",
        }}
      >
        <h2 style={{ margin: "0 0 16px" }}>Ticket Details</h2>
        <p>
          Tickets are not reserved yet. To secure your tickets, click, "Confirm
          tickets"
        </p>
        <h2>Select your ticket price</h2>
        <Dropdown
          options={ticketRates}
          onChange={handleDropdownChange}
          onFocus
          value={selectedTicketRate?.toString()} // Use selectedTicketRate as the value
          placeholder="Select an option"
        />

        <h2>No of Ticekts</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Decrement Button */}

          <button
            onClick={handleDecrement}
            style={{
              padding: "10px",
              backgroundColor: "#FF4D4D",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            -
          </button>

          {/* Input Field */}
          <input
            type="number"
            value={value}
            onChange={handleChange}
            style={{
              width: "60px",
              textAlign: "center",
              padding: "8px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />

          {/* Increment Button */}
          <button
            onClick={handleIncrement}
            style={{
              padding: "10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            +
          </button>
        </div>
        <div
          style={{
            bottom: 60,
            position: "absolute",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <h2>Sub Total</h2>
              <p sty>{value} ticket(s)</p>
            </div>
            <h2>{selectedTicketRate * value} LKR</h2>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#FFFFFF",
              color: "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
          <button
            onClick={handlePayment}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "blue",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginLeft: "20px",
            }}
          >
            Confirm Tickets
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
}

export default Event;
