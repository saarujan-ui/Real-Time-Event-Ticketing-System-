import React, { useState ,useEffect} from "react";
import TopNav from "../components/layout/TopNav";
import Footer from "../components/layout/footer";
import tickets from "../Assets/tickets.png"; // Tell webpack this JS file uses this image
import { Link, useNavigate } from "react-router-dom";
import SearchInput from "../components/searchInput";
import "./home.css"; // Optional: If you want to use external CSS
import "./PopupForm.css"; // Import the CSS file

// import { LoadMoreButton } from "../components/common";
// import {
//   BannerOne,
//   BannerThree,
//   BannerTwo,
//   ProductsList,
//   SubNav,
//   TopPicks,
//   TwoAds,
// } from "../components/HomePage";
// import { Footer, MiddleNav, TopNav } from "../components/layout";
// import { useSelector } from "react-redux";
// import { RootState } from "../redux/store";
// import RecommendedProducts from "../components/common/RecommendedProducts";
// import { getFilterProducts } from "../api/products";
import { Input, Card, Button } from "antd";
// import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import PopupForm from '../components/form';
import axios from 'axios';

const { Search } = Input;
const { Meta } = Card;

const Home = () => {
  const navigate = useNavigate();
  const Role = useSelector((state) => state.role.role);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);

  const handleOpen = () => {
    //setIsOpen(true);
    navigate('eventupdate')
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
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API
        const response = await axios.get('http://localhost:8088/events/all'); // Example API endpoint
       // console.log(first)
        setData(response.data);  // Store response data in state
       // setLoading(false);  // Set loading to false after data is fetched
      } catch (err) {
       // setError(err.message);  // Capture any error that occurs
      //  setLoading(false);
      }
    };

    fetchData();  
  }, []);  

 

  const handleEventClick = (item) => {
    navigate("/event", { state: item });
    // e.preventDefault();
  //  window.location.reload();
  };
  const handleSearch = () => {
  //  navigate("/event", { state: item });
    // e.preventDefault();
  //  window.location.reload();
  };

  return (
    <>
      <TopNav />
      {/*header section*/}
      <div className="home_header">
        <div className="home_search">
          <h1>Let's book your ticket</h1>
          <h2>Discover your favorite entertainment right here</h2>
          <div style={{ marginTop: 40 }}>
            <SearchInput handleSearch={handleSearch}/>
          </div>
        </div>
        <div className="glowing-div">
          <img src={tickets} alt="Logo" width={500} height={200} />
        </div>
      </div>
   
      <div>
      {Role === 'ADMIN' &&
        <Button
          style={{
            marginTop: "20px",
            width: "20%",
            marginLeft: "2%",
            backgroundColor: "red",
            //  color: "red",
          }}
           onClick={() => handleOpen()}
         
        >
          Update your events
        </Button>
}
      </div>
      <h2 style={{paddingLeft:30}}>All Events</h2>

      <div className="event-section">
        {data.map((item) => (
          <div style={styles.card}>
            {/* Image Section */}
            <img
              src={item?.imageUrl}
              alt="Event"
              style={styles.image}
            />

            {/* Details Section */}
            <div style={styles.details}>
              <h2 style={styles.title}>{item.name}</h2>

              {/* Date and Time */}
              <div style={styles.infoRow}>
                <span style={styles.icon}>📅</span>
                <span>{item.date}</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.icon}>⏰</span>
                <span>{item.time}</span>
              </div>

              {/* Location */}
              <div style={styles.infoRow}>
                <span style={styles.icon}>📍</span>
                <span>{item.venue}</span>
              </div>
              {Role !== 'ADMIN' &&
              <Button
                onClick={() => handleEventClick(item)}
                className="booking-button"
                type="primary"
              >
                Book Now
              </Button>}
            </div>
          </div>
        ))}
      </div>
      {Role !== 'ADMIN' &&

      <div 
       style={{
        alignItems: "flex-end",
        justifyContent: "flex-end",
        position: "relative",
        padding: 20
       }}>
       
      </div>
}
      <div
        style={{
          alignItems: "flex-end",
          justifyContent: "flex-end",
          position: "relative",
          paddingTop: 20,
        }}
      >
        <Footer />
      </div>
  
    </>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "column", // Makes the card content stack vertically
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px", // Portrait width
    margin: "20px auto",
    backgroundColor: "#fff",
  },
  image: {
    width: "250px", // Image takes full card width
    height: "200px", // Adjust height for portrait orientation
    objectFit: "cover",
  },
  details: {
    padding: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "8px", // Space between rows
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  infoRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#555",
  },
  icon: {
    fontSize: "18px",
    color: "#007BFF",
  },
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    marginTop:'50px',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  blueText: { color: 'blue' },
  blackText: { color: 'black' },
 
};

export default Home;
