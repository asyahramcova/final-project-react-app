import React, { useState } from "react";
import Modal from "../../components/modalForm/Modal";
import Forma from "../../components/form/Forma";
import {Link} from "react-router-dom";
import "./services.css"

import StepsTab from "../../components/tabs/StepsTab";

 const Services = () => {

  const [modalActive, setModalActive] = useState(false);
  return(

      <main className="services-container"  >
            <StepsTab/>
            <button onClick={() => setModalActive(true)} className="modal-button" >Свяжитесь с нами</button>
            <Modal active = {modalActive} setActive={setModalActive} >
              <Forma/>
            </Modal>
  
      <section className="services-section">
          <div className="services-context">
            <div className="services-text-block" >
              <div className="services-text" >
                <p className="services-text-title">Групповая программа для частных лиц</p>
                <ul>
                  <li> Программа для семей от 2 человек.</li>
                  <li> Составление идивидуального плана. </li>
                  <li> ПОмощь в сборе документов и подача их.</li>
                  <li> Персональный менеджер сопровождения. </li>
                  <li> Скидка 25 % на услуги наших партнёров по организации переезда.</li>
                  <li >Поддержка после переезда в течение 3 месяцев. </li>
                  <li> Скидка 30% при повторном обращении.</li>
                </ul>
                <button  className="payment-btn" >  <Link to="/payment">Способы оплаты </Link>  </button> 
            </div>
          </div>

            <div className="services-text-block" >
              <div className="services-text" >
                <p className="services-text-title">Программа для корпоративных переездов</p>
                <ul>
                  <li> Переезд команды сотрудников и их семей.</li>
                  <li> Скидка зависит от количества людей.</li>
                  <li> Чёткий план и стратегия пеезда.</li>
                  <li> Подготовка и подача документов. </li>
                  <li> Юридическая поддержка бизнеса на протяжнии 3 месяцев.</li>
                  <li> Скидка 30% на услуги компаний партнёров.</li>
                  <li> Помощь в адаптации сотрудников и их семей 3 месяца.</li>
                  <li> Оплата частями.</li>
                </ul>
                <button  className="payment-btn" >  <Link to="/payment">Способы оплаты </Link>  </button> 
            </div>
          </div>
          

                      <div className="services-text-block" >
              <div className="services-text" >
                  <p className="services-text-title">Индивидуальная программа сопровождения</p>
                <ul>
                  <li> Личный менеджер со связью 24/7.</li>
                  <li> Составление индивидуальной стратегии переезда.</li>
                  <li> Чёткий пошаговый план.</li>
                  <li> Подготовка и подача документов нами без вашего участия. </li>
                  <li> Организация переезда (в том числе вещей, дом.животных и т.д.).</li>
                  <li> Скидка 25% на услуги наших партнёров.</li>
                  <li> Поддержка после переезда на протяжении 6 месяцев.</li>
                  <li> Оплата частями.</li>
                </ul>
              <button  className="payment-btn" >  <Link to="/payment">Способы оплаты </Link>  </button> 
            </div>
          </div>
          

        </div>


      </section>   

  </main>

 )
};
export default Services;
