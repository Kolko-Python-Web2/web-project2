import React, { useState } from "react"
import axios from "axios"
import { FaCircleNotch } from 'react-icons/fa';
export default function Forms(){
    const [name, setname] = useState("")
    const [nick, setnick] = useState("")
    const [group, setgroup] = useState("Web")
    const [groups,setgroups] = useState([])
    const [loaded, setLoaded] = useState(false)
    const get = () => {
        const b = {name:name, nick:nick, group:group}
        console.log(b)
        axios.post("http://localhost:8000/users", { b })
        alert("Dodano użytkownika")
    }
    React.useEffect(() => {
        axios.get("http://localhost:8000/roles").then((data) => { setgroups(data.data.roles);setLoaded(true) })
    }, [])
    return (
        <>
            {!loaded ? <FaCircleNotch icon="spinner" className="spinner" /> : <>
                <h1>Dołącz do nas!</h1>
            <form>
                <label>    
                    <input type="text" value={name} placeholder="Podaj imię i nazwisko" name="name" onInput={e => setname(e.target.value)} />
                    <input type="text" value={nick} placeholder="Python#1234" name="nick" onInput={e => setnick(e.target.value)} />
                    <select value={group} onChange={e => setgroup(e.target.value)}>
                        {groups.map((r) => { return(<option value={r}>{r}</option>) })}
                    </select>
                </label>
                <input type="button" value="Push" onClick={get}/>
                </form>
                </>
            }
        </>
    )
    
}


