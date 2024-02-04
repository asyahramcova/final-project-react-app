import React, { useState ,   useEffect} from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import data from "./data"
import './sliders.css'

function Sliders (){

  const [people, setPeople] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() =>{

    const lastIndex = people.length - 1;

      if(currentIndex < 0  ){
      setCurrentIndex (lastIndex)
      }

      if(currentIndex > lastIndex  ){
      setCurrentIndex (0)
      }

  }, [currentIndex, people])

  return(
    <section className="slider-section" >
      <div className="slider-container"  >
        <div className="title" >
          <p >Отзывы о нас </p>
        </div>

      <div className="section-center">
        
        {people.map((person, personIndex) => {
          const{id, image,  name, title, quote} = person;

            let position = "nextSlider";
            if(personIndex === currentIndex){
              position = "activeSlide"
            }

            if(personIndex ===currentIndex-1 || (currentIndex===0 && personIndex===people.length -1)){
              position = "lastSlide"
            }

            return (

              <article className={position} key = {id}>
                <img className="person-img" src = {image} alt = "name"/>
                <h4>{name}</h4>
                <p className="person-title" >{title}</p>
                  <p className="text" > " {quote}  "</p>
              </article> 
            )
      })}
            <button className="prev" onClick={() => setCurrentIndex( prevState => prevState - 1)} >
              <FaArrowCircleLeft className="slider-btn" />
            </button>

              <button className="next" onClick={() => setCurrentIndex( prevState => prevState + 1)} >
              <FaArrowCircleRight  className="slider-btn" />
            </button>
      </div>
      </div>
    </section>
    
  )

}


export default Sliders;