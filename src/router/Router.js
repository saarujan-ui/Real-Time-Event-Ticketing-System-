
import React from 'react';
import {  Route, Routes,  } from 'react-router-dom'; // Import BrowserRouter
// import { isAuthorized as useAuthorized } from 'selectors/auth';

import * as routes from "../constants/routes";

import { LazyPage } from '../components/LazyPage';


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
        <Route path={routes.HOME} element={<LazyPage page="Home" />} />
        <Route path={routes.EVENT} element={<LazyPage page="Event" />} />

        <Route path={routes.LOGIN} element={<LazyPage page="Login" />} />
        <Route path={routes.SIGNUP} element={<LazyPage page="Signup" />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* // </BrowserRouter> */}
    </React.Fragment>
  );
};

export default Router;
