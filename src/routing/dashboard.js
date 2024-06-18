import {NavLink,Outlet} from "react-router-dom";
import React, { useState } from 'react';

export default function Dashboard(){

    return (
        <div>
            <ul>
                <li ><NavLink to="home" >Home</NavLink></li>
                <li ><NavLink to="about" >About</NavLink></li>
                <li ><NavLink to="contact">Contact Us</NavLink></li>
                <li ><NavLink to="action">Action</NavLink></li>
                <li ><NavLink to="mapDemo">Map Demo</NavLink></li>
                <li ><NavLink to="axios">Axios</NavLink></li>
                <li ><NavLink to="nestedAxios">NestedAxios</NavLink></li>
                <li ><NavLink to="formDemo">Form Demo</NavLink></li>
            </ul>
            <Outlet/>
        </div>
    );
}