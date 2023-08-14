import React from 'react';

function FirstRow(props){
    return <div className="row firstRow" style={{padding: "0%"}}>
        
                <div className="col-5" style={{padding: "0%"}} >
                    <div id="teamName">

                    <h3 style = {{margin: "0%"}}> {props.info.teamName} </h3>
                    <h2 style = {{margin: "0%", paddingLeft: "1%", paddingRight: "1%", paddingBottom: "0.5%", paddingTop: "0px", display: "flex", textAlign: "center", justifyContent: "center" , alignItems: "center"}}> | </h2>
                    <h3 style = {{margin: "0%"}}> {props.info.sprintName} </h3>
                       
                        
                    </div>
                </div>

                <div className="col-2" style={{padding: "0%"}}>
                    <div id="appLogo">
                        <h6> appLogo </h6>
                    </div>
                </div>

                <div className="col-2" style={{padding: "0%", backgroundColor: "#131329"}}>
                </div>

                <div className="col-3" style={{padding: "0%"}} >
                    <div id="relevantTime">
                            <h3 style={{margin: "0%"}}> {props.info.currDay}.gün | </h3>
                            <p style={{margin: "0px", paddingLeft: "3%", paddingTop: "1.5%"}}> Sprintin bitmesine son {props.info.totalDay} gün </p>
                    </div>
                </div>

            </div>;
}

export {FirstRow};