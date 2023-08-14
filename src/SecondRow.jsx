import React from 'react';
import { TotalPercentage } from './TotalPercentage';
import { Cozum } from './Cozum';
import { ZamanGirisi } from './ZamanGirisi';


function SecondRow(props){
    return <div className="row secondRow" >
        
                <div className="col-2 " >
                    <TotalPercentage
                        ratio= {props.ratio}
                    />
                </div>
                <div className="col-7" >
                    <Cozum
                        employees = {props.employees}
                    />
                    
                </div>
                <div className="col-3" >

                    <ZamanGirisi
                        employees = {props.employees}
                    />
                    
                </div>
            </div>;
}

export {SecondRow};