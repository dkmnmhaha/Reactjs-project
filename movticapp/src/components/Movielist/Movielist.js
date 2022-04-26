

import '../../css/Style.css'
import '../../css/icofont.min.css'
import Moviecard from '../Moviecard/Moviecard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Movielist(props) {
   
    return (
  
            <Link style={{textDecoration: "none"}} to={"/Moviedetail/"+props.movie.id}>
            <div className="movie-card">
                       
                       <div className="card-head">
                               
                           <img src={props.movie.movie_img} alt="" className="card-img" />
                           </div>
                           
                       <div className="card-body">
                           
                           <h1  className="card-title">{props.movie.name}</h1>
                           <div className="Line_dashed"></div>
                           <div className="card-info">
                               <i className="tomato"></i>
                               <a className="tomatoscore">{props.movie.tomato}%</a>
                               <i className="popcorn"></i>
                               <a className="popcornscore">{props.movie.popcorn}%</a>
               
                       </div>
                       </div>
               
                   </div>
            </Link>

                              
          
     
          )

    }



export default  Movielist;
