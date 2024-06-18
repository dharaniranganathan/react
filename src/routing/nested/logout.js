import React from "react";
import {useNavigate} from "react-router-dom";

export default function Logout(){
    const navigate = useNavigate();

    return (
        <div>
            This is the Login page
            <br/>
            <button onClick={() => navigate('/')}>Logout</button>
        </div>
    );
}