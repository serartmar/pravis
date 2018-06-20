import React from 'react';
import './main.css';

const Cost = () => (
  <section>
    <div className="container">
      <div className="cost-wrapper">
        <p className="why-us-header">Скільки це коштує</p>
        <div className="cost-block">
          <div className="cost-left-column">
            <h3 className="cost-block-heading">Консультація</h3>
            <h4 className="cost-block-price">Безкоштовно</h4>
          </div>
          <div className="cost-right-column">
            <ol className="price-elements" >
              <li>Індивідуальна консультація</li>
              <li>Складаємо план дій</li>
              <li>По телефону чи в офісі</li>
            </ol>
            <input className="submit-button" type="submit" value="Залишити заявку" />
          </div>
        </div>
        <div className="cost-block">
          <div className="cost-left-column">
            <h3 className="cost-block-heading">Списання кредитних боргів</h3>
            <h4 className="cost-block-price">5 000 грн</h4>
          </div>
          <div className="cost-right-column">
            <ol className="price-elements" >
              <li>Стратегія вашого захисту</li>
              <li>Претензійна робота</li>
              <li>Судове провадження</li>
            </ol>
            <input className="submit-button" type="submit" value="Залишити заявку" />
          </div>
        </div>
        <div className="cost-block">
          <div className="cost-left-column">
            <h3 className="cost-block-heading">Банкрутство</h3>
            <h4 className="cost-block-price">25 000 грн</h4>
          </div>
          <div className="cost-right-column">
            <ol className="price-elements" >
              <li>Банкрутство фізичного лиця “під ключ”</li>
              <li>Повністю спишемо ваш борг</li>
            </ol>
            <input className="submit-button" type="submit" value="Залишити заявку" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Cost;
