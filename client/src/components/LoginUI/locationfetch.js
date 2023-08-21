import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

export default function WasteSegregationGuide() {
  const [location, setLocation] = useState({});
  const [wasteSchedule, setWasteSchedule] = useState({});
  const [buttonClicked, setButtonClicked] = useState(false);
  var x=document.getElementById("demo")
  useEffect(() => {
    if (buttonClicked) {
      getLocation();
    }
  }, [buttonClicked]);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    setLocation({ latitude: lat, longitude: lng });

    const data = { latitude: lat, longitude: lng };
    axios
      .post("https://backend-hack-dtu.vercel.app/api/fetcher", data)
      .then((response) => {
        console.log(response);
        setWasteSchedule(response.data);
      })
      .catch((error) => {
        console.log(error);
        x.innerHTML += {error};
      });
  }

  return (
    <>
      <div>
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
     <div className="absolute top-3 right-4 text-4xl cursor-pointer"><Link to={'/'}><ion-icon name='close'></ion-icon></Link></div>
      <div className="bg-white rounded-md shadow-md p-10">
        <h2 className="text-3xl font-bold mb-4 text-green-900">Waste Collection Schedule</h2>
        <button className="px-4 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-300 ease-in-out mb-4" onClick={() => setButtonClicked(true)}>Get Location</button>
        {location.latitude && location.longitude && (
          <p>
            Latitude: {location.latitude}
            <br />
            Longitude: {location.longitude}
          </p>
        )}
        <br/>
        {wasteSchedule && (
        <table className="w-full text-center border-collapse mb-4">
          <thead>
            <tr>
              <th className="border border-gray-500 p-2">Waste Type</th>
              <th className="border border-gray-500 p-2">Monday</th>
              <th className="border border-gray-500 p-2">Tuesday</th>
              <th className="border border-gray-500 p-2">Wednesday</th>
              <th className="border border-gray-500 p-2">Thursday</th>
              <th className="border border-gray-500 p-2">Friday</th>
              <th className="border border-gray-500 p-2">Saturday</th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(wasteSchedule).map((wasteType) => (
  <tr key={wasteType}>
    <td className="border border-gray-500 p-2">{wasteType}</td>
    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
      <td className="border border-gray-500 p-2" key={day}>
        {wasteSchedule[wasteType][day] && (
          <>
            <span>{day}: </span>
            <span>{wasteSchedule[wasteType][day]}</span>
            <br />
          </>
        )}
      </td>
    ))}
  </tr>
))}
          </tbody>
        </table>
        )}
      </div>
    </div>
      </div>
    </>
  );
}


