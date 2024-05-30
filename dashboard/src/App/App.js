import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import WelcomeText from './components/WelcomeText';
import Slides from './components/Slides';
import BookNow from './components/BookNow';
import Gallery from './components/Gallery';
import WaterSlider from './components/WaterSlider';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <WelcomeText />
              <Slides />
              <BookNow />
              <Gallery />
              <WaterSlider />
              <Blog />
            </Route>
            {/* Add more routes here if needed */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
