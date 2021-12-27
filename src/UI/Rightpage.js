import React from "react";

import PP from './Profilepicture.jpg'
import './Rightpage.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CloudIcon from '@material-ui/icons/Cloud';

function Rightpage() {

    return (
        <div className="Side">
            <img className="Img" src= {PP} alt="Profile Pic"/>
                <div className="text">
                    <h3>Notification</h3> <NotificationsIcon/>
                </div>

                <div className="text1">
                    <h2>Today</h2> <CloudIcon/>
                    <p>Sat,3 Aug</p>
                </div> 
                <div className="text2">
                    <h1 className="pxt">28<p> Berlin, Germany</p></h1>
                    <h3>Feels like 32 - Sunset 20:15</h3>
                    
                </div>

        </div>
    )
}

export default Rightpage;

//linear-gradient(
    //to right,
    //#F2FBFF 70%,
    //#100E3B 30%
//) ;