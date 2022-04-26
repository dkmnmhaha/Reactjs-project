
import Eventcard from '../../components/Eventcard/Eventcard';
import '../../css/Style.css'
import '../../css/icofont.min.css'
import { Component } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movielist from '../../components/Movielist/Movielist';
import { useAxiosGet } from '../../Hooks/HttpRequest';
import Footbar from '../../components/Footbar/Footbar';

function Eventpage() {
  

const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Event?page=1&limit=12`;
let events = useAxiosGet(url)
let content=null
if(events.error){
    content=<p>Error</p>
}
if(events.loading){
    content=<p>loading</p>
}
if(events.data){
    content=
    events.data.map((event, key)=>
    

        <Eventcard
        event={event}
        />

    
    )
}
    return (
        <div class="event-banner eventpage">
                
        
                <div className="Divall">
            
       
                <div className="DivIntro moviepage">
                    <a className="Intro">GET EVENTS TICKETS</a><br/>
                    <a className="Intro2">Buy event tickets in advance, find event time and much more</a>
                </div>
                <div className="searchbar moviepage">
                    <a className="welcome1">WELCOME TO MOVTIC</a><br/>
                    <a className="welcome2">WHAT ARE YOU LOOKING FOR</a>
                    <div className="groupbtn">
                        
                        <button className="btnmovies"> <i className="icon_"></i>MOVIES</button>
                        <button className="btnevents"><i className="icon_1"></i>EVENTS</button>
                        <button className="btnsports"><i className="icon_2"></i>SPORTS</button>
                    </div>
                    <div className="advancesearch">
                       
                        <form className="search4movies">
                                <div className="searchbox">
                                    <input type="text" placeholder="Search for movies"/>
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </div>
                                <i className="Icon_5 CATEGORIES"></i>
                                <div className="city CATEGORIES"> 
                                    
                                    <label for="categories">CATEGORIES</label>
                                    <select  name="categories" id="categories">
                                        <option value="London">London</option>
                                        <option value="Hanoi">Hanoi</option>
                                        <option value="Tokyo">Tokyo</option>
                                        <option value="Paris">Paris</option>
                                    </select>  
                                </div> 
                                <i className="Icon_6"></i>
                                <div className="date"> 
                                    <i className="icofont-simple-down"></i>
                                    <label for="date">DATE</label>
                                    <input type="text" id="datepicker" placeholder="31/12/2019"/>
                                </div> 
                                <i className="Icon_7"></i>
                                <div className="cinema"> 
                                    
                                    <label for="cinema">CINEMA</label>
                                    <select  name="cinema" id="cars">
                                        <option value="Awaken">Awaken</option>
                                        <option value="Cinemax">Cinemax</option>
                                        <option value="Lotte">Lotte</option>
                                        
                                    </select> 
                                </div> 
                    
     
                           
    
                        </form>

                        
                    </div>
            </div>
        <div className="content">

            <div  className="leftbar eventpage">
                
               
                <div className="leftbanner1 moviepage">                    
                </div>
                <div className="filterby">
                    <h1 >Filter By</h1>
                    <a className="clear-all">Clear All</a>
                </div>
                <div className="filter-grid">
                    <div className="language-filter language">
                        <b>CATEGORIES</b>
                        <div className="line moviepage">

                        </div>
                        <div className="chxbx">
                            <label className="container2">TAMIL
                                <input type="checkbox" />
                                <span className="chckmrk"></span>
                              </label>
                              
                              <label className="container2">TELUGU
                                <input type="checkbox"/>
                                <span className="chckmrk"></span>
                              </label>
                              
                              <label className="container2">HINDI
                                <input type="checkbox"/>
                                <span className="chckmrk"></span>
                              </label>
                              
                              <label className="container2">MULTIPLE LANGUAGE
                                <input type="checkbox"/>
                                <span className="chckmrk"></span>
                              </label>
                              <label className="container2">GUJARATHI
                                <input type="checkbox"/>
                                <span className="chckmrk"></span>
                              </label>
                              
                              <label className="container2">BANGLA
                                <input type="checkbox"/>
                                <span className="chckmrk"></span>
                              </label>
                              <label className="container2">BANGLA
                                <input type="checkbox"/>
                                <span className="chckmrk"></span>
                              </label>
                              <label className="container2">BANGLA
                                <input type="checkbox"/>
                                <span className="chckmrk"></span>
                              </label>
                              



                        </div>

                    </div>   

                </div>
               <div className="leftbanner3"></div>

            </div>

            <div  className="rightbar moviepage">
                <div className="filter-bar">

                    <div className="filter-zone  eventpage">
                        <div className="filter-show">                                     
                            <label for="show">Show:</label>
                            <select  name="show" id="show">
                                <option value="3">3</option>
                                <option value="6">6</option>
                                <option value="9">9</option>
                                <option value="12">12</option>
                            </select>  
                        </div> 
                        <div className="filter-sortby">                                     
                            <label for="Sort by">Sort by</label>
                            <select  name="Sort by" id="Sort by">
                                <option value="Now showing">Now showing</option>
                                <option value="Coming soon">Coming soon</option>
                                <option value="Exclusive">Exclusive</option>                           
                            </select>  
                        </div> 
                    </div>

                    
                </div> 
                <div className="movie-div">

                    {content}
                   
                    

                </div>
               
                
            </div>
        <div className="clear"></div>
     </div>
          <Footbar/>
            
        
            
        </div>
  
  
  
      </div>
    );
  


}

export default  Eventpage;
