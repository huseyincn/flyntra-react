import React from "react";

function EksikGiren(props) {
    return <div id="zamanObject">
                <img id="zamanPhoto" src={props.empPhoto } alt="aaa" />
                <p> {props.empName} </p>
            </div>;
}

export {EksikGiren};