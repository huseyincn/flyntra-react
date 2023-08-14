import React from "react";
import { WaitingCall } from "./WaitingCall";

function Cozum(props) {

    function createWaitingCall(emp){
        return < WaitingCall
                    key = {emp.empID}
                    empName = {emp.fName}
                    empNum = {emp.calls}
                    empPhoto = {emp.photo}
                />;
    }


    return <div id="cozumMerkezi"  className= "rounded">

                <div className="container">
                    <div className="row">
                        <div className="col" style={{paddingRight: "0px", display: "flex"}} >

                            <div className="cozumLeftLeft" style={{height: "100%", width: "50%"}}> 
                                <h4 style={{textAlign: "left", paddingTop: "15%", paddingBottom: "10%"}} >Çözüm Merkezi</h4>
                                <h6 style = {{display: "flex"}} > <div className="rounded" style = {{backgroundColor: "#131329", height: "20px", width: "20px", marginRight: "5px"}} > </div> 16 açık kayıt </h6>
                                <h6 style = {{display: "flex"}} > <div className="rounded" style = {{backgroundColor: "#eeeeee", height: "20px", width: "20px", marginRight: "5px"}} > </div> 48 talep çözülmeyi bekliyor </h6>
                            </div> 
                                
                            <div className="cozumLeftRight" style={{height: "100%", width: "50%", display: "flex", justifyContent: "center", alignItems: "center"}}> 
                                <div className="progressBarCozum">
                                    <progress value="75" min="0" max="100" style={{visibility:"hidden", height:"0", width:"0"}}>75%</progress>
                                </div>
                            </div> 
                            
                            

                            

                        </div>
                        <div className="col-1" id="verticalLine">
                        
                        </div>
                        <div className="col" style={{paddingLeft: "0px", paddingRight: "0.75%"}} > 

                            <h6 style={{textAlign: "center", marginBottom: "5%"}}> Çözülmeyi Bekleyen Çağrılar </h6>

                            <div className="scrollbar" id="style-2">

                                {props.employees.map(createWaitingCall)}
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
    
            </div>
}

export {Cozum};