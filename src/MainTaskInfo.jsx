import React from "react";
/*import ReactDOM from 'react-dom/client';*/

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  /*import "react-circular-progressbar/dist/styles.css";*/

function MainTaskInfo(props) {

    function createMembers(member){
        return <img key = {member.empID} className= "memberPhoto" style={{marginLeft: "-12px"}} src={member.photo} alt="avatar_img" /> 
    }

    return <div className="mainTaskInfo rounded">

                <div className="container-fluid"> 

                    <div className="row"> 

                        <div className="col-5 description">

                            <h5 style={{margin: "0px"}}> {"Task-" + props.task.taskID + ": " + props.task.taskDescription} </h5>
                            
                        </div>

                        <div className="col-1 description">

                            <p style={{margin: "0px", fontSize: "small"}} > {props.task.findResponsibilityRatio(props.emp)[0] + " sub-tasks / " + props.task.findResponsibilityRatio(props.emp)[1]} </p>

                        </div>

                        <div className="col-3 description" style={{display: "flex"}}>

                            {props.task.findOtherMembers(props.emp).map(createMembers)}
                            
                        </div>

                        <div className="col-3" style={{textAlign: "right", display: "flex", justifyContent: "right" }} >
                            {/*
                            <div style={{ width: "50px", height: "50px", textAlign: "center" }}>
                                
                                <CircularProgressbar value={props.task.progress()} text={`${props.task.progress()}%`} strokeWidth={6}  styles={buildStyles({
                                    // Text size
                                    textSize: '25px',
                                    // Colors
                                    pathColor: '#f88',
                                    textColor: '#f88',
                                    trailColor: '#f5f5f5',
                                    /*trailColor: '#ebebeb',*/
                                    /*trailColor: '#d6d6d6',*/
                                    
                                   /* backgroundColor: '#3e98c7'*/
                                })}/>*/}
                            </div>
                                
                        </div>
                    
                    </div>

                </div>

                
            </div>;
}

export {MainTaskInfo};