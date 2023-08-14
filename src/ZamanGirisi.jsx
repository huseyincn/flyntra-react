import React from "react";
import { EksikGiren } from "./EksikGiren";

function ZamanGirisi(props) {

    function createEksikGiren(emp){
        if(!emp.isResponsible){
            return < EksikGiren
                    key = {emp.empID}
                    empName = {emp.fName}
                    empPhoto = {emp.photo}
                />;
        }
        else{
            return null;
        }
        
    }

    return  <div id="zamanGirisi"> 

                <h5 style={{paddingBottom: "2%"}}>Eksik Zaman Girişleri </h5>

                <div className="scrollbar" id="style-3">
                    
                    {props.employees.map(createEksikGiren)}
                    
                </div>
                

            </div> ;
}

export {ZamanGirisi};