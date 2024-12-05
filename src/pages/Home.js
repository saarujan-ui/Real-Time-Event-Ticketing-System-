import React, { useState } from "react";
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

const { Search } = Input;
const { Meta } = Card;

const Home = () => {
  const navigate = useNavigate();
  const Role = useSelector((state) => state.role.role);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

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
 
  const dummyData = [
    {
      id: 1,
      title: "Rhythum Of Rock",
      date: "12.05.2024",
      time: "06.00Pm",
      location: "One Galle face",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 2,
      title: "Mountain Adventures",
      date: "12.05.2024",
      time: "06.00Pm",
      location: "One Galle face",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 3,
      title: "City Nights",
      date: "12.05.2024",
      time: "06.00Pm",
      location: "One Galle face",

      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 4,
      title: "Ocean Breeze",
      date: "12.05.2024",
      time: "06.00Pm",
      location: "One Galle face",

      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 2,
      title: "Mountain Adventures",
      date: "12.05.2024",
      time: "06.00Pm",
      location: "One Galle face",

      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 3,
      title: "City Nights",
      date: "12.05.2024",
      time: "06.00Pm",
      location: "One Galle face",

      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 4,
      title: "Ocean Breeze",
      date: "12.05.2024",
      time: "06.00Pm",
      location: "One Galle face",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ];

  const handleEventClick = (item) => {
    navigate("/event", { state: item });
    // e.preventDefault();
    window.location.reload();
  };

  return (
    <>
      <TopNav />
      {/*header section*/}
      <div className="home_header">
        <div className="home_search">
          <h1>Let's book your ticket</h1>
          <h2>Discover your favorite entertainment right here</h2>
          {/* <div className="search-box">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
            />
          </div> */}
          <div style={{ marginTop: 40 }}>
            <SearchInput />
          </div>
        </div>
        <div className="glowing-div">
          <img src={tickets} alt="Logo" width={500} height={200} />
        </div>
      </div>

      {/*Event section*/}
      {/* <div className="event-section">
            {dummyData.map((item) => (
                <Card
                    className='event-card'
                    key={item.id}
                    hoverable
                    cover={<img alt={item.title} src={item.imgSrc} />}
                >
                    <Meta title={item.title} 
                    description={item.description}
                     />
                    <Button  onClick={() => handleEventClick(item)} className='booking-button' type="primary">Book Now</Button>
                </Card>
            ))}
        </div> */}
   
      <div>
        <Button
          style={{
            marginTop: "20px",
            width: "20%",
            marginLeft: "2%",
            backgroundColor: "red",
            //  color: "red",
          }}
           onClick={() => handleOpen()}
          // className="upload-button"
          //  type="primary"
        >
          Update your events
        </Button>
      </div>
      <div className="event-section">
        {dummyData.map((item) => (
          <div style={styles.card}>
            {/* Image Section */}
            <img
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              alt="Event"
              style={styles.image}
            />

            {/* Details Section */}
            <div style={styles.details}>
              <h2 style={styles.title}>{item.title}</h2>

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
                <span>{item.location}</span>
              </div>
              <Button
                onClick={() => handleEventClick(item)}
                className="booking-button"
                type="primary"
              >
                Book Now
              </Button>
            </div>
          </div>
        ))}
      </div>
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
