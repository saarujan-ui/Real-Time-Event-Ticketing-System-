// import React from 'react';
// import { FaChevronRight, FaHome } from 'react-icons/fa'; // Corrected FaHome import
// import { Link } from 'react-router-dom';
// import './SearchHeader.css';

// const EventHeader = () => {
//   return (
//     <div className="search-header">
//       <nav className="search-header-nav">
//         {/* Home Link */}
//         <Link to="/home" className="search-header-link">
//           <FaHome className="search-header-icon" />
//           Home
//         </Link>

//         {/* Separator */}
//         <FaChevronRight className="search-header-separator" />

//         {/* Events Link */}
//         <Link to="/event" className="search-header-link">
//           Events
//         </Link>

//         {/* Separator */}
//         <FaChevronRight className="search-header-separator" />

//         {/* Current Page */}
//         <span className="search-header-current">
//           Diyaluma Waterfall Abseiling
//         </span>
//       </nav>
//     </div>
//   );
// };

// export default EventHeader;

import React from 'react';
import { FaChevronRight, FaHome } from 'react-icons/fa'; 
import { Link, useNavigate } from 'react-router-dom';
import './SearchHeader.css';

const EventHeader = () => {
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate('/'); 
    window.location.reload();
  };

  
  const handleEventClick = (e) => {
    e.preventDefault(); 
    navigate('/event'); 
    window.location.reload(); 
  };


  return (
    <div className="search-header">
      <nav className="search-header-nav">
        {/* Home Link */}
        <a href="/home" className="search-header-link" onClick={handleHomeClick}>
          <FaHome className="search-header-icon" />
          Home
        </a>

    
        <FaChevronRight className="search-header-separator" />

        <a href="/home" className="search-header-link" onClick={handleEventClick}>

          Events
          </a>


        <FaChevronRight className="search-header-separator" />

   
        <span className="search-header-current">
          Diyaluma Waterfall Abseiling
        </span>
      </nav>
    </div>
  );
};

export default EventHeader;

