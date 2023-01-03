import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to="/pomodoro-timer">Pomodoro Timer </Link>
      <Link to="/cart">Restaurant Cart</Link>
      <Link to="/piano">Piano</Link>
      <Link to="/keyboard">Keyboard</Link>
      <Link to="/podcast-checkbox">Podcast Checkbox</Link>
      <Link to="/price-slider">Price Slider</Link>
      <Link to="/tip-calculator">Tip Calculator</Link>
      <Link to="/weather">Weather App</Link>
      <Link to="/carousel">Image Carousel</Link>
      <Link to="/otp">OTP Screen</Link>
      <Link to="/faq">FAQ Screen</Link>
      <Link to="/rock-paper-scissor">Rock Paper Scissor</Link>
      <Link to="/clue-game">Clue Game</Link>
      <Link to="/calender">Calender Picker</Link>
      <Link to='/star-rating'>Star Rating</Link>
      <Link to='/smart-sidebar'>Smart Sidebar</Link>
    </div>
  );
};

export default Home;
