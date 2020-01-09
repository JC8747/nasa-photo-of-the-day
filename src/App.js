import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import APODCard from './Components/APODCard';

function App() {
  const [APOD, setAPOD] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      setAPOD(response.data);
    })
    .catch(error => {
      console.log('Response data was lost in transmission!', error)
    })
  },[])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <APODCard/>
    </div>
  );
}

export default App;
