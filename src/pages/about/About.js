import React, { useState } from "react";
import "./about.css";

import Modal from "../../components/modalForm/Modal";
import Sliders from "../../components/sliders/Sliders";
import Forma from "../../components/form/Forma";


const About = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <main className="about-container"  >
      
        <section className="about-section-one">
          <div className="about-context-one " >
          </div>
        </section>  

        <section className="about-section-two">
          <div className="about-context-two" >
            <p> Компания <span>Move With</span>  создана для того, что бы релокейтинг стал для вас простым и понятным решением, раскрывающим вашу тягу к новому и воплощающем мечты.  </p>
            <br/>
            <br/>
            <p>Наша команда обеспечит понятность, прозрачность и безопасность вашему переезду.  Снами вы не шагаете в темноту, а спокойно открываете нужную вам дверь, четко зная, что за ней.</p>
          </div>
        </section> 

        <section className="about-section-statistics">
        
          <div className="about-statistic-container" >
              <div  className="about-statistic-block">
                <h3>14</h3>
                <p>Лет опыта в сфере миграции и туризма</p>
              </div>
          </div>

          <div className="about-statistic-container" >
              <div  className="about-statistic-block">
                <h3>18</h3>
                <p>Специалистов в нашей дружной команде </p>
              </div>
          </div>

          <div className="about-statistic-container" >
              <div  className="about-statistic-block">
                <h3>2560</h3>
                <p>Человек уже воплотили свою мечту благодаря нам</p>
              </div>
          </div>

            <div className="about-statistic-container" >
              <div  className="about-statistic-block">
                <h3>23</h3>
                <p>Стран -география наших побед.</p>
              </div>
          </div>

      <div className="about-statistic-container" >
              <div  className="about-statistic-block">
                <h3>15</h3>
                <p>Компаний-партнёров</p>
              </div>
          </div>
          
      <div className="about-statistic-container" >
              <div  className="about-statistic-block">
                <h3>87</h3>
                <p>Процент получения виз и  ВНЖ</p>
              </div>
          </div>

      </section> 

        <section className="about-section-three">
            <div className="about-section-three-block" >
              <div className="about-section-three-block-text" >
                <p className="about-text-title">Работая с нами и нашим приложением вы получаете:</p>
                <ul className="about-list">
                  <li>
                    Подробную консультацию, во время которой вы сразу же получаете ряд вариантов для переезда, с четким описанием каждого из них .
                  </li>

                  <li> Личный кабинет, в котором вы наглядно наблюдаете за процессом релокейта. Видите четкие и понятные инструкции и последовательность получения документов.
                    </li>

                  <li>
                    В нужный вам момент в онлайн режиме получаете живую консультацию от вашего менеджера по релокейту.
                  </li>
                </ul>
              </div>
          </div>
      
      </section>
        
        <Sliders/>
  
      <button onClick={() => setModalActive(true)} className="modal-button" >Свяжитесь с нами</button>
            <Modal active = {modalActive} setActive={setModalActive} >
              <Forma/>
            </Modal>
    </main>
    </>
  )
};
export default About;

/*  <h2> Наша  главная цель - осуществление вашей мечты.</h2>
                <p>Если вы не знаете с чего начать, то вам точно нужна наша  помощь!!</p>
          */