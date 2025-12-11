import { useState, useEffect } from "react";

export default function Weather() {
  const [temp, setTemp] = useState<number | null>(null);

  useEffect(() => {
    const apiKey = "a10c63adbe072abaec763bdb77ddbe55"; 

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Reykjavik&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => setTemp(data.main.temp))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="text-center mt-10 pt-10">
      <h1 className="text-2xl font-bold">Weather in Reykjavík</h1>
      {temp !== null ? <p>{temp}°C</p> : <p>Loading...</p>}
    </div>
  );
}
