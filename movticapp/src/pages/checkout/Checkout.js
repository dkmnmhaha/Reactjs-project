
import '../../css/Style.css'
import '../../css/icofont.min.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Ticket2 from '../../components/Cinemachose/Tickettype2';
import Footbar from '../../components/Footbar/Footbar';
import Ticket from '../../components/Cinemachose/Ticket';
import Checkout1 from '../../components/checkout/checkout1';
import Checkout2 from '../../components/checkout/checkout2';
import Checkout3 from '../../components/checkout/checkout3';

function Checkout (props)  {

    
      const {id} = useParams()
      const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Movie/${id}`;
      const [movie, setMovie] = useState(null)
      useEffect(() =>{
          axios.get(url)
          .then(response =>{
              setMovie(response.data)
  
          })
  
      }, [url])
    
    
const location = useLocation();
const ticketdata = location.state;
console.log(ticketdata)
    let checkoutcntend=null
    if(ticketdata.checkoutstyle==1){
        checkoutcntend=<Checkout1/>
    }
    if(ticketdata.checkoutstyle==2){
        checkoutcntend=<Checkout2/>
    }
    if(ticketdata.checkoutstyle==3){
        checkoutcntend=<Checkout3/>
    }
    
    if(movie){
        return (
            <div className="header moviedetail">  
        
            <div className="Divall" id="wrapper">
    
              
    
                        <div className="DivIntro-moviedetail">
                            <a className="Intro">{ticketdata.name}</a><br/>
                            <a className="Intro2">City Walk | English - 2D</a>
                        </div>
            </div>
            <div className="ddd"></div>
            <div className="Divall" id="wrapper">
                <div className="categories moviedetail-style">
                    <button onclick="history.back()"> {'<<'}BACK </button>
                   <div className="choose-item">                  
                       <div className="pick-time">
                        <label for="time-item">MON, SEP 09 2019</label>
                        <input type="time" id="appt" name="appt"></input>
                        
                        
                       </div>
               
                   </div>
                   <div className="time-left">
                    <h2>05:00</h2>
                    <a>mins left</a>
                    </div>
    
                </div>
            </div>            
    
            <div className="Divall" id="wrapper">      
     <div className="content">
                
               
                
     <div id="ticketbuy" className="rightbar2 seat-select" >
    
    <div id="checkoutpage" className="foodorder">
            <div className="member-signin">
                <div className="sign-in"><button><i className="icofont-ui-user"></i></button> <a className="white-16pt"> Sign In</a></div>
                <div>
                    <a className="white-24pt">Already a Movtic Member?</a><br/>
                    <a className="white--16pt">Sign in to earn points and make booking easier!</a><br/>
                </div>                                
            </div>
            <div className="contact-detail">
                <a className="white-24pt">Share your Contact  Details </a>
                <div className="Line_dashed contact-detail"></div>
               
                    <input className="normalinput" id="fullname "type="text" placeholder="Full Name"/>
                    <input className="normalinput" id="email" type="text" placeholder="Enter Your Mail"/><br/>
                    <input className="normalinput" id="phonenumber" type="text" placeholder="Enter Your Phone Number"/>
                    <button  className="normalbtn">CONTINUE</button>
                                           
            </div>
            {checkoutcntend}
            <div className="contact-detail">
                <a className="white-24pt">Payment Option</a>
                <div className="Line_dashed contact-detail"></div>
                <div className="payment-grid">
                    <div className="payment-option" onclick="tickfnc('payentchosed1','cardoption1')">
                        <div id="payentchosed1" className="tick" style={{display:'none'}}  ><i className="icofont-tick-mark" ></i></div>
                        <div id="cardoption1" className="card-option"> <img style={{marginTop: 18}}src={process.env.PUBLIC_URL+"/img/CardIcon.png"}/><br/><a className="white-12pt">Credit Card</a> </div>
                    </div>
                    <div className="payment-option" onclick="tickfnc('payentchosed2','cardoption2')">  
                        <div id="payentchosed2" className="tick" style={{display:'none'}}  ><i className="icofont-tick-mark" ></i></div>                                    
                        <div id="cardoption2" className="card-option"> <img style={{marginTop: 18}}src={process.env.PUBLIC_URL+"/img/CardIcon.png"}/><br/><a className="white-12pt">Debit Card</a> </div>
                    </div>
                    <div className="payment-option" onclick="tickfnc('payentchosed3','cardoption3')">   
                        <div id="payentchosed3" className="tick" style={{display:'none'}}  ><i className="icofont-tick-mark" ></i></div>                                                                       
                        <div id="cardoption3" className="card-option"> <img style={{marginTop: 30}}src={process.env.PUBLIC_URL+"/img/IconPaypal.png"}/><br/><a className="white-12pt">Paypal</a> </div>
                    </div>
                </div>
                <a className="white-18pt">Enter Your Card Details </a>
                <div className="card-detail-zone">
                   
                        <div className="div-detail">
                            <label for="carddetail">Card Detail:</label>  <br/>                 
                            <input id="carddetail"type="text"/>  
                        </div>
                        <div className="div-detail">                                            
                            <label for="nameoncard">Name On Card:</label> <br/>  
                            <input id="nameoncard" type="text"/>
                        </div>  
                        <div className="grid">
                            <div className="div-detail half" >                                          
                                <label for="expiration">Expiration</label> <br/>  
                                <input id="expiration" type="text"/>                                          
                            </div>
                            <div className="div-detail half" >
                                
                                <label for="cvv">CVV</label>  <br/> 
                                <input id="cvv" type="text"/>

                            </div>
                        </div>
                        <label className="toggle" for="quickpay"> 
                        <input  type="checkbox" id="quickpay"/>                                      
                        <div className="slider"></div>
                         </label>
                         <label className="toggle left" for="quickpay">QuikPay</label>
                         <a  className="white-14pt quickpay" >Save this card information to my Movtic account and make faster payments</a>
                         <button className="makepayment">Make Payment</button>
                    
                    <br/><a className="white-14pt">By Clicking "Make Payment" you agree to the <a style={{textDecoration: "none", color: '#5c69d2'}}href="#">terms and condition</a></a>
                </div>
                

                
            </div>
    </div>
    <Ticket2
    
        
        ticketname={ticketdata.name}
        ticketamount={ticketdata.ticketamount}
        ticketprice={ticketdata.ticketprice}
        foodnumber={ticketdata.foodnumber}
        foodset={ticketdata.foodset}
        prices={ticketdata.prices}
        allprice={ticketdata.allprice}
    
    />
   
</div>



<div className="clear"></div>  
                
        <div className="clear"></div>     
              
    </div>
  <Footbar/>

           
</div>
</div>

           
 
         


    );
    }

          
  }




export default Checkout;
