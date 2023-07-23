// import React from "react";
// import { Button, Col, Container, Row, Stack } from "react-bootstrap";
// import "./main.css";
// import vcIcon from "../assests/Logo Sample.png";
// import settingIcon from "../assests/setting.svg";
// import personIcon from "../assests/personIcon.png";
// import logo from "../assests/Logo.png";
// import { Mic } from "../components/icons";
// import { Camera } from "../components/icons/Camera";

// function Main() {
//     return(
        
//         <div className="home-page">

//             <div className="header">
                
//                 <div className="logo">
//                 </div>

//                 <div className="description">
//                     <div className="time-and-date">23 March 2023, 2:04 PM</div> 
//                     <div className="setting-icon">
                  
//                     </div>
//                 <div className="avatar">
//                     <img className="person-icon" src={personIcon} alt="" />
//                 </div>
//                 </div>

//             </div>
            

//             <div className="main-content">
//                 <div className="left-content">
//                     <div className="company-logo"></div>
//                     <div className="main-text" >Secure video conferencing For everyone</div>
//                     <button className="left-btn">
//                         <div className="left-btn-text">
//                             New Meeting
//                         </div>
//                     </button>
//                     <button className="right-btn"><div className="right-btn-text">Join Meeting</div></button>
//                     <a href="#" className="signup">Create your account</a>
//                 </div>
                
                
//                 <div className="right-content"></div>

//                 <div className="version-text">Version 1.0</div>
//             </div>

//         </div>
        
//     )
// }

// export default Main;



import React from "react";
import "./main.css";
import personIcon from "../assests/personIcon.png";

function Main() {
    return(
        
        <div className="home-page">

            <div className="header">
                
                <div className="logo">
                </div>

                <div className="description">
                    <div className="time-and-date">23 March 2023, 2:04 PM</div> 
                    <div className="setting-icon">
                
                    </div>
                <div className="avatar">
                    <img className="person-icon" src={personIcon} alt="" />
                </div>
                </div>

            </div>
            

            <div className="main-content">
                <div className="left-content">
                    <div></div>
                   <div className="lft-content"> <div className="company-logo"></div>
                    <p className="main-text" >Secure video conferencing For everyone</p>
                    <div className="btnn">
                    <button className="custom-btn left-btn">
                        <p className="left-btn-text">
                            New Meeting
                        </p>
                    </button>
                    <button className="custom-btn right-btn"><p className="right-btn-text">Join Meeting</p></button></div>
                    <a href="test" className="signup">Create your account</a>
                    </div>
                <div className="version-text">Version 1.0</div>
                </div>
                
                
                <div className="right-content"></div>

            </div>

        </div>
        
    )
}

export default Main;