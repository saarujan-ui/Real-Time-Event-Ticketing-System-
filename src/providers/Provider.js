import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { MdError } from "react-icons/md";
import store from "../store";
// import { lang, name } from "src/config";

export default function AppProvider({ children }) {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <Helmet>
          {/* <html lang={lang} />a
          <title>{name}</title> */}
        </Helmet>

        <Toaster
          toastOptions={{
            success: {
              className:
                "text-green-900 text-xs font-semibold tracking-widest bg-green-100 w-auto",
              duration: 5000,
            },
            error: {
              className:
                "text-red-900 text-xs font-semibold tracking-widest bg-red-100 w-auto",
              icon: <MdError className="text-red-900 w-6 h-6" />,
              position: "top-right",
              duration: 5000,
            },
          }}
        />

        <BrowserRouter>{children}</BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
}
