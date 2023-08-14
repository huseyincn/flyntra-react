import React from "react";
import { Sub_Task } from "./Sub_Task";
import { MainTaskInfo } from "./MainTaskInfo";

function Task(props) {

    function createSubTask(sub_task, type){

        return <Sub_Task
                    key = {sub_task.taskID}
                    kind = {type}
                    subTask = {sub_task}
                />

    }

    return <div className="mainTask rounded" style={{marginBottom: "25px", background: "#f5f5f5"}}>
                
                
                <MainTaskInfo
                    task = {props.task}
                    emp = {props.emp}
                />
                 
                <div className="container-fluid" style={{paddingLeft: "0.5%", paddingRight: "0.5%"}}>

                    <div className="row">

                        <div className="col-3">
                            {props.task.findSubTasksOfGivenEmployee(props.emp)[0].map( function(x) { return createSubTask(x, "progress-bar bg-danger"); } )}
                            {/*https://stackoverflow.com/questions/12344087/using-javascript-map-with-a-function-that-has-two-arguments */}
                            {/*
                            <Sub_Task
                                kind = "progress-bar bg-danger"
                                done = "0"
                                total = "13"
                            />
                            */}
                        </div>

                        <div className="col-3">

                            {props.task.findSubTasksOfGivenEmployee(props.emp)[1].map( function(x) { return createSubTask(x, "progress-bar bg-warning"); } )}
                            {/*
                            <Sub_Task
                                kind = "progress-bar bg-warning"
                                done = "10"
                                total = "12"
                            />
                            */}
                        </div>

                        <div className="col-3">

                        {props.task.findSubTasksOfGivenEmployee(props.emp)[2].map( function(x) { return createSubTask(x, "progress-bar"); } )}
                            {/*
                            <Sub_Task
                                kind = "progress-bar"
                                done = "6"
                                total = "10"
                            />

                            <Sub_Task
                                kind = "progress-bar"
                                done = "2"
                                total = "15"
                            />

                            <Sub_Task
                                kind = "progress-bar"
                                done = "3"
                                total = "6"
                            />
                            */}
                        </div>

                        <div className="col-3">

                            {props.task.findSubTasksOfGivenEmployee(props.emp)[3].map( function(x) { return createSubTask(x, "progress-bar bg-success"); } )}
                            {/*
                             <Sub_Task
                                kind = "progress-bar bg-success"
                                done = "9"
                                total = "9"
                             />

                            <Sub_Task
                                kind = "progress-bar bg-success"
                                done = "15"
                                total = "15"
                             />
                            */}
                        </div>

                    </div>

                    

                </div>

                
            </div>;
}

export {Task};