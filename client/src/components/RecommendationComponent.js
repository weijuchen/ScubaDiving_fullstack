import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchComponent = ({ onSearch }) => {
  // const option = [
  //   "South-East Asia",
  //   "Asia Pacific",
  //   "Central  & South America",
  //   "Middle East & Red Sea",
  //   "North America",
  //   "Indian Ocean",
  //   "Africa",
  //   "Europe",
  //   "Caribbean",
  // ];

  const [query, setQuery] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchDropdownOptions();
  }, []);

  const fetchDropdownOptions = () => {
    try {
      // const response = await axios.get("/api/dropdown-options");
      axios
        .get("http://localhost:8080/api/dropdown-options")
        .then(function (response) {
          console.log(response.data);
          setDropdownOptions(response.data);
          console.log("Received something dropdownoption", response.data);
        })

        .catch(function (error) {
          console.log("Error in getting", error);
        });
      // setDropdownOptions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = () => {
    if (query) {
      axios
        .get("http://localhost:8080/api/search", { params: { text: query } })

        .then(function (response) {
          console.log("Received something handleSearch", response.data);
          setSearchResults(response.data);

          // setDropdownOptions(response.data);
        })

        .catch(function (error) {
          console.log("Error in getting", error);
        });
      // const response = await axios.get(`/api/search?q=${query}`);
      // onSearch(response.data);
    }
  };
  console.log("This line", searchResults);

  return (
    <div>
      <select onChange={(e) => setQuery(e.target.value)}>
        {/* <option value="">name1</option>
        <option value="">name2</option> */}

        {dropdownOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>
      {/* <select onChange={(e) => setQuery(e.target.value)}>
        <option value="">name1</option>
        <option value="">name2</option>

        {.map((option, index) => (
        {searchResults.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select> */}
      <h2>Here is the result</h2>
      {searchResults.map((option) => (
        <option key={option._id} value={option._id}>
          {option.diveAreaId}
          {/* <br /> */}
          {/* {option.description} */}
        </option>
      ))}
    </div>
  );
};

export default SearchComponent;
