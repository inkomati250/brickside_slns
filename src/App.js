
import React from 'react';

import {Footer, Blog, Features, Header, Possibility, WhatGPT3} from './containers';
import {Cta, Brand, Navbar} from './components';
import './App.css';


const App = () => {
  return (
    <div ClassName="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>


  );
}
export default App;

