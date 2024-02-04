import React  from "react";
import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { ordered,restocked } from "./iceCreamSlice";


export const IceCreamView = () =>{
    const [inputValue,changeInputValue] = useState(1)
    const dispatch = useDispatch()
    const numOfIceCreams = useSelector((state)=> state.icecream.numOfIceCreams)
    return(
        <div>
            <h2>Number of ice cream - {numOfIceCreams}</h2>
            <button onClick={()=>dispatch(ordered())}>Order ice cream</button>
            <input value={inputValue} type="number" onChange={(e)=>changeInputValue(parseInt(e.target.value))}/>
            <button onClick={()=>dispatch(restocked(inputValue))}>Restock ice cream</button>
        </div>
    )
}