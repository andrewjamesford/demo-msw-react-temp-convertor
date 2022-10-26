import "./App.css";
import { useState } from "react";
import { getTempInFahrenheit } from "./utils";

function App() {
  
  const [fahrenheit, setFahrenheit] = useState(0);

  
  const handleSubmit = async () => {
    const result = await getTempInFahrenheit();
    setFahrenheit(result);
  };

  return (
    <div className="App">
      <main className="App-container">
        <div>
          <div>
            <button onClick={handleSubmit}>Get Temp in Fahrenheit from API</button>
          </div>
          {fahrenheit !== 0 &&  <div>Fahrenheit is {fahrenheit}</div>}      
        </div>
      </main>
    </div>
  );
}

export default App;
