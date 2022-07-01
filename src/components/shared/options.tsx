import { Action } from "history";
import { useReducer, useState } from "react";



let values:string='';
function reducer(state:any, addOption:any) {
    console.log(addOption,state)
    if(addOption.type){
        switch (addOption.type){
            case 'ADD':
                if(addOption.event==="Button"){
                    return [
                        ...state,
                        values
                    ]
                }else{
                    console.log(values)
                    values=values+addOption.value
                    return state;
                }
            case 'REMOVE':
                console.log(state);
                return
            default:
                return state
        }
    }
}


export default function Options() {

    const [state, dispatch] = useReducer(reducer, ["Option"])
    
    return (
        <div className="options__container">
            {
                state.map((options:string, index:number)=>(
                    <input type="text" value={options} key={index} 
                    onChange={(e)=>dispatch({type:'ADD',event:"Text",value:e.target.value})}/>
                ))
            }
            <button onClick={(e)=>dispatch({type:'ADD',event:"Button"}) }> ADD</button>
            <button onClick={()=>dispatch({type:'REMOVE'}) }> REMOVE</button>
        </div>
    )
}