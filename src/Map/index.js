import React from 'react';
import './main.css';

const Map = () => (
  <section className="map">
    <iframe
      title="map"
      width="100%"
      height="500"
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=50%C2%B023'49.5%22N%2030%C2%B025'52.2%22E&t=&z=17&ie=UTF8&iwloc=&output=embed"
      scrolling="no"
    />
    <div className="contacts">
      <h4>Контакти</h4>
      <p>Київ, вул. Шевченка, 118</p>
      <p>8 (846) 221-03-79</p>
      <p>pravis@gmail.com</p>
      <p>Пн-Пт 9:00-17:00</p>
    </div>
  </section>
);

export default Map;
