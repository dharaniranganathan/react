import React,{ useEffect,useState } from "react";

export default function UseEffectDemo(){
    const [val, setValue] = useState('');
    //const [val, setData] = useState('');
    useEffect(()=>{
        console.log('Component Mounted');
    },[])
    useEffect(()=>{
        console.log('val  Mounted/updated');
    },[val])
    useEffect(()=>{
        console.log('Component is unmounted');
    },)

    return(
         <div >This is life cycle demo{val}
            <button onClick={()=> setValue(25)} >Change Data</button>
            <br/> Props are {val}
             {/*<button onClick={()=> setData(250)} >Change Data</button>*/}

        </div>
    );
}
