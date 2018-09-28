import React, { Component } from "react";
import Navigation from "./components/sections/Navigation/Navigation";
import Header from "./components/sections/Header/Header";
import Realtors from "./components/sections/Realtors/Realtors";
import Features from "./components/sections/Features/Features";
import TestimonialPictures from "./components/sections/Testimonials/TestimonialPictures/TestimonialPictures";
import TestimonialContent from "./components/sections/Testimonials/TestimonialContent/TestimonialContent";
import Homes from "./components/sections/Homes/Homes";
import Gallery from "./components/sections/Gallery/Gallery";
import Footer from "./components/sections/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Header />
        <Realtors />
        <Features />
        <TestimonialPictures />
        <TestimonialContent />
        <Homes />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default App;
