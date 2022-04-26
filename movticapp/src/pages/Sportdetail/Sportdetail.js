
import '../../css/Style.css'
import '../../css/icofont.min.css'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useAxiosGet } from '../../Hooks/HttpRequest';
import Speakerinfo from '../../components/Speakerinfo/Speakerinfo';
import Recentstatics from '../../components/Recentstatics/Recentstatics';
import Questions from '../../components/Questions/Questions';
import Footbar from '../../components/Footbar/Footbar';

function Sportdetail ()  {
    var coll = document.getElementsByClassName("expand");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
          this.innerHTML ="+";
        } else {
        
        content.style.display = "block";
        this.innerHTML ="-";
        }
      });
      
    }

      const {id} = useParams()
      const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Sport/${id}`;
      const [sport, setEvent] = useState(null)
      useEffect(() =>{
          axios.get(url)
          .then(response =>{
              setEvent(response.data)
  
          })
  
      }, [url])

    if(sport){
        return (
            <div class="event-banner sportdetail">
            <div class="Divall">
            <div class="content">
                <div class="playicon">
                    <img class="playbtn" src={process.env.PUBLIC_URL+"/img/play-button2.png"}/>
                    
                </div>
                <div class="digitalmarketing">
                    <div class="digi-intro"><a class="white-28">{sport.name}</a>
                    </div>
                    <div class="digitalmarketing-clock">
                        <a class="white-36">28 : 11 : 56 : 21</a><br/>
                        <a class="white-16">DAYS HRS MIN SEC</a>
                    </div>
                    <button class="bookticketbtn">BOOK TICKET</button>
                    <div class="clear"></div>
                    <div class="Line_solid digitalpage"></div>
                     <div class="img-text">
                        <div class="icon-holder"><img src={process.env.PUBLIC_URL+"/img/Iconworkshop.png"}/></div>
                        <div class="content-holder">
                            <a class="grey-14pt">3 Days (Friday-Sunday)<br/> 70+ Workshops</a>
                        </div>
                     </div>
                     <div class="img-text">
                        <div class="icon-holder"><img src={process.env.PUBLIC_URL+"/img/Iconlocation.png"}/></div>
                        <div class="content-holder">
                            <a class="grey-14pt">17 South Sherman Street <br/>Astoria, NY 11106 </a>
                        </div>
                     </div>
                     <div class="img-text">
                        <div class="icon-holder"><img src={process.env.PUBLIC_URL+"/img/Iconmail.png"} /></div>
                        <div class="content-holder">
                            <a class="grey-14pt">Drop us a line:<br/> <a class ="aqua-14pt">hello@movtic.com</a></a>
                        </div>
                     </div>
                     
                    <div class="iconbar digitalzone">
                        <a class="bgfb2 digitalzone"><i class="icofont-facebook"></i></a>
                        <a class="bgtw2 digitalzone"><i class="icofont-twitter"></i></a>
                        <a class="bggg2 digitalzone"><i class="icofont-google-plus"></i></a>
                        <a class="bgins digitalzone"><i class="icofont-instagram"></i></a>
                        <a class="bgpin digitalzone"><i class="icofont-pinterest"></i></a>        
                    </div>
                </div>
                <div class="eventdetail-body-info">
                    <div class="event-text-info">
                        <a class="aqua-24">are you ready to attend?</a><br/>

                        <a class="white-50">{sport.name}</a><br/>
                        <a class="white--16pt normalfont">{sport.about}
                        </a>
                        <button class="bookticketbtn" onclick="window.location='Eventdetail2.html';">BOOK TICKET</button>
                    </div>
                    <div class="event-pic-info">
                        <div class="image-holder">
                        <img src={sport.image} alt="" className="event-img" />
                        </div>
                        <div class="outline">
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>  
            </div>


            <div class="imgh457">
                <img src="./img/1920-457.png"/>
                <div class="imgh457 layer">
                    
                </div>
                <div class="clear"></div>
            </div>
            <div class="Divall">
                <div class="eventdetail-body-info body3">
                    <div class="event-text-info body2">
                        <a class="aqua-24">what we have done</a><br/>

                        <a class="white-50">our recent statics</a><br/>
                        <a class="white--16pt normalfont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut<br/> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</a>
                        
                    </div>
                    <Recentstatics/>
                    <Questions/>
                    
                    

                    <div class="clear"></div>
                    <div class="Line_solid alldiv"></div>
                    <div class="event-text-info body3">
                        <a class="aqua-24">EVENT SPONSORS</a><br/>

                        <a class="white-50">Partners & Sponsors</a><br/>
                        <a class="white--16pt normalfont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut<br/> labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</a>
                        
                    </div>
                    <div class="buttongrid">
                        <a class="tap w230" href="#">PLANTINUM SPONSORS</a>
                        <a class="tap w230" href="#">GOLD SPONSORS</a>
                        <a class="tap w230" href="#">SLIVER SPONSORS</a>
                    </div>
                    <div class="recent-statics logos">
                        <div class="bgbox logos-style">
                            <div class="icon-holder"><img src={process.env.PUBLIC_URL+"/img/themeforest.png"}/></div>
                        </div>
                        <div class="bgbox logos-style">
                            <div class="icon-holder"><img src={process.env.PUBLIC_URL+"/img/codecanyon.png"}/></div>
                        </div>
                        <div class="bgbox logos-style">
                            <div class="icon-holder"><img src={process.env.PUBLIC_URL+"/img/graphcriver.png"}/></div>
                        </div>
                        <div class="bgbox logos-style">
                            <div class="icon-holder"><img src={process.env.PUBLIC_URL+"/img/3docean.png"}/></div>
                        </div>
                        <div class="bgbox logos-style">
                            <div class="icon-holder"><img src={process.env.PUBLIC_URL+"/img/audiojungle.png"}/></div>
                        </div>
                       

                    </div>
                </div>
                
            </div>
            
            <div class="Divall">
               <Footbar/>
            </div>
            

        </div>
 



    );

    }

          
  }




export default Sportdetail;
