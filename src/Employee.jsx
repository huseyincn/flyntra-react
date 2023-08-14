import React from "react";
import {Avatar} from './Avatar.jsx';

function Employee(props) {

    function handleClick(event){

        var prev = props.selectedID;
        var curr = parseInt(event.currentTarget.id)

        /*console.log(prev);
        console.log(curr);*/

        if(prev !== curr){
            props.setID(curr);
        }

    }

    return <div className={props.id === props.selectedID ? "employee empSelected rounded" : "employee rounded"} onClick={handleClick} id={props.id}>
                 <Avatar
                    photo = {props.photo}
                    isSelected = {props.id === props.selectedID}
                    /> 
                <p> {props.fName + " " + props.sName}</p>
            </div>;
        
            

            
}

export {Employee};