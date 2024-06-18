import React from "react";
import {NavLink,Outlet} from "react-router-dom";

export default function Action(){
    return (<div>
        <ul>
            <li ><NavLink to="email">Send Email</NavLink></li>
            <li ><NavLink to="/">Logout</NavLink></li>
        </ul>
        <h1>This is ActionComponenet</h1>
        <Outlet/>
    </div>);
}