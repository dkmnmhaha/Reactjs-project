

import '../../css/Style.css'
import '../../css/icofont.min.css'
import Moviecard from '../Moviecard/Moviecard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Sportcard(props) {

   
    return (
  
            <Link style={{textDecoration: "none"}} to={"/Sportdetail/"+props.sport.id}>
            <div className="movie-card">
                       
                       <div className="card-head">
                        <div className="bgdate"><a class="date-corner">28</a><br/><a class="month-corner">Dec</a></div>
                           <img src={props.sport.image} alt="" className="card-img" />
                           </div>
                           
                       <div className="card-body">
                           
                           <h1  className="card-title">{props.sport.name}</h1>
                           <div className="Line_dashed"></div>
                           <div className="card-info">
                                <span className="location"> {props.sport.location}</span>
               
                       </div>
                       </div>
               
                   </div>
            </Link>

                              
          
     
          )

    }



export default  Sportcard;