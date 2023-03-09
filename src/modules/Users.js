import axios from 'axios';
import React, { useState } from 'react';
import { FaCircleNotch } from 'react-icons/fa';
import "../Users.css"
import Alert from '@mui/material/Alert';
export default function Users() {
    const [users, setUsers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState("");
    
    React.useEffect(() => {
        axios.get("http://localhost:8000/dc/users").then((data) => { setUsers(data.data.users);setLoaded(true)}).catch((error) => setError(error.response.data.detail))
    }, [])
    return (
        <div>
            {error ? <Alert severity="error">{error}</Alert>: null }
            
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
