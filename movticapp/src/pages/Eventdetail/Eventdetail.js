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
import Eventdetail2 from './Eventdetail-2';

function Eventdetail ()  {
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
      const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Event/${id}`;
      const [event, setEvent] = useState(null)
      useEffect(() =>{
          axios.get(url)
          .then(response =>{
              setEvent(response.data)
  
          })
  
      }, [url])

    if(event){
        return (
            <div class="event-banner">
            <div class="Divall">
            <div class="content">
                <div class="playicon">
                    <img class="playbtn" src={process.env.PUBLIC_URL+"/img/play-button2.png"}/>
                    
                </div>
                <div class="digitalmarketing">
                    <div class="digi-intro"><a class="white-28">{event.name}</a>
                    </div>
                    <div class="digitalmarketing-clock">
                        <a class="white-36">28 : 11 : 56 : 21</a><br/>
                        <a class="white-16">DAYS HRS MIN SEC</a>
                    </div>
                    <button class="bookticketbtn" > <Link  style={{textDecoration:'none', color:'white'}} to={"/Eventdetail2/"+event.id}>BOOK TICKET</Link></button>
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

                        <a class="white-50">{event.name}</a><br/>
                        <a class="white--16pt normalfont">{event.about}
                        </a><br/>
                        <button class="bookticketbtn" ><Link  style={{textDecoration:'none', color:'white'}} to={"/Eventdetail2/"+event.id} >BOOK TICKET</Link></button>
                    </div>
                    <div class="event-pic-info">
                        <div class="image-holder">
                        <img src={event.image} alt="" className="event-img" />
                        </div>
                        <div class="outline">
                        </div>
                    </div>
                </div>
                <div class="clear"></div>
            </div>  
            </div>
            <div class="imgh657">
                <div class="image-holder w503-657">
                    <div class="imgstyle">
                        <img class="playbtn" src={process.env.PUBLIC_URL+"/img/loupe.png"}/>
                    </div>
                    <img class="bluescale w503-657" src={event.image}/>
                </div>
                <div class="image-holder w476-330">
                    <div class="imgstyle">
                        <img class="playbtn" src={process.env.PUBLIC_URL+"/img/loupe.png"}/>
                    </div>
                    <img class="bluescale w476-330" src={event.image}/>
                </div>
                <div class="image-holder w945-657">
                    <div class="imgstyle">
                        <img class="playbtn" src={process.env.PUBLIC_URL+"/img/loupe.png"}/>
                    </div>
                    <img class="bluescale w945-657" src={event.image}/>
                    
                </div>
            </div>
            <div class="Divall">
                <div class="eventdetail-body-info ">
                    <div class="event-text-info body2">
                        <a class="aqua-24">listen to the</a><br/>

                        <a class="white-50">event speaker</a><br/>
                        <a class="white--16pt normalfont">World is committed to making participation in the event a harassment free experience for <br/>everyone, regardless of level of experience, gender, gender identity and expression</a>
                        
                    </div>
                            <Speakerinfo/>
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




export default Eventdetail;
