import '../../css/Style.css'
import '../../css/icofont.min.css'
import Popup from './Popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Ticket(props){
    let totalprice= props.ticketprice+props.price
    let amountpayable=totalprice+15
   let ticketdata=null
        

   

    return(
        <div className="booking-summary">
        <div className="tickethead">
            <a>BOOKING SUMMARY</a>
        </div>
        <div className="ticketbodyinf">
            <div className="leftinf">
                <a className="white-18pt">{props.name}</a><br/>
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
                <a className="white-14pt">{props.number} {props.foodset}</a><br/>
               
                <a className="white-18pt">FOOD {'&'} BEVERAGE</a>
                
            </div>
            <div className="rightinf foodinf">
                <a className="white-18pt">${props.price}</a><br/>
                
                <a className="white-18pt">${props.price}</a>
            </div>
        </div><div className='clear'></div>
        <div className="ticketbodyinf price">
            
            <div className="leftinf">
                
                <a className="white-14pt">PRICE</a><br/>
              
                <a className="white-14pt">VAT</a><br/>
                
            </div>
            <div className="rightinf price">
                <a className="white-14pt">${totalprice}</a><br/>
              
                <a className="white-14pt">$15</a><br/>
            </div>
        </div>
        <div className="payable-amount">
            <a className="white-18pt">AMOUNT PAYABLE</a> <a style={{marginLeft: 80}} className="white-18pt">${amountpayable}</a><br/>
              <div id="btnproceed"> <button>
                  <Link 
              style={{textDecoration:'none', color:'white'}}
              to={"/Checkout/"+props.id}state={
                ticketdata=
                {
                    ticketname:props.name,
                    ticketamount:props.ticketamount,
                    ticketprice:props.ticketprice,
                    foodnumber:props.number,
                    foodset:props.foodset,
                    prices:props.price,
                    allprice:totalprice,
                    checkoutstyle:props.checkoutstyle
        
                }
        
                }
              
              >PROCEED
              </Link></button></div>
        </div>
        <div id="divnote" style={{marginTop: 30}}>
            <a  className="white-18pt">NOTE:</a><br/>
            <a className="white-14pt">Please give us 15 minutes for F& B preparation  once you're at the cinema</a>
        </div>
      

    </div>
        
    )
}
export default Ticket