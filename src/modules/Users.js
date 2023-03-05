import axios from 'axios';
import React, { useState } from 'react';
import { FaCircleNotch } from 'react-icons/fa';
import "../Users.css"
export default function Users() {
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    React.useEffect(() => {
        axios.get("http://localhost:8000/dc/users").then((data) => { setUsers(data.data.data.users);setLoaded(true)})
    }, [])
    return (
        <div>
            
                {!loaded ? <FaCircleNotch icon="spinner" className="spinner" /> : <>
            <h1>Users</h1>
            <ul>
                    {users.map((user) => {
                        
                        return (<li>{user.name} is in <ul>{user.roles.map((role) => (<li>{role }</li>))}</ul></li>)
                    })}
                
                </ul>
            </>
                }
            
        </div>

        
        
    )
}
