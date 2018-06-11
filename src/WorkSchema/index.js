import React from 'react';
import './main.css';
import Consultation from '../assets/іконка8.png';
import Collectors from '../assets/іконка9.png';
import Documents from '../assets/іконка10.png';
import Court from '../assets/іконка11.png';
import Debts from '../assets/іконка12.png';

const WorkSchema = () => (
  <section className="work-schema-section">
    <div className="container">
      <div className="work-schema-wrapper">
        <p className="why-us-header">Схема роботи</p>
        <div className="work-schema-element">
          <img width="100px" height="100px" src={Consultation} alt="Лого Правіс" />
          <div className="">
            <p className="no-margin work-schema-reason-header">Консультація практикуючого юриста</p>
            <p className="no-margin work-schema-text">Консультацію проводитьт спеціаліст, який займається процедурою банкрутства</p>
            <p className="no-margin work-schema-text">
              <span className="work-schema-result">Результат:</span> Ви розумієте в якому напрямку ми будемо діяти і що ми будемо робити
            </p>
          </div>
        </div>
        <div className="work-schema-element">
          <img width="100px" height="100px" src={Collectors} alt="Лого Правіс" />
          <div className="">
            <p className="no-margin work-schema-reason-header">Позбавляємо від колекторів</p>
            <p className="no-margin work-schema-text">Вже в перший місяць ми зробимо так, що Вам не будуть дзвонити колектори
            </p>
            <p className="no-margin work-schema-text">
              <span className="work-schema-result">Результат:</span> зформуємо досудові заяви, заяви про наміри, розсилка кредиторам
            </p>
          </div>
        </div>
        <div className="work-schema-element">
          <img width="100px" height="100px" src={Documents} alt="Лого Правіс" />
          <div className="">
            <p className="no-margin work-schema-reason-header">Збираємо і готуємо документи</p>
            <p className="no-margin work-schema-text">Збираємо необхідні документи для суду і готуємо документи в арбітражний суд

            </p>
            <p className="no-margin work-schema-text">
              <span className="work-schema-result">Результат:</span> весь пакет документів ми передаємо в суд
            </p>
          </div>
        </div>
        <div className="work-schema-element">
          <img width="100px" height="100px" src={Court} alt="Лого Правіс" />
          <div className="">
            <p className="no-margin work-schema-reason-header">Судове провадження</p>
            <p className="no-margin work-schema-text">Назначаються і проводяться судові засідання, ми представляєм Ваші інтереси в суді на протязі всієї процедури (5-12 місяців),  робота з фінансовим керівником
            </p>
            <p className="no-margin work-schema-text">
              <span className="work-schema-result">Результат:</span> ефективне рішення всіх судових засідань
            </p>
          </div>
        </div>
        <div className="work-schema-element">
          <img width="100px" height="100px" src={Debts} alt="Лого Правіс" />
          <div className="">
            <p className="no-margin work-schema-reason-header">Борги списані</p>
            <p className="no-margin work-schema-text">Виноситься рішення арбітражного суду про звільнення вас від боргів
            </p>
            <p className="no-margin work-schema-text">
              <span className="work-schema-result">Результат:</span> рішення суду
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WorkSchema;
