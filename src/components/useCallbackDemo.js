import React,{useState} from "react";

export default function useReducerDemo(props){
    const [show,setShow] = useState(true);
    return <div className={ props.className }>
        <h2>This is callback content</h2>
    </div>;
}