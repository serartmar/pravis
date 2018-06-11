import React, { Component } from 'react';
import logo from './assets/лого.png';
import './App.css';
import Form from './Form'

class App extends Component {
  render() {
    return (
      <div className="App">

        <header>
        <div className="container">
          <div className="header-wrappper">
          <img width='60px' height='60px' src={logo}></img>
          <div className="header-left-column">
            <div className='header-left-column-wrapper'>
              <p className="no-marging company-name">Pravis</p>
              <p className="no-marging">Ліквідація ТзОВ в Києві</p>
            </div>
          </div>
          <div className="auto-margin">
            <p className="no-marging">8 (846) 221-03-79</p>
            <p className="no-marging">Киев, ул. Шевченка, 118</p>
          </div>
          </div>
        </div>
        </header>


      <section className='hero'>
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
      </div>
    );
  }
}

export default App;
