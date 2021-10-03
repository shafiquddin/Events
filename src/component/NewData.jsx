import React from "react";

function Newdata(props){
    return (
        <tr>
            <td>{props.model}</td>
            <td>{props.speed}</td>
            <td>{props.colour}</td>
        </tr>
    )
}

export default Newdata; 