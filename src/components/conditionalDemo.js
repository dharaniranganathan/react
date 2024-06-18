import React,{useState} from "react";

export default function FunctionDemo(props){
    const [show,setShow] = useState(true);
    return <div className={ props.className }>
        { show ? 'Hai' : ''} <br/>
        <button onClick={()=>setShow(false)}>Change</button>
    </div>;
}