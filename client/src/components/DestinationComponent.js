// importing React module and the useState hook:

import React, { useState } from "react";
import SearchComponent from "./SearchComponent";
import WeatherDisplay from "./DestinationWeather";
import MapView from "./MapView";
// import HotelFinder from "./DestinationHotel";
// import SelectOptions from "./DestinationSelect";

function DestinationComponent() {
// ####################################################
// here I use useState hook to create a state variable called searchResults. The state variable will hold the results of the search. The function handleSearch will be called when the user choose the diving Region in the search box. It takes the results as the argument and updates the state variable with the results.


  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (results) => {
    setSearchResults(results);
  }

  // The code here is dealing with weather search

  const [cityForWeather, setCityForWeather] = useState("");
  // const [cityForHotels, setCityForHotels] = useState("");

  const handleWeatherSubmit = (e) => {
    // e.preventDefault();
    setCityForWeather(cityForWeather);


  };

  // const handleHotelSubmit = (e) => {
  //   e.preventDefault();
  //   setCityForHotels(cityForHotels);
  // };

  return (
    <div className="App">
      <div className="Recommendation system">
        {/* ################ */}
        {/* use return statement to define what this component will render to the
        screen. So here shows the description that tell user to search their scuba diving destination, and i use map function to show the options of diving Region. */}

        <h2>Search Your Destination</h2>
        <SearchComponent onSearch={handleSearch} />
        <ul>
          {searchResults.map((item) => (
            <li key={item._id}>
              <h3>{item.diveRegion}</h3>
              <p>{item.diveArea}</p>
            </li>
          ))}
        </ul>
      </div>
      {/* 
      <div className="Flight Ticket">
        <h2>Search Your Flight Ticket</h2>
      </div> */}
      <div className="Map session">
        {/* <h2>Search Your Location</h2> */}
        <MapView />
      </div>
      <div className="Weather Search session">
        {/* here is let user to search the weather of their destination, they just need to 
       input the city name, and the weather information will show on the screen. */}

        <h2>Weather Search</h2>
        <form onSubmit={handleWeatherSubmit}>
          <label>
            Enter City Name
            <input
              type="text"
              value={cityForWeather}
              // on change is an event handler that triggers when the value of an input element changes.it will triggers the setCityForWeather function to update the "cityWeather" state with the new value.
              onChange={(e) => setCityForWeather(e.target.value)}
            />
          </label>
          <button type="submit">Search Weather</button>
        </form>
        {/* it mean when the cityForWeather is not null, it will show the weather information that means WeatherDisplay component will be rendered to the screen. */}
        {cityForWeather && <WeatherDisplay city={cityForWeather} />}
      </div>
      {/* 
      <div>
        <h2>Location Search</h2>
        <form onSubmit={handleHotelSubmit}>
          <label>
            Enter City Name
            <input
              type="text"
              value={cityForHotels}
              onChange={(e) => setCityForHotels(e.target.value)}
            />
          </label>
          <button type="submit">Search Location ID</button>
        </form>
        {cityForHotels && <HotelFinder city={cityForHotels} />}
      </div> */}
    </div>
  );
}

export default DestinationComponent;
