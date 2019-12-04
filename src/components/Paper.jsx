import React, { useState } from 'react'

const Paper = () => {

    //modern functional state hook
    //the array is composed of the initial state variable, and the set
    const [state, setState] = useState("uncrumbled")

    const crumblePaper = () => {
        setState("crumbled")
        console.log("paper crumbled.")
    }

    return (

        <div>
            <button onClick={crumblePaper}>
                Click me to crumble paper
            </button>
            <p>the paper is {state}</p>
        </div>
    )
}

export default Paper