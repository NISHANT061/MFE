import React from "react";
import  {BrowserRouter}  from "react-router-dom";
import MakrketingApp from "./components/marketingApp";
import Header from "./components/Header";

export default () => {
  return (<BrowserRouter>
    <div>
      <Header />
      <MakrketingApp />
    </div>
  </BrowserRouter>);
};
