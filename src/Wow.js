import React from "react";

function Wow() {
    const onWow = () => {
        console.log("wow! me click!!");
    }
    return (
        <button onClick={onWow}>click</button>
    );
}

export default Wow;