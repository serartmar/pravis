import React from 'react';
import './main.css';
import Form from '../Form';

const HeroSecond = () => (
  <section className="hero-second">
    <p className="hero-slogan">
    Дізнайся як жити вільним життям без боргів і витрачати гроші на себе і свою сім’ю
    </p>
    <div className="call-to-action-wrapper">
      <p className="call-to-action">
      Залиште заявку і получіть безкоштовну консультацію юриста по телефону чи в офісі
      </p>
      <Form />
    </div>
  </section>
);

export default HeroSecond;
