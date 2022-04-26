

import '../../css/Style.css'
import '../../css/icofont.min.css'
import Moviecard from '../Moviecard/Moviecard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Eventcard(props) {

   
    return (
  
            <Link style={{textDecoration: "none"}} to={"/Eventdetail/"+props.event.id}>
            <div className="movie-card">
                       
                       <div className="card-head">
                        <div className="bgdate"><a class="date-corner">28</a><br/><a class="month-corner">Dec</a></div>
                           <img src={process.env.PUBLIC_URL+props.event.image} alt="" className="card-img" />
                           </div>
                           
                       <div className="card-body">
                           
                           <h1  className="card-title">{props.event.name}</h1>
                           <div className="Line_dashed"></div>
                           <div className="card-info">
                                <span className="location"> {props.event.location}</span>
               
                       </div>
                       </div>
               
                   </div>
            </Link>

                              
          
     
          )

    }



export default  Eventcard;