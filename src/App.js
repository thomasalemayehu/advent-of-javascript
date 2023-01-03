import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "./Home";

import "./assets/main/styles/index.css";
import CommerceCart from "./components/day2/CommerceCart";
import Day1Layout from "./components/day1/Day1Layout";

import PomodoroTimer from "./components/day1/PomodoroTimer";
import PomodoroSetting from "./components/day1/PomodoroSetting";
import { Provider } from "react-redux";
import { appStore } from "./app/index";
import Piano from "./components/day3/Piano";
import Keyboard from "./components/day4/Keyboard";
import PodcastCheckbox from "./components/day5/PodcastCheckbox";
import PriceSlider from "./components/day6/PriceSlider";
import TipCalculator from "./components/day7/TipCalculator";
import WeatherApp from "./components/day8/WeatherApp";
import Carousel from "./components/day9/Carousel";
import OTPScreen from "./components/day10/OTPScreen";
import FAQScreen from "./components/day11/FAQScreen";
import { RockPaperScissorScreen } from "./components/day12/RockPaperScissorScreen";
import RockSharedLayout from "./components/day12/RockSharedLayout";
import Result from "./components/day12/Result";
import ClueGame from "./components/day13/ClueGame";
import Calender from "./components/day14/Calender";
import StarRating from "./components/day16/StarRating";
import SmartSidebar from "./components/day17/SmartSidebar";
function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>

            {/* Pomodoro Timer */}
            <Route path="pomodoro-timer">
              <Route path="" element={<Day1Layout />}>
                <Route index element={<PomodoroTimer />} />
                <Route path="settings" element={<PomodoroSetting />} />
              </Route>
            </Route>

            {/* Commerce cart */}
            <Route path="cart">
              <Route index element={<CommerceCart />} />
            </Route>
          </Route>

          {/* Piano */}
          <Route path="piano">
            <Route index element={<Piano />} />
          </Route>

          {/* Keyboard */}
          <Route path="keyboard">
            <Route index element={<Keyboard />} />
          </Route>

          {/* Podcast Checkbox */}
          <Route path="podcast-checkbox">
            <Route index element={<PodcastCheckbox />} />
          </Route>

          {/* Price Slider */}
          <Route path="price-slider">
            <Route index element={<PriceSlider />} />
          </Route>

          {/* Tip Calculator */}
          <Route path="tip-calculator">
            <Route index element={<TipCalculator />} />
          </Route>

          {/* Weather App */}
          <Route path="weather">
            <Route index element={<WeatherApp />} />
          </Route>

          {/* Image Carousel */}
          <Route path="carousel">
            <Route index element={<Carousel />} />
          </Route>

          {/* OTP Screen */}
          <Route path="otp">
            <Route index element={<OTPScreen />} />
          </Route>

          {/* FAQ Screen */}
          <Route path="faq">
            <Route index element={<FAQScreen />} />
          </Route>

          {/* Rock Paper Scissor */}
          <Route path="rock-paper-scissor">
            <Route path="" element={<RockSharedLayout />}>
              <Route index element={<RockPaperScissorScreen />} />
              <Route path=":result" element={<Result />} />
            </Route>
          </Route>

          {/* Clue Game */}
          <Route path="clue-game">
            <Route index element={<ClueGame />} />
          </Route>

          {/* Calender Picker */}
          <Route path="calender">
            <Route index element={<Calender />} />
          </Route>


          {/* Star Rating */}
          <Route path="star-rating">
            <Route index element={<StarRating />} />
          </Route>

          {/* Smart Sidebar */}
          <Route path="smart-sidebar">
            <Route index element={<SmartSidebar />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
