import React, { useState } from 'react';
import { EmployeesSection } from './EmployeesSection.jsx';
import {Task} from './Task.jsx';

function ThirdRow(props){

    const [employeeID, setEmployeeID] = useState(1);

    /*setCount(id);*/

    var tempEmp = null;

    for(let i = 0; i < props.employees.length; i++){
        if(employeeID == props.employees[i].empID){
            tempEmp = props.employees[i];
            break;
        }
    }

    /*console.log(tempEmp);*/

    function createTask(task){

        if(tempEmp !== null){

            if(task.isGivenEmployeeAssigned(tempEmp)){

                return <Task
                
                            key = {task.taskID}
                            selectedID = {employeeID}
                            employees = {props.employees}
                            task = {task}
                            emp = {tempEmp}
                
                        />;

            }  
            else{
                return null;
            }

        }
        else{
            return null;
        }

    }

    return <div className="row thirdRow" >

                <div className="col" style={{width: "13%",
                flex: "0 0 13%",maxWidth: "13%"}}>
                
                    <EmployeesSection
                        
                        selectedID = {employeeID}
                        setID = {setEmployeeID}
                        employees = {props.employees}
                    />
                    
                </div>

                <div className="col" style={{paddingLeft: "1%", paddingRight: "1%", paddingBottom: "1%"}}>

                    <div className="container-fluid"style={{padding: "0px"}}>

                        <div className="row" style={{paddingRight: "1%", paddingBottom: "0.5%"}}>

                            <div className="col">

                                <div id="CardToDo" className="rounded">
                                    <h5 /*style={{color: "red"}}*/> TO-DO </h5>
                                </div>

                            </div>

                            <div className="col">

                                <div id="CardParkingLot" className="rounded">
                                    <h5 /*style={{color: "#fcd113"}}*/> PARKING-LOT </h5>
                                </div>

                            </div>

                            <div className="col">

                                <div id="CardInProgess" className="rounded">
                                    <h5 /*style={{color: "blue"}}*/> IN-PROGRESS </h5>
                                </div>

                            </div>

                            <div className="col">

                                <div id="CardDone" className="rounded">
                                    <h5 /*style={{color: "green"}}*/> DONE </h5>
                                </div>

                            </div>

                        </div>

                        <div className="row" style={{padding: "0px"}}>
                            
                            <div className="scrollbar" id="style-4"> 

                                {props.tasks.map(createTask)}
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>;
}

export {ThirdRow};