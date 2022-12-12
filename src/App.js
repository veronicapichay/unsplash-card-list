import MainNav from './components/MainNav';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  //API request
  const [itemData, setItemData] = useState([]);


//get some data
useEffect(() => {
  const client_id = "qTvoYhj5lwBIculuHLXUAFLgm2X6DaZfPJB6Yxxkn0A"; // Create an account unsplash tp hey client ID;
  const searchStr = "tech design";
  const resource = `https://api.unsplash.com/search/photos?query=${searchStr}&per_page=20&client_id=${client_id}`;

  fetch(resource)
    
    .then((response) => response.json())
    .then((data) => { 
      setItemData(data.results);
      });
    }, []); 

    return (
      <div className="App">
        {/* Add a navbar */}
        <MainNav />
        {/* Add card container */}
        <div className="card-container">
          {itemData &&
            itemData.map((data, index) => (
              <p key={index}>{data.alt_description}</p>
            ))}
        </div>
      </div>
    );
  }
  
  export default App;
