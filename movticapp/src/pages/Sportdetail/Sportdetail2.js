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

function Sportdetail2 ()  {
    var coll = document.getElementsByClassName("expand");
    var i;
   

      const {id} = useParams()
      const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Sport/${id}`;
      const [sport, setEvent] = useState(null)
      useEffect(() =>{
          axios.get(url)
          .then(response =>{
              setEvent(response.data)
  
          })
  
      }, [url])
 let ticketdata=null
    if(sport){
        return (
            <div class="event-banner eventdetail">  
        
            <div class="Divall" id="wrapper">
    
    
                        <div class="DivIntro-moviedetail">
                            <a class="Intro">{sport.name}</a><br/>
                            <a class="grey-20">{sport.location}</a>
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
            <div class="ticket-book sportstyle">
                <div class="tagg">Best View</div>
                <a class="_50"><sup class="_28">$</sup>49</a><br/>
                <a class="color-black-">Total seat: <b>900</b></a><br/>
                <button class="bookticketbtn" >PROCEED</button>
            </div>
            <div class="ticket-book sportstyle">
                <div class="tagg">Comfort Zone</div>
                <a class="_50"><sup class="_28">$</sup>79</a><br/>
                <a class="color-black-">Total seat: <b>900</b></a><br/>
                <button class="bookticketbtn" >PROCEED</button>
            </div>
            <div class="ticket-book sportstyle">
                <div class="tagg">Single Tickets</div>
                <a class="_50"><sup class="_28">$</sup>99</a><br/>
                <a class="color-black-">Total seat: <b>900</b></a><br/>
                <button class="bookticketbtn" >
                <Link
                            style={{textDecoration:'none', color:'white'}}
                            to={"/Checkout/"+sport.id}state={
                                ticketdata=
                                {
                                    name:sport.name,
                                    checkoutstyle:3
                                }
     
                            }
                            
                        >PROCEED
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




export default Sportdetail2;
