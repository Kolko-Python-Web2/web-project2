import React, {useState} from "react"
export default function Forms(){
    const [name, setname] = useState("")
    const [nick, setnick] = useState("")
    const [group, setgroup] = useState("Web")
    const [groups,setgroups] = useState([])

    const get = () => {
        const b = {name:name, nick:nick, group:group}
        console.log(b)
        fetch("http://localhost:8000/users",{headers: {'Accept': 'application/json','Content-Type': 'application/json','Access-Control-Allow-Origin':'*'},method:"POST",body:JSON.stringify(b)})
    }
    React.useEffect(() => {
        fetch("http://localhost:8000/roles").then(data => data.json()).then((e) => (setgroups(e.roles)))
    }, [])
    return (
        <>
            
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
    )
    
}


