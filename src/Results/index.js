import React from 'react';
import './main.css';
import ResultsIcon from '../assets/іконка13.png';

const Results = () => (
  <section className="results-section">
    <div className="container">
      <div className="results-wrapper">
        <p className="why-us-header">Результати роботи</p>
        <p className="results-description">За останні 2 роки ми вже списали і реструктурували борги на суму більш ніж
          <span className="money-attention"> 400 млн гривень</span>
        </p>
        <img className="results-icon" width="100" src={ResultsIcon} alt="Result" />
      </div>
    </div>
  </section>
);

export default Results;
