import React from "react";
import { FaIcons } from "react-icons/fa";
import { Link } from "react-router-dom";
import './dashboard.css'; 

export default function Tabs() {

  const termForm=()=>{

  }

  const courseForm=()=>{
    
  }

  const manageUser=()=>{
    
  }


  return (
    <>
      <div className="nav-tabs">
        <a href="" onClick={()=>termForm()}><h4>Term</h4></a>
        <a href="" onClick={()=>courseForm()}><h4>Courses</h4></a>
        <a href="" onClick={()=>manageUser()}><h4>Manage Users</h4></a>
      </div>

    </>


  )
}