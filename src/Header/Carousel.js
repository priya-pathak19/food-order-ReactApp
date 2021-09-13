import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './Carousel.css'
import mealthree from '../assets/meal3.jpg'
import mealfive from '../assets/meal5.jpg'

const items = [
  {
    src: mealthree,
    altText: 'Slide 1',
    caption: <div className="iceCream">
        <h5 style={{color:"#f5c242"}}>Top Selling</h5>
        <br/>
        <h1>Fresh </h1>
        <h1 className="headCap">Ice creams</h1>
        <br/>
        <h3>Just Rs.99</h3>
    </div>,
  },
  {
    src: mealfive,
    altText: 'Slide 2',
    caption: <div className="iceCream">
    <h5 style={{color:"#f5c242"}}>Top Selling</h5>
    <br/>
    <h2>Get Healthy With</h2>
    <h1 className="headCap">Fresh Salad</h1>
    <br/>
    <h3>Just Rs.299</h3>
</div>,
  },
];

const CarouselMain = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText}  className="imageItem"/>
        <CarouselCaption captionText={item.caption}  className="caption"/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="control" />
    </Carousel>
  );
}

export default CarouselMain;