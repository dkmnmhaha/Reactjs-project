
import '../../css/Style.css'
import '../../css/icofont.min.css'

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useAxiosGet } from '../../Hooks/HttpRequest';
import Speakerinfo from '../../components/Speakerinfo/Speakerinfo';
import Footbar from '../../components/Footbar/Footbar';


function Speakerpage ()  {
    
    

      const {id} = useParams()
      const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Cast/${id}`;
      const [cast, setEvent] = useState(null)
      useEffect(() =>{
          axios.get(url)
          .then(response =>{
              setEvent(response.data)
  
          })
  
      }, [url])

    if(cast){
        return (
            <div class="event-banner speakerdetail">
            <div class="Divall">
            
        
                
                <div class="DivIntro-moviedetail">
                    <a class="Intro">Speaker Profile</a><br/>
                    <a class="grey-20">Home {">"} Event {">"} Speaker Profile</a>
                </div>
                
        
      
                <div class="eventdetail-body-info ">
                    <div class="speaker-detail">
                        <div class="speaker-info">
                            <div class="speaker-img-holder">
                                <img src={cast.avatar}/>
                            </div>
                            <div class="speaker-txt-holder">
                                <a class="white-24pt">www.website.com </a><br/>
                                
                            </div>
                        </div>
                        <div class="speaker-info-text">
                            <a class="white-50">{cast.name}</a><br/>
                            <a class="white--16pt normalfont" style={{lineHeight: 3}}>{cast.role}</a>
                            <div class="social">
                                <div class="img-text">
                                    <div class="icon-holder"><img src="/img/Iconmail.png"/></div>
                                    <div class="content-holder">
                                        <a class="grey-14pt">Drop us a line:<br/> <a class ="aqua-14pt">hello@movtic.com</a></a>
                                    </div>
                                    <div class="Line_solid_Vertical"></div>
                                    <div class="iconbar digitalzone">
                                        <a class="bgfb2 digitalzone"><i class="icofont-facebook"></i></a>
                                        <a class="bgtw2 digitalzone"><i class="icofont-twitter"></i></a>
                                        <a class="bggg2 digitalzone"><i class="icofont-google-plus"></i></a>
                                        <a class="bgins digitalzone"><i class="icofont-instagram"></i></a>
                                        <a class="bgpin digitalzone"><i class="icofont-pinterest"></i></a>        
                                    </div>
                                 </div>
                            </div>
                            <a class="white-28" style={{lineHeight: 2}}>About Me</a><br/>
                            <a class="white--16pt normalfont">
                                {cast.aboutme}
                            </a> 
                        </div>
                    </div>
                    <div class="event-text-info body2" style={{marginTop:120}}>
                        <a class="aqua-24">amazing people</a><br/>

                        <a class="white-50">Other Speakers</a><br/>
                        <a class="white--16pt normalfont">World is committed to making participation in the event a harassment free experience for <br/>everyone, regardless of level of experience, gender, gender identity and expression</a>
                        
                    </div>
                   <Speakerinfo/>
                    <div class="clear"></div>
            </div>
            
            
       



           
                <div class="clear"></div>
              
         
            
            <Footbar/>
  
        </div>
        </div>

 



    );

    

          
  }
}





export default Speakerpage;
