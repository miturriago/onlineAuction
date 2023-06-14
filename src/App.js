import React, { useEffect, useState } from "react";
import "./App.css";
import logo from './logo.png';
import Carousel from "./Carousel";
import homeItems from "./assets/home"
import tecnologyItems from "./assets/tecnology";

function App() {
  const [cards, setCards] = useState([]);
  const [activeHome, setActiveHome] = useState(true);
  const [activeTecno, setActiveTecno] = useState(false);

  useEffect(() => {
    setCards(homeItems)
  }, []);

  
  const homeData = () => {
    setCards(homeItems);
    setActiveHome(true);
    setActiveTecno(false);
  };

  const tecnologyData = () => {
    setCards(tecnologyItems);
    setActiveHome(false);
    setActiveTecno(true);
  };

  const clothesData = () => {
    setCards([])
    setCards(tecnologyItems);
  };

  return (
    <div className="main">

      <div className="header">
        <img className="head" src={logo}></img>


        <div className="topnav" >
          <button onClick={() => homeData()} className={activeHome ? "active" : ""}>Hogar</button>
          <button onClick={() => tecnologyData()} className={activeTecno ? "active" : ""} >Tecnología</button>
        </div>
      </div>
      {cards.length !== 0 && <Carousel
        cards={cards}
        height="500px"
        width="99%"
        offset={4}
        showArrows={true}
      />}

      <div className="footer">
        Made with ♥
      </div>
    </div>
  );
}

export default App;
