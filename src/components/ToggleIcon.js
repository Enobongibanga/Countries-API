import React,{useState, useCallback} from 'react'
import { FaAngleDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ToggleIcon = () => {
    const useToggle =(intialState=false)=>{
        const [state, setState] =useState(intialState)
        const toggle = useCallback(()=>setState((state)=>!state),[]);
   return [state, toggle];

  
    }
    const [toggle, setToggle]= useToggle()
    const { state } = useLocation();
    return (
        <div>
          <button 
                onClick={setToggle} 
                >
             <FaAngleDown /> 
          </button>
    
          {toggle && (
            <ul class="list-group">
              <li class="list-group-item">{state.name.official}
              <p>{state.capital}</p> </li>
              <li class="list-group-item">{state.timezone}
              </li>
              
            </ul>
          )}
    
        </div>
      )
}

export default ToggleIcon
