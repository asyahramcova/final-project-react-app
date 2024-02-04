import  { useEffect } from "react";

 function UseClickOut( ref,callback){
   
  useEffect(() =>{
    document.addEventListener( "mousedown", handleClick);
    return () =>{
      document.removeEventListener( "mousedown", handleClick);
    }
  })

  const handleClick = (e) =>{
    if (ref.current && !ref.current.contains(e.target)){
      callback();
    }
  };

}
export default UseClickOut;