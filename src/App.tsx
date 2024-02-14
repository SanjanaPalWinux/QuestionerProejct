import React from "react";
import "./App.css";
import AppRoute from "./routes/route";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
        ></ToastContainer>
        <AppRoute />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
