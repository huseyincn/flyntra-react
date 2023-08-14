import React from "react";


function WaitingCall(props) {
    return <div id="WaitingCallObject">

                <img id="cozumPhoto" src={props.empPhoto} alt="aaa" style={{filter: "grayScale(100%)"}}/>
                    
                <p id="cozumName">
                    {props.empName}
                </p>

                <div id="numberCall">
                        <p>
                        {props.empNum}
                        </p>
                </div>
                
                
            </div> 
            ;
}

export {WaitingCall};