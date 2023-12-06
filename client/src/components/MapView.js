import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  // Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { formatRelative, set } from "date-fns";
import { MarkerF } from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import "./MapView.css";

// import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
  height: "100vh",
  width: "100vw",
};
const options = {
  // styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 51.509865,
  lng: -0.118092,
  // lat: -8.543333,
  // lng: 119.489441,
  // lat: 4.116,
  // lng: 118.6274,
};

// const officeLocations = [
//   { lat: 4.114, lng: 118.621 },
//   { lat: 4.113, lng: 118.628 },
//   { lat: 4.118, lng: 118.629 },
//   { lat: 4.117, lng: 118.629 },
//   // Add more office locations here...
// ];
const divingData = [
  {
    index: 1,

    diveSpot: "Barracuda Point",
    features:
      "Each morning chevron barracuda form in massive spiraling shoals just off the reef. Schooling bigeye and giant trevally pour over the ocean shelf from the shallows into deeper water, and the occasional dogtooth tuna can be spotted. Manta rays, zebra sharks, and even hammerhead sharks are known to cruise the wall at Barracuda Point",
    location: { lat: -8.543333, lng: 119.489441 },
    name: 1,
  },

  {
    index: 2,
    diveSpot: "The Drop-Off",
    features:
      "Another well-known site where the reef gives way to plunging walls within walking distance of the shore. The wall is alive with a wide variety of colorful corals and sponges, in turn providing a refuge for many crab, shrimp, and crustacean species. There is a plethora of big fish at this site, and divers will often experience hundreds of jacks circling above, with bumphead parrotfish, trevallies, and barracuda joining the show.  ",
    location: { lat: -8.544, lng: 119.6 },
    name: 2,
  },
  {
    index: 3,
    diveSpot: "Hanging Gardens",
    features:
      "Reminiscent of the Hanging Gardens of Babylon, the topography at this site is terraced to form several drop-offs festooned in soft corals of various colors. Giant gorgonian sea fans hide all manner of macro life, and in the cracks of the terraces expect to spot gobies, sweetlips, hawkfish, moray eels, and coral groupers. Green and imbricate turtles are particularly common here, as are dozens of ribbontail stingray.",
    location: { lat: -8.541, lng: 119.7 },
    name: 3,
  },

  {
    index: 4,
    diveSpot: "South Point",
    features:
      "One of the best areas for spotting elusive thresher and hammerhead sharks, this deeper site provides access to 130ft ledges before giving way to blue water. Large groups of bumphead parrotfish are also common here, chomping at the reef and leaving plumes of white exhaust as they trundle past.",
    location: { lat: -8.39, lng: 119.8 },
    name: 4,
  },

  // Add more office locations here...
];
export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    // googleMapsApiKey: googlemapsapikey,
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,

    libraries,
  });
  // const [markers, setMarkers] = React.useState([]);
  const [selectLocation, setSelectLocation] = React.useState(null);
  const [selectedMarker, setSelectedMarker] = React.useState();

  //  const [officeLocations, setOfficeLocations] = React.useState([]);

  // const onMapClick = React.useCallback((e) => {
  //   setMarkers((current) => [
  //     ...current,
  //     {
  //       lat: e.latLng.lat(),
  //       lng: e.latLng.lng(),
  //       time: new Date(),
  //     },
  //   ]);
  // }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  // const mapRef = React.useRef();
  // const onMapLoad = React.useCallback((map) => {
  //   mapRef.current = map;
  //   const bounds = new window.google.maps.LatLngBounds();
  //   markers.forEach(({ lat, lng }) => {
  //     bounds.extend(new window.google.maps.LatLng(lat, lng));
  //   });
  //   map.fitBounds(bounds);
  // }, []);

  // I want to set a marker on the map after a user input a location in the search bar
  // const [center1, setCenter1] = React.useState({ lat: 52.4862, lng: -1.8904 });

  const transform = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(8);
  }, []);

  // const addOfficeLocation = (location) => {
  //   setOfficeLocations((prevLocations) => [...prevLocations, location]);
  // };

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <h1>Show diving Map</h1>

      {/* <Locate transform ={transform } /> */}
      <Search
        transform={transform}
        setSelectLocation={setSelectLocation}
        // addOfficeLocation={addOfficeLocation}
      />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        onLoad={onMapLoad}
      >
        {selectLocation && <MarkerF position={selectLocation} />}
        {divingData.map((spot) => {
          // console.log("Here is divingSpot ", spot);
          // console.log("Here is divingSpot location ", spot.location);
          // console.log("Here is divingSpot index", spot.index);

          return (
            <div className="Marker section" key={spot.index}>
              {/* <p>Testing Marker</p> */}

              <MarkerF
                key={spot.index}
                position={spot.location}
                onClick={() => {
                  setSelectedMarker(spot);
                }}
              />
            </div>
          );
        })}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.location}
            // options={{
            //   pixelOffset: new window.google.maps.Size(0, -40),
            // }}
          >
            <div>
              <h5>Dive spot: {selectedMarker.diveSpot}</h5>
              <h5>Features: {selectedMarker.features}</h5>
              {/* <h5>
                location-{selectedMarker.location.lat},
                {selectedMarker.location.lng}
              </h5> */}
              <button
                type="button"
                onClick={() => {
                  setSelectedMarker(null);
                }}
              >
                Close
              </button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
}

// function Locate({ panTo }) {
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null
//         );
//       }}
//     >
//       <img src="/compass.svg" alt="compass" />
//     </button>
//   );
// }

function Search({ transform, setSelectLocation }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      // location: { lat: () => 52.4862, lng: () => 1.8904 },
      // radius: 100 * 1000,
    },
  });
  // position here means the current location (longitude, latitue)of the user
  // const [position, setPosition] = React.useState([]);

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    console.log("Here is handleInput e.target.value ", e.target.value);
    setValue(e.target.value);
  };

  // const currentMarker = async (address) => {
  //   console.log("Here is currentMarker address ", address);
  //   try {
  //     const results = await getGeocode({ address });
  //     const { lat, lng } = await getLatLng(results[0]);
  //   } catch (error) {
  //     console.log("Here is an Error !!! ", error);
  //   }
  // };

  const handleSelect = async (address) => {
    console.log("Here is handleSelect address ", address);
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setSelectLocation({ lat, lng });
      // I want to update the center of the map to the selected location
      // setSelected({ lat, lng });
      // setCenter1({ lat, lng });
      // setSelected({ lat, lng });
      //  setValue("");
      // setSelected({ lat, lng });

      console.log("Here is handleSelect lat ", lat, " lng ", lng);
      transform({ lat, lng });
      // addOfficeLocation({ lat: lat + 0.02, lng: lng + 0.01 });
      // addOfficeLocation({ lat: lat - 0.01, lng: lng - 0.01 });
    } catch (error) {
      console.log("Here is an Error !!! ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />

        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(
                ({ id, description }) => (
                  console.log("Here is data ", data),
                  console.log("Here is data id ", { id }),
                  console.log("Here is data description", { description }),
                  (<ComboboxOption key={description} value={description} />)
                )
              )}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
      {/* <div>
        <Marker position={currentMarker} />;
      </div> */}
    </div>
  );
}
