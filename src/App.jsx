import React from 'react';
import {FirstRow} from './FirstRow.jsx';
import {SecondRow} from './SecondRow.jsx';
import {ThirdRow} from './ThirdRow.jsx';

import { GeneralInfo, genInfo } from './data.js';
import { Employee, employeeArr } from './data.js';
import { Task, tasksArr, sprintRatio } from './data.js';


/*
function App(){
    return <div>
        <Heading />
        <List />
    </div>;
}
*/

function App(){

    return <div className="container-fluid">
                
                <FirstRow
                    info = {genInfo}
                />
                <SecondRow 
                    ratio = { sprintRatio}
                    employees = {employeeArr}
                />
                <ThirdRow 
                    employees = {employeeArr}
                    tasks = {tasksArr}
                />
                
            </div>;
}

export {App};