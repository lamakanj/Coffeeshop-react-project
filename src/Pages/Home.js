import React from 'react';
import americanoImg from '../assets/americano.png';
import vanillaMilkshakeImg from '../assets/vanilla icecream milkshake.png';
import matchaImg from '../assets/matcha coffee.png';

function Home() {
  return (
    <div>
      <section className="hero">

        <div>
          <h1>Welcome to Moonlight Café</h1>
          <p>Crafting moments, one cup at a time.</p>
        </div>
      </section>
      <section className="about">
        <h2>Why Choose Us?</h2>
        <p>
          We serve ethically sourced, small-batch roasted beans in a cozy space
          designed for dreamers, doers, and creatives.
        </p>
        <p>
          Whether you're working remotely or catching up with friends, our café
          is your second home.
        </p>
      </section>
     <section className="home-menu">
  <h2>Featured Drinks</h2>
  <div className="home-menu-items">
    <div className="home-menu-item">
      <img src={americanoImg} alt="Espresso" />
      <h3>Espresso</h3>
      <p>Bold and rich. The base of everything we do.</p>
    </div>
    <div className="home-menu-item">
      <img src={vanillaMilkshakeImg} alt="vanilla Milkshake" />
      <h3>Vanilla Milkshake</h3>
      <p>A creamy blend of vanilla ice cream and fresh milk, topped with whipped cream for a classic, refreshing delight.</p>
    </div>
    <div className="home-menu-item">
      <img src={matchaImg} alt="Matcha Latte" />
      <h3>Matcha Latte</h3>
      <p>Earthy green tea with creamy milk. Great hot or iced.</p>
    </div>
  </div>
</section>


    </div>
  );
}
export default Home;
