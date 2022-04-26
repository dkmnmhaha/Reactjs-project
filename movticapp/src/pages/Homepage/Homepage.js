
import '../../css/Style.css'
import '../../css/icofont.min.css'
import Shortview from '../../components/Viewstyle/Shortview';
import Allview from '../../components/Viewstyle/Allview';
import { useState } from 'react';
import Footbar from '../../components/Footbar/Footbar'


function Homepage() {

   
  return (
    <div class="event-banner homepage">

      <div className="Divall">
             
                <div className="DivIntro">
                    <a className="Intro">BOOK YOUR <br/>TICKETS FOR</a> <a className="Intro" style={{color:"#31d7a9"}}>MOVIES</a><br/>
                    <a className="Intro2">Safe, secure, reliable ticketing.Your ticket to live entertainment!</a>
                </div>
                <div className="searchbar">
                    <a className="welcome1">WELCOME TO MOVTIC<br/></a>
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
                                    <select  name="cinema" id="cinema">
                                        <option value="Awaken">Awaken</option>
                                        <option value="Cinemax">Cinemax</option>
                                        <option value="Lotte">Lotte</option>
                                        
                                    </select> 
                                </div> 
                    
     
                           
    
                        </form>

                        
                    </div>
            </div>

           
             <Shortview/>
             
          <Footbar/>


        </div>

    </div>
  );
}

export default Homepage;
