import '../../css/Style.css'
import '../../css/icofont.min.css'
import Popup from './Popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';

function Cinemachose(props){

    return(
        <div class="booking-item">
                        <div class="booking-name">
                            <i class="icofont-heart"></i>
                           
                                <a style={{width:300}}>{props.cinema}</a>
                            
                            
                            <button class="bggps"></button></div>
                            <div class="booking-tickets"> 
                            <Popup time='9:40'  id={props.id}/>   
                            <Popup time='13:45' id={props.id}/> 
                            <Popup time='15:45' id={props.id}/> 
                            <Popup time='19:50' id={props.id}/>                      

                            
                        </div>
     
       
                    </div>
        
    )
}
export default Cinemachose
