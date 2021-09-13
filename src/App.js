import React from "react";
import NavbarHeader from "./Header/Navbar";
import CarouselMain from "./Header/Carousel";
import Meals from "./Meals/Meals";
import Provider from "./store/provider";
import Context from "./store/context";

function App() {
  return (
    <Provider value={Context}>
      <NavbarHeader/>
      <CarouselMain/>
      <Meals/>
    </Provider>
  );
}

export default App;
