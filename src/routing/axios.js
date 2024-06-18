import axios from "axios";
import React,{useEffect,useState} from "react";
export default function Axios(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://reqres.in/api/users?page=2").then((resp)=>{
            console.log(resp.data.data);
            setUsers(resp.data.data);
        })
    })
    return (
        <div>
            <h1>This is Axios</h1>
            <table id="customers">
                <thead>
                <tr>
                    <th>Sno.</th>
                    <th>Avatar</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user,index) => (
                    <tr key={user.id}>
                        <td>{index+1}</td>
                        <td><img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} /></td>
                        <td>{user.first_name},{user.last_name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}