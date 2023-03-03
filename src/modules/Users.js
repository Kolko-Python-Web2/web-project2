import axios from 'axios';
import React, { useEffect, useState } from 'react';
export default function Users() {
    const [users, setUsers] = useState([]);
    const [roles, setRoles] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/dc/users')
            .then(res => {
                setUsers(res.data.users);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }
        , [])
    return (
        <div>
            { !loaded? "Not loaded":<>
            <h1>Users</h1>
            <ul>
                {users.map((user) => {
                    setRoles(user.roles);
                    return (
                        <li>{user.name} of <ul>{roles.map((role) => (<li>{role}</li>))}</ul></li>
                    )
                })}
                </ul>
            </>
            }
        </div>

        
        
    )
}
