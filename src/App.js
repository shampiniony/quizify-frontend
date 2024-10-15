import React from "react";
import "./Styles/App.css";
import Header from "./components/Header";
import Body from "./components/MainBody";
import EmailForm from "./components/EmailForm";
import HowItWorks from "./components/HowItWorks";
import ForWhom from "./components/ForWhom";
import Footer from "./components/Footer";
import MetaTags from "./components/MetaTags";


function App() {
  return (
    <div className="App">
      <MetaTags />
      <Header />
      <Body />
      <EmailForm />
      <HowItWorks />
      <ForWhom />
      <Footer />
    </div>
  );
}

export default App;
