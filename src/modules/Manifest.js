import axios from "axios";
import { useState } from "react"

export default function Manifest() {
    const [loaded, setLoaded] = useState(false);    
    return (
    <>
        {!loaded ?
            <>
                <h1>
                    Hello
                </h1>
            </>
                :
                    <>
                    </>
        }
    </>
    )
            
}