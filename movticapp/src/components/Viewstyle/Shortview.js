
import '../../css/Style.css'
import '../../css/icofont.min.css'
import { Link } from 'react-router-dom';
import { useAxiosGet } from '../../Hooks/HttpRequest';
import Movielist from '../../components/Movielist/Movielist';
import Eventcard from '../../components/Eventcard/Eventcard';
import Sportcard from '../../components/Sportcard/Sportcard';
import { useState } from 'react';
import Allview from './Allview';
import Homepage from '../../pages/Homepage/Homepage';



function Shortview (){
    const [style, setStyle] = useState(1);
  
  const changeStyle = () => {  
    setStyle(2);
  };
    


    const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Movie?page=1&limit=3`;
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
    const url2=`https://62603c6e92df0bc0f341b545.mockapi.io/Event?page=1&limit=3`;
    let events = useAxiosGet(url2)
    let content2=null
    if(events.error){
        content2=<p>Error</p>
    }
    if(events.loading){
        content2=<p>loading</p>
    }
    if(events.data){
        content2=
        events.data.map((event, key)=>
        
    
            <Eventcard
            event={event}
            />
    
        
        )
    }
    const url3=`https://62603c6e92df0bc0f341b545.mockapi.io/Sport?page=1&limit=3`;
    let sports = useAxiosGet(url3)
    let content3=null
    if(events.error){
        content3=<p>Error</p>
    }
    if(sports.loading){
        content3=<p>loading</p>
    }
    if(sports.data){
        content3=
        sports.data.map((sport, key)=>
        
    
            <Sportcard
            sport={sport}
            />
    
        
        )
    }

if(style==1){
    return(
        <div className="content" >
                   
            <div className="leftbar">
                        
                <div className="leftmenu">
                    
                    <a  className="active" href="#about"><img className="imgicon" src="./img/care.png"/> 24X7 Care</a>
                    <a className="active" href="#about"> <img className="imgicon" src="./img/assurance.png"/> 100% Asurance</a>
                    <a href="#about"><img className="imgicon" src="./img/promise.png"/>Our Promise</a>
                    
                </div>
                <div className="leftbanner1">                    
                </div>
                <div className="trendsearch">Trending Searches</div>
                <div className="trendingsearch">
                    <ul>
                        <li >
                            
                            <a className="mainmenuobj" href="#home">Mars<br/></a>
                            <a className="submenuobj">Movies</a>
                           
                        </li>
                        <li>
                            <a className="mainmenuobj" href="#news">Alone</a>
                            <a className="submenuobj">Movies</a>
                        </li>
                        <li>
                            <a className="mainmenuobj" href="#contact">Music Event</a>
                            <a className="submenuobj">Event</a>
                        </li>
                        <li>
                            <a className="mainmenuobj" href="#about">NBA game 2019</a>
                            <a className="submenuobj">Sports</a>
                        </li>
                      </ul>
                </div>
        
                <div className="leftbanner2"></div>
        
            </div>
            <div className="rightbar">
                <div className="intro-bar">
                    <div className="Line__color"></div>
                    <a className="intro">MOVIES</a>
                    <a  className="view" onClick={changeStyle} >View All</a>
                </div> 
                <div className="movie-div">
                {content}
             
        
                </div>
                <div className="intro-bar">
                    <div className="Line__color"></div>
                    <a className="intro">EVENTS</a>
                    <a  className="view" onClick={changeStyle} >View All</a>
                </div> 
                <div className="movie-div">
        
                {content2}
                    
        
                </div>
                <div className="intro-bar">
                    <div className="Line__color"></div>
                    <a className="intro">SPORTS</a>
                    <a  className="view" onClick={changeStyle} >View All</a>
                </div> 
                <div className="movie-div">
        
                {content3}
        
                </div>
                
            </div>
            
            <div className="clear"></div>
            
        </div>
        )
}
if(style==2){
    return(
        <Allview/>
    )
}
}
export default Shortview;