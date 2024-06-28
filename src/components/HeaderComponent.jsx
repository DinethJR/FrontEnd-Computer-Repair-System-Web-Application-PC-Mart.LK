import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
      <header>
      <div class="topnav">
      
        <a class="active" href="/">PC Mart</a>
        
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
    </div>
      </header>
    </div>
  )
}

export default HeaderComponent;
