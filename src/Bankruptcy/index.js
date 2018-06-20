import React from 'react';
import './main.css';
import Form from '../Form';

const Bankruptcy = () => (
  <section className="bankruptcy">
    <div className="container">
      <div className="results-wrapper">
        <p className="why-us-header">Самостійне банкрутство
        </p>
        <p className="results-description">Залиште заявку і на пошту Вам прийде вся необхідна інформація
        </p>
        <ol className="bankruptcy-list" >
          <li>Покрокова інструкція по банкрутству</li>
          <li>Необхідний перелік документів</li>
          <li>10 важливих порад від арбітражного керівника</li>
          <li>Детальна відеінструкція</li>
        </ol>
        <Form email />
      </div>
    </div>
  </section>
);

export default Bankruptcy;
