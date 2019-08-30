import React from "react";
import "./App.css";
import {connect} from "react-redux";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Body from "./Component/Body/Body";

var App=()=> {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
