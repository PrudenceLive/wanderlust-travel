import React from 'react';
import WelcomeText from './WelcomeText';
import Slides from './Slides';
import BookNow from './BookNow';
import Gallery from './Gallery';
import WaterSlider from './WaterSlider';
import Blog from './Blog';

const BodySection = () => {
  return (
    <main>
      <section id="welcome-text">
        <WelcomeText />
      </section>

      <section id="slides-par">
        <Slides />
      </section>

      <section id="book">
        <BookNow />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="water-slider">
        <WaterSlider />
      </section>

      <section id="blog">
        <Blog />
      </section>
    </main>
  );
};

export default BodySection;
