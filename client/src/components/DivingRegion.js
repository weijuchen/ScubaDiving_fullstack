import React, { useState } from "react";

function Recommendations() {
  const [topDiveAreas, setTopDiveAreas] = useState([]);
  const [divingRegion, setDivingRegion] = useState("");

  const handleGetRecommendations = async () => {
    try {
      const response = await fetch("/api/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ divingRegion }),
      });

      const data = await response.json();
      setTopDiveAreas(data.topDiveAreas.slice(0, 3)); // Get the top 3 dive areas
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <label htmlFor="divingRegion">Select Diving Region:</label>
      <select
        id="divingRegion"
        value={divingRegion}
        onChange={(e) => setDivingRegion(e.target.value)}
      >
        <option value="region1">South-East Asia</option>
        <option value="region2">Asia Pacific</option>
        <option value="region3">Central & South America</option>
        <option value="region4">Middle East & Red Sea</option>
        <option value="region5">North America</option>
        <option value="region6">Indian Ocean</option>
        <option value="region7">Africa</option>
        <option value="region8">Caribbean</option>

      </select>
      <button id="getRecommendations" onClick={handleGetRecommendations}>
        Get Recommendations
      </button>

      <div>
        {topDiveAreas.length > 0 ? (
          <ul>
            {topDiveAreas.map((diveArea) => (
              <li key={diveArea.diveAreaId}>
                Dive Area: {diveArea.diveAreaId}, Mean Rating:{" "}
                {diveArea.Mean_rating}
              </li>
            ))}
          </ul>
        ) : (
          <p>No top dive areas available.</p>
        )}
      </div>
    </div>
  );
}

export default Recommendations;
