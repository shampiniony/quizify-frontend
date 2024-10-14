import React from "react";
import "./Styles/App.css";
import Header from "./components/Header";
import Body from "./components/MainBody";
import EmailForm from "./components/EmailForm";
import HowItWorks from "./components/HowItWorks";
import ForWhom from "./components/ForWhom";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <EmailForm />
      <HowItWorks />
      <ForWhom />
    </div>
  );
}

export default App;
