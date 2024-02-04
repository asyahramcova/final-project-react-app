import React from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import "./home.css"

import image_idea from "./../../accets/images/idea.jpg";
import Modal from "../../components/modalForm/Modal";
import Forma from "../../components/form/Forma";


const Home = () => {
    const [modalActive, setModalActive] = useState(false);

return (
  <>
    <Header/>
    <main className="home-container">
      
      <button onClick={() => setModalActive(true)} className="modal-button"   >Свяжитесь с нами</button>
      <Modal active = {modalActive} setActive={setModalActive} >
        <Forma/>
      </Modal>
      
  <section className="home-section-advant">

    <div className="section-one-title">
      <h2>Наши преимущества</h2>
    </div>
    <div className="section-one" >
      <div className="section-card">
        <div className="section-card-icon" >  
        </div>
        <div className="section-card-text" >
          <h4>План</h4>
          <p>Подбираем статегию и создаем чёткий план.</p>
        </div>
      </div>

      <div className="section-card">
          <div className="section-card-icon" > 
          
          </div>
          <div className="section-card-text">
            <h4>Результаты</h4>
            <p>Более 2000 человек переехали благодаря нам.</p>
        </div>
      </div>
      
      <div className="section-card">
        <div className="section-card-icon" >
           
        </div>
        <div className="section-card-text">
          <h4>Сопровождение</h4>
          <p>Мы всегда на связи и готовы помочь.</p>
        </div>
      </div>
    </div>

    <hr className="create-line" />
    <div className="section-one" >
      <div className="section-card">
        <div className="section-card-icon" >
        
        </div>
        <div className="section-card-text">
          <h4>Экономия</h4>
          <p>Бережём ваше время и деньги, а главное - силы  для переезда.</p>
        </div>
      </div>

      <div className="section-card">
        <div className="section-card-icon" >
        
        </div>
        <div className="section-card-text">
          <h4>Услуги</h4>
          <p>Различные пакеты,включая помощь в переезде и обустройстве.</p>
        </div>
      </div>

      <div className="section-card">
        <div className="section-card-icon" >
          
        </div>
        <di className="section-card-text">
          <h4>Гарантии</h4>
          <p>Мы знаем своё дело и гаратируем результат либо возврат денег.</p>
        </di>
      </div>
    </div>
  </section>

  <section className="home-section-info">
    <div >
      <img  className="section-img" alt = "section-img" src = {image_idea}/>
    </div>
    <div  className="home-section-info-text">
 
      <p>"Вне зависимости от того, о чем вы мечтаете — начинайте над этим работать! И тогда в вашей жизни начнут происходить самые настоящие чудеса!"</p>
      <p className="author">Иоганн Вольфганг фон Гёте</p>
          </div>
  </section>


</main>
</>
)
};
export default Home;