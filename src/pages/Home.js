import React, { useEffect } from "react";
import TopNav from "../components/layout/TopNav";
import Footer from "../components/layout/footer";
import tickets from '../Assets/tickets.png'; // Tell webpack this JS file uses this image
import { Link, useNavigate } from 'react-router-dom';

import "./home.css"; // Optional: If you want to use external CSS

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
const { Search } = Input;
const { Meta } = Card;
const Home = () => {
  const navigate = useNavigate();

  const handleEventClick = (item) => {
    navigate("/event", { state: item });
    // e.preventDefault(); 
    window.location.reload(); 
  };

  const dummyData = [
    {
      id: 1,
      title: "Europe Street beat",
      description: "www.instagram.com",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 2,
      title: "Mountain Adventures",
      description: "www.adventures.com",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 3,
      title: "City Nights",
      description: "www.citynights.com",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 4,
      title: "Ocean Breeze",
      description: "www.oceanbreeze.com",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 2,
      title: "Mountain Adventures",
      description: "www.adventures.com",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 3,
      title: "City Nights",
      description: "www.citynights.com",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      id: 4,
      title: "Ocean Breeze",
      description: "www.oceanbreeze.com",
      imgSrc: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ];

  return (
    <>
      <TopNav />
      {/*header section*/}
      <div className="home_header">
        <div className="home_search">
          <h1>Let's book your ticket</h1>
          <h2>Discover your favorite entertainment right here</h2>
          <div className="search-box">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
            />
          </div>
        </div>
        <div className="glowing-div">
        <img src={tickets} alt="Logo" width={500} height={200} />
        </div>
      </div>

      {/*Event section*/}

      <div className="event-section">
        {dummyData.map((item) => (
          <Card
            className="event-card"
            key={item.id}
            hoverable
            cover={<img alt={item.title} src={item.imgSrc} />}
          >
            <Meta title={item.title} description={item.description} />
            <Button  onClick={() => handleEventClick(item)} className='booking-button' type="primary">Book Now</Button>

          </Card>
        ))}
      </div>

      <div style={{alignItems:"flex-end", justifyContent:"flex-end", position:"relative", paddingTop:20}}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
