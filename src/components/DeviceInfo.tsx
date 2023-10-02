import React, { useEffect, useState } from "react";

const DeviceInfo: React.FC = () => {
  const [deviceName, setDeviceName] = useState("");
  const [location, setLocation] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    // Get device name
    setDeviceName(navigator.userAgent);

    // Get device location
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLatitude(latitude);
      setLongitude(longitude);

      // Use the latitude and longitude to fetch the location details
      fetchLocationDetails(latitude, longitude);
    });

    // Get current date and time
    const date = new Date();
    setCurrentDate(date.toLocaleDateString());
    setCurrentTime(date.toLocaleTimeString());
  }, []);

  const fetchLocationDetails = async (lat: number, lon: number) => {
    try {
      // Make a request to the Nominatim API for reverse geocoding using the fetch API
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      // Extract the address components from the API response
      const address = responseData.address;
      const country = address.country || "N/A";
      const city = address.city || address.town || address.village || "N/A";

      // Set the country and city state
      setLocation(`${city}, ${country}`);
    } catch (error) {
      console.error("Error fetching location details:", error);
    }
  };

  return (
    <div className="bg-gray-200 p-4 px-12 rounded-lg w-fit mbl:px-5">
      <h2 className="text-base font-semibold mb-2">Informações do aparelho</h2>
      <ul className="list-disc mbl:list-none">
        <li>
          {" "}
          <p>
            Nome do aparelho: <span className="font-medium">{deviceName}</span>
          </p>
        </li>
        <li>
          {latitude !== null && longitude !== null && (
            <p>
              Localização:{" "}
              <span className="font-medium">
                {location} (Latitude: {latitude}, Longitude: {longitude})
              </span>
            </p>
          )}
        </li>
        <li>
          <p>
            Data: <span className="font-medium">{currentDate}</span>
          </p>
        </li>
        <li>
          <p>
            Hora: <span className="font-medium">{currentTime}</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default DeviceInfo;
