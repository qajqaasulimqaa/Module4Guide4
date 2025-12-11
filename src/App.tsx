import { useState, useEffect } from "react";
import Map from "./Maps"
import Weather from "./Weather"


function App() {
  //Variable that uses useState

  const [cats, setCats] = useState<Array<{ url: string }>>([]);

  useEffect(() => {
    //URl with pictures 
    fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME")

    //
      .then((res) => res.json())
      .then((data) => {
        setCats(data);
      })
  }, []);

  return (
    <div>
      <h1 className="text-center flex justify-center text-3xl">List of Bengal cats!</h1>
      <div  className="flex flex-wrap gap-2.5">
      {cats.map((cat, index) => (
        <img className="flex justify-center items-center" key={index} src={cat.url} alt={`Cat ${index + 1}`} width="150" />
      ))}
      </div>
      <Weather/>
      <h1 className="text-center flex justify-center text-3xl pb-5">Google Maps</h1>
      <Map/>
      
    </div>
  );
}
export default App
