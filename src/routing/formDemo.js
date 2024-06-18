import React,{useState} from "react";

export default function FormDemo(){
    const[username,setUsername] = useState('');
    const[pwd,setPassword] = useState('');

    const submit = (e) =>{
        console.log('Form values are',username,pwd)
        //return false;
    }
    return (<div>
        This is Form demo
        <br/>
        <form onSubmit={(e)=>submit()}>
            <label> Username:
                <input type="text" name="username" onChange={(e)=>setUsername(e.target.value)} />
            </label>
            <br/>
            <label> Password:
                <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <br/>
            <button type="submit">Login</button>
        </form>
    </div>);
}