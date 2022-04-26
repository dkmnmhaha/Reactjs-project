import React from 'react';
import Popup from 'reactjs-popup';
import '../../css/Style.css'
import '../../css/icofont.min.css'
import { Link } from 'react-router-dom';

export default (props) => (
  <Popup
    trigger={<button class="ticket-background"> {props.time} </button>}
    popuppage
    nested
    
  >
    {close => (
      <div className="popuppage">

        
        <div className="content">
            <a className='black-18'>Welcome!</a><br/>
            <a className="aqua-50">Select your seat</a>
        </div>

        <img style={{marginTop:30}}src={process.env.PUBLIC_URL+"/img/selseat.png"}/>


        <div className="actions">
        
          <button className="makepayment"><Link style={{textDecoration:'none', color:'white'}} to={"/Seatchose/"+props.id}>seat plan {'>'} </Link>
            
          </button>
        </div>
      </div>
    )}
  </Popup>
);