import { useEffect, useState } from "react";
import President from "./President";

const WallOfPresidents = (props) => {

    const [presidents, setPresidents] = useState([]);

    useEffect(() => {
        fetch('https://cs571.org/s23/week3/api/data', {
            headers: {
                "X-CS571-ID": "bid_00000000000000000000"
            }
        })
        .then(res => res.json())
        .then(prezData => {
            console.log(prezData);
            setPresidents(prezData);
        })
    }, [])

    return <div>
        <h1>Wall of Presidents</h1>
        {
            /* TODO Add input fields and button to add a president! */
        }
        {
            presidents.map(pres => <President key={pres.name} {...pres}/>)
        }
    </div>
}

export default WallOfPresidents;