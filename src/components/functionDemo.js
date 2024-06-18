import React,{useState} from "react";

export default function FunctionDemo(props){
    const [val,setVal] = useState(10);
    return <div className={ props.className }>
        This is funcion demo <br/> Props are {props.age}
        <br/> Props are {val}
        <button onClick={()=>setVal(25)}>Change</button>
    </div>;
}