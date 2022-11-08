import { useState, useEffect } from 'react';
import './App.css';
import StockCards from './StockCards';

const API_URL = 'https://tradestie.com/api/v1/apps/reddit';

const App = () => {

    const [stocks, setStocks] = useState([]);

    const getStocks = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setStocks(data);
    }

    useEffect(() => {
      getStocks();
    }, []);
    
    return (
      <div className="App">
        <div className='wsb-title'>
          <img src='https://upload.wikimedia.org/wikipedia/en/f/f0/WallStreetBets.png'alt='wallstreetbets'/>
          <h1 className='title'><span className='title-span'>Top 50</span> Stocks</h1>
        </div>
        <div className="container">
          {stocks.map((stock) => (
            <StockCards stock={stock} />
          ))}
        </div>
        <footer className='footer'>&copy; Copyright 2022 Evan Moon</footer>
      </div>
    );
}

export default App;
