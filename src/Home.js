import React from "react";
import { Link } from "react-router-dom";

// Images
import TimerImage from "./assets/main/icons/timer.svg";
import CartImage from "./assets/main/icons/cart.svg";
import PianoImage from "./assets/main/icons/piano.svg";
import KeyboardImage from "./assets/main/icons/keyboard.svg";
import CheckboxImage from "./assets/main/icons/checkbox.svg";
import SliderImage from "./assets/main/icons/price-slider.svg";
import CalculatorImage from "./assets/main/icons/tip-calculator.svg";
import WeatherImage from "./assets/main/icons/weather.svg";
import ImageCarousel from "./assets/main/icons/carousel.svg";
import OTPImage from "./assets/main/icons/otp.svg";
import FAQImage from "./assets/main/icons/faq.svg";
import GameImage from "./assets/main/icons/game.svg";
import ClueGame from "./assets/main/icons/magnifier.svg";
import CalenderImage from "./assets/main/icons/calender.svg";
import RatingImage from "./assets/main/icons/rating.svg";
import SideBarImage from "./assets/main/icons/sidebar.svg";
import PasswordGenerator from "./assets/main/icons/password-generator.svg";
//
const Home = () => {
  const items = [
    {
      id: 1,
      name: "Pomodoro Timer",
      image: TimerImage,
      navigationPath: "/pomodoro-timer",
    },
    {
      id: 2,
      name: "Restaurant Cart",
      image: CartImage,
      navigationPath: "/cart",
    },
    {
      id: 3,
      name: "Piano",
      image: PianoImage,
      navigationPath: "/piano",
    },
    {
      id: 4,
      name: "Keyboard",
      image: KeyboardImage,
      navigationPath: "/keyboard",
    },
    {
      id: 5,
      name: "MultiSelect Checkbox",
      image: CheckboxImage,
      navigationPath: "/podcast-checkbox",
    },
    {
      id: 6,
      name: "Price Slider",
      image: SliderImage,
      navigationPath: "/price-slider",
    },
    {
      id: 7,
      name: "Tip Calculator",
      image: CalculatorImage,
      navigationPath: "/tip-calculator",
    },
    {
      id: 8,
      name: "Weather App",
      image: WeatherImage,
      navigationPath: "/weather",
    },
    {
      id: 9,
      name: "Image Carousel",
      image: ImageCarousel,
      navigationPath: "/carousel",
    },
    {
      id: 10,
      name: "OTP Screen",
      image: OTPImage,
      navigationPath: "/otp",
    },

    {
      id: 12,
      name: "FAQ Page",
      image: FAQImage,
      navigationPath: "/faq",
    },
    {
      id: 13,
      name: "Rock Paper Scissor",
      image: GameImage,
      navigationPath: "/rock-paper-scissor",
    },
    {
      id: 14,
      name: "Clue Modal",
      image: ClueGame,
      navigationPath: "/clue-game",
    },
    {
      id: 15,
      name: "Calender",
      image: CalenderImage,
      navigationPath: "/calender",
    },
    {
      id: 16,
      name: "Star Rating",
      image: RatingImage,
      navigationPath: "/star-rating",
    },
    {
      id: 17,
      name: "Smart Sidebar",
      image: SideBarImage,
      navigationPath: "/smart-sidebar",
    },
    {
      id: 18,
      name: "Password Generator",
      image: PasswordGenerator,
      navigationPath: "/password-generator",
    },
  ];
  return (
    <div className="navigation-wrapper">
      <h1>Advent of CSS & JS</h1>
      <div className="navigation-items-wrapper">
        {items.map(({ id, name, image, navigationPath }) => (
          <Link to={navigationPath} key={id}>
            <div className="navigation-item">
              <img src={image} alt={name} />
              <h3>{name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
