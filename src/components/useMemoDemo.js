import React,{useState,useMemo} from "react";

const UseMemoDemo = () => {

    const [count,setCount] = useState(0);
    const [data,setData] = useState(10);

    const multiCountMemo = useMemo(() =>{
        console.log("Calculating...");
        let result = 0;
        for(let i=0; i< count *100000; i++){
            result += i;
        }
        return result
    },[count]);

    return (
        <div>
            <h1>Use Memo Example</h1>
            <p>Count: {count}</p>
            <button onClick={()=> setCount(count+1) }>Increment Count</button>
            <br/>
            <p>Data:{data}</p>
            <button onClick={()=> setData(data+1)}>Increment Data</button>
            <p>Result:{multiCountMemo}</p>
        </div>
    )
}

export default UseMemoDemo;