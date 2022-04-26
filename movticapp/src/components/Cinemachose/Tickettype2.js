import '../../css/Style.css'
import '../../css/icofont.min.css'
import Popup from './Popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';

function Ticket2(props){

    let amountpayable=props.allprice+15

    return(
        <div className="booking-summary">
        <div className="tickethead">
            <a>BOOKING SUMMARY</a>
        </div>
        <div className="ticketbodyinf">
            <div className="leftinf">
                <a className="white-18pt">{props.ticketname}</a><br/>
                <a className="white-14pt">ENGLISH-2D</a><br/>
                <a className="white-18pt">CITY WALK</a><br/>
                <a className="white-14pt">10 SEP TUE, 11:00 PM</a><br/>
                <a className="white-18pt">TICKET PRICE</a>
            </div>
            <div className="rightinf ticket">
                <a className="white-18pt">{props.ticketamount}</a><br/>
                <a className="white-14pt">TICKETS</a><br/>
                <a id="ticketbuyprice" className="white-18pt">${props.ticketprice}</a>
            </div>
           

        </div>
        <div className="ticketbodyinf foodinf">
            <div className="leftinf">
                <a className="white-18pt">COMBOS</a><br/>
                <a className="white-14pt">{props.foodnumber} {props.foodset}</a><br/>
               
                <a className="white-18pt">FOOD {'&'} BEVERAGE</a>
                
            </div>
            <div className="rightinf foodinf">
                <a className="white-18pt">${props.prices}</a><br/>
                
                <a className="white-18pt">${props.prices}</a>
            </div>
        </div><div className='clear'></div>
        <div className="ticketbodyinf price">
            
            <div className="leftinf">
                
                <a className="white-14pt">PRICE</a><br/>
              
                <a className="white-14pt">VAT</a><br/>
                
            </div>
            <div className="rightinf price">
                <a className="white-14pt">${props.allprice}</a><br/>
              
                <a className="white-14pt">$15</a><br/>
            </div>
        </div>
        <div className="payable-amount">
            <a className="white-18pt">AMOUNT PAYABLE</a> <a style={{marginLeft: 80}} className="white-18pt">${amountpayable}</a><br/>
           
        </div>
        
        

    </div>
        
    )
}
export default Ticket2