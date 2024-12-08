
import React from 'react';
import {  Route, Routes,  } from 'react-router-dom'; // Import BrowserRouter
// import { isAuthorized as useAuthorized } from 'selectors/auth';
import Home from '../pages/Home'
import Aboutus from '../pages/aboutus'

import * as routes from "../constants/routes";
// import Mytickets from '../pages/Mytickets';
import { LazyPage } from '../components/LazyPage';
import EventUpdate from '../pages/eventUpdate';
import Event from '../pages/Event';


const Router = () => {
  //   const isAuthorized = useSelector(useAuthorized);

  //   const PrivateRoute = ({ children }: any) => {
  //     if (!isAuthorized) {
  //       return <Navigate to={routes.LOGIN} state={{ from: location }} replace />;
  //     }
  //     return children;
  //   };

  return (
    <React.Fragment>
      {/* // <BrowserRouter> Wrap everything in BrowserRouter */}
      <Routes>
        <Route
          element={
            <>
              {/* <Layout /> */}
            </>
          }
        >
          {/* <Route
            path={routes.DASHBOARD}
            element={<LazyPage page="Dashboard" />}
          /> */}
    
          {/* Example of a LazyPage route */}
          {/* <Route path={routes.LOGIN} element={<LazyPage page="Suppliers/Create" />} /> */}
        </Route>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.EVENT} element={<Event/>} />
        <Route path={routes.EVENTUPDATE} element={<EventUpdate/>} />
        <Route path={routes.EVENTUPDATE} element={<EventUpdate/>} />

        <Route path={routes.LOGIN} element={<LazyPage page="Login" />} />
        <Route path={routes.SIGNUP} element={<LazyPage page="Signup" />} />
        <Route path={routes.ABOUTUS} element={<Aboutus/>} />

        {/* <Route path={routes.MYTICKETS} element={<Mytickets/>} /> */}

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* // </BrowserRouter> */}
    </React.Fragment>
  );
};

export default Router;
