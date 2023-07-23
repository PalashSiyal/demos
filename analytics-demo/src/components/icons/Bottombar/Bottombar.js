import React from 'react'
import './Bottombar.css'
// import {Container,Col,Row,Stack} from 'react-bootstrap'
import Microphone from '../../../assests/mic.svg'
import Screenshare from '../../../assests/Screenshare.svg'
// import Screenshare from '../../../assests/s'
import Hangup from '../../../assests/Hangup.svg'
import Chat from '../../../assests/Chat.svg'
import Analytics from '../../../assests/Analytics.svg'
import VideoIcon from '../../../assests/Videocamera.svg'
import { useNavigate } from "react-router-dom";

function Bottombar() {
  const navigate = useNavigate();

  const openAnalytics=(e)=>{
    navigate("/analyties");
    // console.log("object")
  }

  return (
    <>
    <div className='container'>
    <div className='bottombar'>
      <div className='analytics' onClick={openAnalytics} ><img className='icon' src={Analytics}></img><div className='text'>Call Analytics</div></div>
        <div className='activities'>
            <div><img className='icon' alt='' src={Microphone} ></img></div>
            <div><img className='icon' alt='' src={VideoIcon}></img></div>
            <div><img className='icon' alt='' src={Screenshare} ></img></div>
            <div className='call-container'><img className='call-icon' alt='' src={Hangup}></img></div>
        </div>
        <div className='chat'><div><img alt='' src={Chat}></img></div></div>
    </div>
    </div>
    </>
  )
}

export default Bottombar
