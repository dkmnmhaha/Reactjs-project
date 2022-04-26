import popcorn from '../../img/Iconpopcorn.png'
import topmato from '../../img/Icontomato.png'
import '../../css/Style.css'
import '../../css/icofont.min.css'
import Summary from '../../components/summary/Summary';
import Userreview from '../../components/Userreview/Userreview';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useAxiosGet } from '../../Hooks/HttpRequest';
import Speakerinfo from '../../components/Speakerinfo/Speakerinfo';
import Recentstatics from '../../components/Recentstatics/Recentstatics';
import Questions from '../../components/Questions/Questions';
import Footbar from '../../components/Footbar/Footbar';

function Eventdetail2 ()  {
    var coll = document.getElementsByClassName("expand");
    var i;
   

      const {id} = useParams()
      const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Event/${id}`;
      const [event, setEvent] = useState(null)
      useEffect(() =>{
          axios.get(url)
          .then(response =>{
              setEvent(response.data)
  
          })
  
      }, [url])
 let ticketdata=null
    if(event){
        return (
            <div class="event-banner eventdetail">  
        
            <div class="Divall" id="wrapper">
    
    
                        <div class="DivIntro-moviedetail">
                            <a class="Intro">{event.name}</a><br/>
                            <a class="grey-20">{event.location}</a>
                        </div>
            </div>
            <div class="ddd"></div>
            <div class="Divall" id="wrapper">
                <div class="categories moviedetail-style">
                    <button onclick="history.back()"> {'<<'} BACK </button>
                   <div class="choose-item">                  
                       <div class="pick-time">
                        <label for="time-item">MON, SEP 09 2019</label>
                       
                        
                     
                       </div>
               
                   </div>
                   <div class="time-left">
                    <h2>05:00</h2>
                    <a>mins left</a>
                    </div>
    
                </div>
            </div>            
    
            <div class="Divall" id="wrapper">        
         <div class="content">
            <div class="event-text-info body3">
                <a class="aqua-24">simple pricing</a><br/>
                <a class="white-50">Make an Appointment</a><br/>
                <a class="white--16pt normalfont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et <br/>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</a>
            </div>
            <div class="tickets-grid">
                <div class="ticket-book silver-ticket">
                    <img src="/img/silverticket.png"/><br/>
                    <a class="white-16pt color-black-">Standard Ticket</a><br/>
                    <a class="_50"><sup class="_28">$</sup>49</a>
                    <div class="benefits">
                        <div class="iconzone">
                             <img src="/img/IconCheck.png"/>
                        </div>
                        <div class="txtzone">
                            <a class="white-16pt color-black-">Full access to all lectures and workshops</a>
                        </div>
                        <div class="clear"></div>  
                    </div>
                    <div class="benefits">
                        <div class="iconzone">
                             <img src="/img/IconX.png"/>
                        </div>
                        <div class="txtzone">
                            <a class="white-16pt color-black-">Video presentations</a>
                        </div>
                        <div class="clear"></div>  
                    </div>
                    <div class="benefits">
                        <div class="iconzone">
                             <img src="/img/IconX.png"/>
                        </div>
                        <div class="txtzone">
                            <a class="white-16pt color-black-">Meet all of our event speakers</a>
                        </div>
                        <div class="clear"></div>  
                    </div>
                    <button class="bookticketbtn"><Link
              style={{textDecoration:'none', color:'white'}}
              to={"/Checkout/"+event.id}state={
                ticketdata=
                {
                    name:event.name,
                    checkoutstyle:2
        
                }
                  
              }
              
              >BOOK TICKET
              </Link></button>
                </div>
                <div class="ticket-book premium-ticket">
                    <div class="hotticket"></div>
                    <img src="/img/premiumticket.png"/><br/>
                    <a class="white-16pt color-black-">Premium Ticket</a><br/>
                    <a class="_50"><sup class="_28">$</sup>79</a>
                    <div class="benefits">
                        <div class="iconzone">
                             <img src="/img/IconCheck.png"/>
                        </div>
                        <div class="txtzone">
                            <a class="white-16pt color-black-">Full access to all lectures and workshops</a>
                        </div>
                        <div class="clear"></div>  
                    </div>
                    <div class="benefits">
                        <div class="iconzone">
                             <img src="/img/IconCheck.png"/>
                        </div>
                        <div class="txtzone">
                            <a class="white-16pt color-black-">Video presentations</a>
                        </div>
                        <div class="clear"></div>  
                    </div>
                    <div class="benefits">
                        <div class="iconzone">
                             <img src="/img/IconX.png"/>
                        </div>
                        <div class="txtzone">
                            <a class="white-16pt color-black-">Meet all of our event speakers</a>
                        </div>
                        <div class="clear"></div>  
                    </div>
                    <button class="bookticketbtn" ><Link
              style={{textDecoration:'none', color:'white'}}
              to={"/Checkout/"+event.id}state={
                ticketdata=
                {
                    name:event.name,
                    checkoutstyle:2
        
                }
                  
              }
              
              >BOOK TICKET
              </Link></button>
                    
                    
                </div>
                <div class="ticket-book vip-ticket">
                    <img src="/img/vipticket.png"/><br/>
                    <a class="white-16pt color-black-">VIP Ticket</a><br/>
                    <a class="_50"><sup class="_28">$</sup>99</a>
                    <div class="benefits">
                        <div class="iconzone">
                             <img src="/img/IconCheck.png"/>
                        </div>
                        <div class="txtzone">
                            <a class="white-16pt color-black-">Full access to all lectures and workshops</a>
                        </div>
                        <div class="clear"></div>  
                    </div>
                    <div class="benefits">
                        <div class="iconzone">
                             <img src="/img/IconCheck.png"/>
                        </div>
                        <div class="txtzone">
                            <a class="white-16pt color-black-">Video presentations</a>
                        </div>
                        <div class="clear"></div>  
                    </div>
                    <div class="benefits">
                        <div class="iconzone">
                             <img src="/img/IconCheck.png"/>
                        </div>
                        <div class="txtzone">
                            <a class="white-16pt color-black-">Meet all of our event speakers</a>
                        </div>
                        <div class="clear"></div>  
                    </div>
                    <button class="bookticketbtn" >
                        <Link
                            style={{textDecoration:'none', color:'white'}}
                            to={"/Checkout/"+event.id}state={
                                ticketdata=
                                {
                                    name:event.name,
                                    checkoutstyle:2
                                }
     
                            }
                            
                        >BOOK TICKET
                         </Link>
              </button>
                </div>
            </div>
                    
                    
                    
            <div class="clear"></div>     
                  
        </div>
            <Footbar/>
    
               
    </div>
    </div>
    
 



    );

    }

          
  }




export default Eventdetail2;
