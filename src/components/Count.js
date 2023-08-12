import React, { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <p id="incr-cnt">Count: {count}</p>
            <button id="incr-btn" onClick={() => setCount(count + 1)}>
                +
            </button>
            <br />
            <br />
            <h2>Expensive Calculation</h2>
            <p id="calc">{1000000000 + count}</p>
            <hr />
            <hr />
            <br />
        </>
    )
}

export default Count;