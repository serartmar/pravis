import React from 'react';
import logo from './assets/лого.png';
import './App.css';
import Form from './Form';
import WhyUs from './WhyUs';
import WorkSchema from './WorkSchema';
import HeroSecond from './HeroSecond';
import Cost from './Cost';
import Results from './Results';
import CallToAction3 from './CallToAction3';
import Bankruptcy from './Bankruptcy';

const App = () => (
  <div className="App">

    <header>
      <div className="container">
        <div className="header-wrappper">
          <img width="60px" height="60px" src={logo} alt="Лого Правіс" />
          <div className="header-left-column">
            <div className="header-left-column-wrapper">
              <p className="no-margin company-name">Pravis</p>
              <p className="no-margin">Ліквідація ТзОВ в Києві</p>
            </div>
          </div>
          <div className="auto-margin">
            <p className="no-margin">8 (846) 221-03-79</p>
            <p className="no-margin">Киев, ул. Шевченка, 118</p>
          </div>
        </div>
      </div>
    </header>


    <section className="hero">
      <p className="hero-slogan">
        Гарантоване закриття ТзОВ за 21 день з оплатою по результату
      </p>
      <div className="call-to-action-wrapper">
        <p className="call-to-action">
          Залиште заявку і получіть безкоштовну консультацію юриста по телефону чи в офісі
        </p>
        <Form />
      </div>
    </section>

    <WhyUs />
    <WorkSchema />
    <HeroSecond />
    <Cost />
    <Results />
    <CallToAction3 />
    <Bankruptcy />
  </div>
);

export default App;
