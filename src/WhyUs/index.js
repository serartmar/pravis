import React from 'react';
import './main.css';
import Expertise from '../assets/іконка1.png';
import Result from '../assets/іконка2.png';
import Experience from '../assets/іконка3.png';
import Connection from '../assets/іконка4.png';
import Team from '../assets/іконка5.png';
import System from '../assets/іконка6.png';
import ClientOrientation from '../assets/іконка7.png';

const WhyUs = () => (
  <section>
    <div className="container">
      <div className="why-us-wrapper">
        <p className="why-us-header">Чому ми?</p>
        <div className="why-us-reason-wrapper">
          <div className="why-us-reason">
            <img width="100px" height="100px" src={Expertise} alt="Expertise" />
            <p className="no-marging why-us-reason-header">Експертність</p>
            <p className="no-marging why-us-reason-p">Одні з перших почали проводити процедуру банкрутства фізичних лиць</p>
          </div>
          <div className="why-us-reason">
            <img width="100px" height="100px" src={Result} alt="Result" />
            <p className="no-marging why-us-reason-header">Результат</p>
            <p className="no-marging why-us-reason-p">Ми 100% гарантуємо результат нашої роботи і прописуємо це в договорі</p>
          </div>
        </div>
        <div className="why-us-reason-wrapper">
          <div className="why-us-reason">
            <img width="100px" height="100px" src={Experience} alt="Experience" />
            <p className="no-marging why-us-reason-header">Досвід</p>
            <p className="no-marging why-us-reason-p">Провели 58 процедур банкрутсва фізичних лиць, середнє списання боргу 500 000грн. за одну процедуру
            </p>
          </div>
          <div className="why-us-reason">
            <img width="100px" height="100px" src={Connection} alt="Expertise" />
            <p className="no-marging why-us-reason-header">Зв’язки</p>
            <p className="no-marging why-us-reason-p">Особлива увага і пріоритет вирішення Вашого питання
            </p>
          </div>
        </div>
        <div className="why-us-reason-wrapper">
          <div className="why-us-reason">
            <img width="100px" height="100px" src={Team} alt="Team" />
            <p className="no-marging why-us-reason-header">Команда</p>
            <p className="no-marging why-us-reason-p">8 професійних юристів тільки по банкрутству і 3 своїх фінансових керівники
            </p>
          </div>
          <div className="why-us-reason">
            <img width="100px" height="100px" src={System} alt="System" />
            <p className="no-marging why-us-reason-header">Системність</p>
            <p className="no-marging why-us-reason-p">Повний порядок в термінах і документах, завдяки CRM системі і електронному документообороту
            </p>
          </div>
        </div>
        <div className="why-us-reason-wrapper">
          <div className="why-us-reason">
            <img width="100px" height="100px" src={ClientOrientation} alt="Client Orientation" />
            <p className="no-marging why-us-reason-header">Орієнтація на клієнта</p>
            <p className="no-marging why-us-reason-p">Індивідуальний підхід і увага до особливостей Вашої ситуації
            </p>
          </div>
          <div className="why-us-reason" />
        </div>
      </div>
    </div>
  </section>
);

export default WhyUs;
