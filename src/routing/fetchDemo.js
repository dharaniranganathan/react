import React, { useState, useEffect } from "react";

export default function Axios() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        /*fetch("https://reqres.in/api/users?page=2")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("response:", data);
                setUsers(data.data); // Update state with fetched data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });*/
        fetch("https://reqres.in/api/users",{
            method:'POST',
            headers:{
                Authorization:'Bearer your_token_here',
                "content-type" :"application/json",
            },
            body: JSON.stringify({
                name:'test 1',
                jon:'software',
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log("response:", data);
                setUsers(data.data); // Update state with fetched data
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h1>This is Fetch demo</h1>
            {/*<table id="customers">
                <thead>
                <tr>
                    <th>Sno.</th>
                    <th>Avatar</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>
                            <img
                                src={user.avatar}
                                alt={`${user.first_name} ${user.last_name}`}
                            />
                        </td>
                        <td>{`${user.first_name} ${user.last_name}`}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>*/}
        </div>
    );
}
