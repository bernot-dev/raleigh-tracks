import React from 'react';
import './App.css';
import Track from './track/Track';

function App() {
  return (
    <div className="app" id="home">
      <h1>Raleigh Public Tracks Initiative</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#map">Map</a></li>
          <li><a href="#involve">Get Involved</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="header">
        <figure style={{margin: "auto", padding: "2em", width: "50vw"}}>
          <Track />
        </figure>
      </header>
      <section id="about">
        <h2>About</h2>
        <h3>Mission</h3>
        The Raleigh Public Tracks Initiative advocates for public access to tracks for the benefit of the Raleigh running community.
        <h3>The Plan</h3>
        <h4>Phase 1: Awareness</h4>
        <div>First, we will identify key issues related to a lack of track access in Raleigh.</div>
        <h4>Phase 2: Strategy</h4>
        <div>Next, we will develop a strategy for addressing this problem in our community.</div>
        <h4>Phase 3: Advocacy</h4>
        <div>Finally, we will advocate for improvements.</div>
        <div></div>
      </section>
      <section id="map">
        <h2>Map</h2>
        <div>
          <span>All known tracks in the City of Raleigh have been plotted on the Google Map. There are 30 known tracks in Raleigh. Only one regulation track is explicitly open to the public - at the Buffaloe Road Athletic Park.</span>
        </div>
        <figure>
          <a href="https://www.google.com/maps/d/drive?state=%7B%22ids%22%3A%5B%221IrWWQyBxkzUjakXa021SfQp6kjS_VzB8%22%5D%2C%22action%22%3A%22open%22%2C%22userId%22%3A%22114267048853933285287%22%7D">
            <img alt="Google Map with tracks in Raleigh plotted" src="raleigh-tracks-map-preview.png" />
          </a>
        </figure>
      </section>
      <section id="involve">
        <h2>Get Involved</h2>
        <h3>Facebook</h3>
        <a href="https://www.facebook.com/raleightracks/">
          <img className="find-on-facebook" alt="Find us on Facebook" src="find-on-facebook.png" />
        </a>
        <h3>Additional Opportunities</h3>
        <div>Want to help? Send us a message on Facebook, or using the contact information below. We would be glad to have your assistance!</div>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <div>
          <span>For more information contact Adam Bernot (adam@bernot.dev).</span>
        </div>
      </section>
      <footer>
        &copy; 2020 <a href="https://bernot.dev/">Bernot Software L.L.C.</a>
      </footer>
    </div>
  );
}

export default App;
