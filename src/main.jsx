// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Footer from './Footer';
import Body1 from './Body1';
import Body5 from './Body5';
import Body4 from './Body4';
import Simple from './Simple';
import Body3 from './Body3';
import Animations from './Animations';
import Card from './Card';
import Hoverr from './Hoverr';

import Video from './Video';












const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Navbar/>
  <Video/>
  
  <Body1/>
  <Hoverr/>
  
  <Card/>
  <Animations/>
  <Body3/>
  <Simple/>
  <Body4/>
  <Body5/>
  

  <Footer/>
  
  

  </React.StrictMode>
);
