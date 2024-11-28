import React from 'react';
import Eventheader from '../components/event/eventheader';
import EventCard from '../components/event/eventcard';

import TopNav from '../components/layout/TopNav';
import { FiCalendar, FiMapPin, FiUser } from 'react-icons/fi'; // Importing icons
import { FiPlusCircle, FiCamera, FiTruck } from 'react-icons/fi'; // Icons from react-icons
import { FaUtensils, FaGamepad } from 'react-icons/fa'; // Additional icons from react-icons/fa
import { useLocation } from "react-router-dom";
import './DiyalumaWaterfallAbseiling.css';

function DiyalumaWaterfallAbseiling() {
  
  
  // return (
  //   <div className="event-page">
  //     <TopNav />
  //     <div className="event-header">
  //       <Eventheader />
  //     </div>
  //     <div className="event-main-content">
  //       <div className="event-card">
  //         <div className="event-content">
  //           <h3 className="section-title">Diyaluma Waterfall Abseiling</h3>

  //           <div className="section">
  //             <p className="iconsection">
  //               <FiCalendar style={{ marginRight: '5px' }} />
  //               Saturday, Nov 30 • 08.00 AM IST
  //             </p>

  //             <p className="iconsection">
  //               <FiMapPin style={{ marginRight: '5px' }} />
  //               Diyaluma Waterfall
  //             </p>

  //             <p className="iconsection">
  //               <FiUser style={{ marginRight: '5px' }} />
  //               The Marvel Sri Lanka
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className="event-header">
  //       <h3>More info</h3>
  //       <p>The Marvel Sri Lanka Proudly Presents</p>
  //       <h3 className="event-title">Diyaluma Waterfall Abseiling</h3>

  //       <div>
  //         <FaUtensils className="icon" /> Breakfast / Lunch / Snacks
  //       </div>
  //       <div>
  //         <FiPlusCircle className="icon" /> Insurance Cover - Up & Included
  //         Activities
  //       </div>
  //       <div>
  //         <FiTruck className="icon" /> Up & Down Transport From Colombo
  //       </div>
  //       <div>
  //         <FiCamera className="icon" /> DSLR Photography
  //       </div>
  //       <div>
  //         <FaGamepad className="icon" /> Drone Coverage
  //       </div>

  //       <div></div>
  //       <div>
  //         <p>Pick up Point: Colombo Fort</p>
  //         <p>Pick up Time: 12.30 AM</p>
  //         <p>Location: Diyaluma</p>
  //         <p>Event Start Time: 8.00 AM</p>
  //         <p>Event Duration: 1 Day</p>
  //         <p>Weight Limit: 110KG</p>
  //       </div>

  //       <EventCard />
  //     </div>
  //   </div>
  // );
  const location = useLocation();

  const eventData = location.state;
  console.log("eventDataeventData",eventData)

  return (
    <div className="event-page">
      <TopNav />
      <div className="event-header">
        <Eventheader />
      </div>
      <div className="event-main-content">
        <div className="event-card">
          <div className="event-content">
            <h3 className="section-title">{eventData?.title}</h3>

            <div className="section">
              <p className="iconsection">
                <FiCalendar style={{ marginRight: '5px' }} />
                Saturday, Nov 30 • 08.00 AM IST
              </p>

              <p className="iconsection">
                <FiMapPin style={{ marginRight: '5px' }} />
                Diyaluma Waterfall
              </p>

              <p className="iconsection">
                <FiUser style={{ marginRight: '5px' }} />
                The Marvel Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="event-container">
        <div className="event-header">
          <h3>More info</h3>
          <p>The Marvel Sri Lanka Proudly Presents</p>
          <h3 className="event-title">Diyaluma Waterfall Abseiling</h3>

          <div>
            <FaUtensils className="icon" /> Breakfast / Lunch / Snacks
          </div>
          <div>
            <FiPlusCircle className="icon" /> Insurance Cover - Up & Included
            Activities
          </div>
          <div>
            <FiTruck className="icon" /> Up & Down Transport From Colombo
          </div>
          <div>
            <FiCamera className="icon" /> DSLR Photography
          </div>
          <div>
            <FaGamepad className="icon" /> Drone Coverage
          </div>

          <div></div>
          <div>
            <p>Pick up Point: Colombo Fort</p>
            <p>Pick up Time: 12.30 AM</p>
            <p>Location: Diyaluma</p>
            <p>Event Start Time: 8.00 AM</p>
            <p>Event Duration: 1 Day</p>
            <p>Weight Limit: 110KG</p>
          </div>
        </div>


        <div className="event-card-right">
        <EventCard imageSrc={eventData?.imgSrc} />
        </div>
      </div>
    </div>
  );


}

export default DiyalumaWaterfallAbseiling;
