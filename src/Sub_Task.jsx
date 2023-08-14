import React from "react";

function Sub_Task(props) {

    let ratio = props.subTask.doneHour * 100.0 / props.subTask.assignedHour;

    if(props.kind === "progress-bar bg-danger"){
        ratio = 7;
    }

    return <div className="subTask">
                <h6 style={{marginBottom: "20px"}}> {"Task-" + props.subTask.taskID + ": " + props.subTask.taskDescription}</h6>
                
                <div style={{display: "flex"}}>

                    <div className="progress" style={{height: "25px", width: "90%"}}>
                        <div className={props.kind} role="progressbar" style={{width: ratio + "%", textAlign: "right", fontSize: "medium"}}> {props.subTask.doneHour + "h"} </div> 
                        
                    </div>
                    <div> {(props.kind === "progress-bar bg-success" ? "" : props.subTask.assignedHour +  "h")} </div>

                </div>
                
            </div>;
             
}

export {Sub_Task};