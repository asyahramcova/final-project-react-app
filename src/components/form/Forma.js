import { useEffect, useState } from "react";
import "./form.css";

const Forma= () =>{

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [nameFalse,setNameFalse] = useState(false);
  const [numberFalse,setNumberFalse] = useState(false);
  
  const [nameError, setNameError] = useState('Имя не может быть пустым');
  const [numberError, setNumberError] = useState('Номер не может быть пустым');

  const[formValid,setFormValid] = useState(false);

  useEffect( () =>{
    if(nameError || numberError) {
      setFormValid(false)
    }
    else {
      setFormValid(true)
    }
  }, [nameError, numberError])

    const blurHandle = (e) =>{
    switch (e.target.name){
      case "name":
        setNameFalse(true);
        break;
      case "number" :
        setNumberFalse(true)
        break   
        default:
    }
  }


  const nameHandle = (e) =>{
    setName(e.target.value)
    const re = /^[а-яА-ЯёЁa-zA-Z]+$/;
    if(!re.test(String(e.target.value))){
      setNameError("Некорректное имя")
    }
    else{
      setNameError("")
    }
  }

const numberHandle = (e) =>{
    setNumber(e.target.value)
    const re = /^([+375]{1}[0-9]{11})?$/;
    if(!re.test(Number(e.target.value))){
      setNumberError("Некорректный номер")
    }
    else{
      setNumberError("")
    }
  }

    return(
      <div className="form-wrapper">
        <form className="form-container">
          <p>Оставьте ваш номер и мы вам перезвоним.</p>

          {(nameFalse && nameError) && <div style={{color:'red'}} >{nameError}</div> }
          <input  onChange={e => nameHandle(e)} onBlur = {e => blurHandle(e)}    value={name} name = "name" type = "text" placeholder="Имя..."/>

          {(numberFalse && numberError) && <div style={{color:'red'}} >{numberError}</div> }
          <input  onChange={e => numberHandle(e)} onBlur ={e => blurHandle(e)}   value={number} name = "number" type = "tel" placeholder="Телефон +375222222222"/>

          <button disabled={!formValid} type ="submit" >Отправить</button>
        </form>  
      </div>
    )
}

export default Forma;
