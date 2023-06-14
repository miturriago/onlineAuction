import React, { useEffect, useState } from "react";
import "./App.css";
import logo from './logo.png';
import Carousel from "./Carousel";
import homeItems from "./assets/home"
import tecnologyItems from "./assets/tecnology";

function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    console.log("primera vez")
    setCards(homeItems)
  }, []);

  useEffect(() => {
    // Update the document title using the browser API
    console.log("cambio data", cards)

  }, [cards]);
  const homeData = () => {
    console.log("home")
    setCards(homeItems);
  };

  const tecnologyData = () => {
    console.log("tecnology")
    setCards(tecnologyItems);
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
          <button onClick={() => homeData()} className="active">Hogar</button>
          <button onClick={() => tecnologyData()} >Tecnología</button>
          <button onClick={() => clothesData()}>Ropa y zapatos</button>
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
