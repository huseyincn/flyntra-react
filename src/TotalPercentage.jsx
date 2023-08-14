import React from "react";
import { CircularProgressBar } from "./CircularProgressBar";

function TotalPercentage(props) {
    return <div id="totalPercentage">
                 
                <CircularProgressBar
                    ratio = {props.ratio}
                />
                <h5> Sprint Tasks Status </h5>
                
            </div>;
}

export {TotalPercentage};