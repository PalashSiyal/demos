import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import "./main.css";
import vcIcon from "../assests/Logo Sample.png";
import settingIcon from "../assests/setting.svg";
import personIcon from "../assests/personIcon.png";
import logo from "../assests/Logo.png";
import { Mic } from "../components/icons";
import { Camera } from "../components/icons/Camera";

function Main() {
  return (
    <div className="container">
      <div className="header">
        <div className="vcIcon-container">
          <img className="vc-icon" src={vcIcon}></img>
        </div>
        <div className="header-discription">
          <p className="header-time">23 March 2023, 2:04 PM</p>
          <div className="header-setting">
            <img className="settings-icon" src={settingIcon}></img>
          </div>
          <div className="header-avtar">
            <img className="person-icon" src={personIcon}></img>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="content">
          <div className="sidebar-content">
            <div></div>
            <div className="sidebar-main">
              <div className="sidebar-logo">
                <img className="logo" src={logo}></img>
              </div>
              <div className="sidebar-heading">
                <p>Secure video conferencing</p>
                <p>For everyone</p>
              </div>
              <Stack className="sidebar-buttons" direction="horizontal" gap={4}>
                <Button variant="primary" className="home-button">
                  New Meeting
                </Button>
                <Button variant="dark" className="home-button">
                  Sign in
                </Button>
              </Stack>
              <div className="sidebar-link">Create your account</div>
            </div>
            <div className="version-text">
              <p>Version 1.0</p>
            </div>
          </div>

          <div className="image-container">
            <img className="preview" src={personIcon} height="100px"></img>
            <div className="home-action-container">
              <div className="home-action-icons">
                <Mic color="#ffffff" />
              </div>
              <div className="home-action-icons">
                <Camera color="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
