import React from "react";

import './firstpage.css';
import Rightpage from "./Rightpage";
import BR from './Berlin.jpg';
import PA from './Paris.jpg';
import NY from './New york.jpg';

function Leftpage() {
    return (
    <div className="right">
         <Rightpage />
        <br></br>
            <input type="text"className="search"placeholder="Search new places..."></input>
                <h1>Weather Forecast</h1>
        <div className="Newimg">
        <img className="Img2" src= {BR} alt="Berlin"/>
        <img className="Img2" src= {PA} alt="Paris"/>
        <img className="Img2" src= {NY} alt="New York"/>
        </div>
     <div className="row">
        <div className="col">
            <h4> Week </h4>
                 <ul>
                    <li>Sunday</li>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                </ul>
        </div>     
        <div className="col">
            <h4> Month </h4>
                 <ul>
                    <li>54%</li>
                    <li>54%</li>
                    <li>54%</li>
                    <li>54%</li>
                    <li>54%</li>
                    <li>54%</li>
                </ul>
        </div>   
      </div>    
     
    </div>
)}

export default Leftpage;