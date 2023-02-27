import React, {useState} from "react"
export default function Forms(){
    const [nazw, setnazw] = useState('')
    const [role, setrole] = useState("Web")
    const [typ,settyp] = useState("A")
    const [roles,setroles] = useState([])

    const get = () => {
        fetch("http://localhost:8000/user",{method:"POST",body:{"name":nazw, "role":role, "group":typ}})
    }
    React.useEffect(() => {
        fetch("http://localhost:8000/roles").then(data => data.json()).then((e) => (setroles(e.roles)))
    }, [])
    return (
        <>
            
            <form>
                <label>
                    <input type="text" value={nazw} name="name" onInput={e => setnazw(e.target.value)} />
                    <select value={role} onChange={e => setrole(e.target.value)}>
                        {roles.map((r) => { return(<option value={r}>{r}</option>) })}
                    </select>
                    <select value={typ} onChange={e => settyp(e.target.value)}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </label>
                <input type="button" value="Push" onClick={get}/>
            </form>
        </>
    )
    
}


