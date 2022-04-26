
import '../../css/Style.css'
import '../../css/icofont.min.css'
import { Link } from 'react-router-dom';
import { useAxiosGet } from '../../Hooks/HttpRequest';
import Movielist from '../../components/Movielist/Movielist';
import Eventcard from '../../components/Eventcard/Eventcard';
import Sportcard from '../../components/Sportcard/Sportcard';

function Allview (){
    const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Movie?page=1&limit=4`;
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
    const url2=`https://62603c6e92df0bc0f341b545.mockapi.io/Event?page=1&limit=4`;
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
    const url3=`https://62603c6e92df0bc0f341b545.mockapi.io/Sport?page=1&limit=4`;
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
return(
    <div className="rightbar2">
    <div className=" intro-bar2">
        <div className="tapdiv">
            <a className="tap" href="#">NOW SHOWING</a>
            <a className="tap" href="#">COMMING SOON</a>
            <a className="tap" href="#">EXCLUSIVE</a>
        </div>
        <a className="intro">MOVIES</a><br/>
        <a className="besure">Be sure not to miss these movie today</a>
       
    </div> 
    <div className="movie-div2">
        {content}
        

    </div>
    <div className=" intro-bar2">
        <div className="tapdiv">
            <a className="tap" href="#">ALL</a>
            <a className="tap" href="#">COMMING SOON</a>
            <a className="tap" href="#">EXCLUSIVE</a>
        </div>
        
        
        <a className="intro">EVENTS</a>
        <br/>
        <a className="besure">Be sure not to miss these movie today</a>
        
       
    </div> 
    <div className="movie-div2">
        {content2}

        

    </div>
    <div className=" intro-bar2">
        <div className="tapdiv">
            <a className="tap" href="#">ALL</a>
            <a className="tap" href="#">COMMING SOON</a>
            <a className="tap" href="#">EXCLUSIVE</a>
        </div>
        <a className="intro">SPORTS</a><br/>
         <a className="besure">Be sure not to miss these movie today</a>

    </div> 
    <div className="movie-div2">
        
        {content3}


    </div>
    
</div>


)
}
export default Allview;