
import Moviecard from '../../components/Moviecard/Moviecard';
import '../../css/Style.css'
import '../../css/icofont.min.css'
import { Component } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movielist from '../../components/Movielist/Movielist';
import { useAxiosGet } from '../../Hooks/HttpRequest';
import Footbar from '../../components/Footbar/Footbar';

function Moviepage() {
  
  const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Movie?page=1&limit=12`;
  let movies = useAxiosGet(url)
let content=null
if(movies.error){
  content=<p>Error</p>
}
if(movies.loading){
  content=<p>loading</p>
}
if(movies.data){
  content=
    movies.data.map((movie, key)=>
    

        <Movielist
          movie={movie}
        />

  
  )
}
    return (
      <div class="event-banner moviepage">
                
                <div className="Divall">
                  <div className="DivIntro moviepage">
                      <a className="Intro">GET MOVIE TIKETS</a><br/>
                      <a className="Intro2">Buy movie tickets in advance, find movie times watch trailers, <br/>read movie reviews and much more</a>
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
                                  <i className="Icon_5"></i>
                                  <div className="city"> 
                                      
                                      <label for="city">CITY</label>
                                      <select  name="city" id="city">
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
  
              <div  className="leftbar moviepage">
                  
                 
                  <div className="leftbanner1 moviepage">                    
                  </div>
                  <div className="filterby">
                      <h1 >Filter By</h1>
                      <a className="clear-all">Clear All</a>
                  </div>
                  <div className="filter-grid">
                      <div className="language-filter language">
                          <b>LANGUAGE</b>
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
  
  
  
                          </div>
  
                      </div>   
   
                      <div className="language-filter experience">
                          <b>EXPERIENCE</b>
                          <div className="line moviepage"></div>
                          <div className="chxbx">
                              <label className="container2">2D
                                  <input type="checkbox" />
                                  <span className="chckmrk"></span>
                                </label>
                                
                                <label className="container2">3D
                                  <input type="checkbox"/>
                                  <span className="chckmrk"></span>
                                </label>
                                
                          </div>
                          <div className="line moviepage bottom"></div>
                          <a className="view-more">View more <i className="expand_"></i></a>                        
                      </div>
                      
                  
                  
                      
                      <div className="language-filter gerne">
                          <b>GERNE</b>
                          <div className="line moviepage"></div>
                          <div className="chxbx">
                              <label className="container2">TAMIL
                                  <input type="checkbox" />
                                  <span className="chckmrk"></span>
                                </label>
                                
                                <label className="container2">TELUGU
                                  <input type="checkbox"/>
                                  <span className="chckmrk"></span>
                                </label>
                                <label className="container2">TAMIL
                                  <input type="checkbox" />
                                  <span className="chckmrk"></span>
                                </label>
                                
                                <label className="container2">TELUGU
                                  <input type="checkbox"/>
                                  <span className="chckmrk"></span>
                                </label>
                                <label className="container2">TAMIL
                                  <input type="checkbox" />
                                  <span className="chckmrk"></span>
                                </label>
                                
                                <label className="container2">TELUGU
                                  <input type="checkbox"/>
                                  <span className="chckmrk"></span>
                                </label>
                                <label className="container2">TAMIL
                                  <input type="checkbox" />
                                  <span className="chckmrk"></span>
                                </label>
                                
                                <label className="container2">TELUGU
                                  <input type="checkbox"/>
                                  <span className="chckmrk"></span>
                                </label>
                                <label className="container2">TAMIL
                                  <input type="checkbox" />
                                  <span className="chckmrk"></span>
                                </label>
                                
                                <label className="container2">TELUGU
                                  <input type="checkbox"/>
                                  <span className="chckmrk"></span>
                                </label>
                                
                          </div>
                          <div className="line moviepage bottom"></div>
                          
                          <a className="view-more">View more <i className="expand_"></i></a>
                          
                      </div>
                  </div>
                      
  
                  
  
                 <div className="leftbanner3"></div>
  
              </div>
  
              <div  className="rightbar moviepage">
                  <div className="filter-bar">
  
                      <div className="filter-zone">
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
                      <div className="grid-list">
                          <button className="grid-view"><img src={process.env.PUBLIC_URL+"/img/grid.png"}/></button>
                          <button className="list-view"><img  src={process.env.PUBLIC_URL+"/img/list.png"}></img></button>
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

export default Moviepage;
