// import React  from "react";
// import {useSelector,useDispatch} from "react-redux"
import { ordered,restocked } from "./cakeSlice";
import { useState } from "react";
import { useAppDispatch,useAppSelector } from "../../app/hooks";

export const CakeView = () =>{
    const [inputValue,changeInputValue] = useState(1)
    const dispatch = useAppDispatch()
    const numOfCakes = useAppSelector((state)=> state.cake.numOfCakes)
    return(
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={()=>dispatch(ordered())}>Order cake</button>
            <input type="number" value={inputValue} onChange={(e)=>changeInputValue(parseInt(e.target.value))}/>
            <button onClick={()=>dispatch(restocked(inputValue))} >Restock cake</button>
        </div>
    )
}