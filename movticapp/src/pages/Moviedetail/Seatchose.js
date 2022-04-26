import popcorn from '../../img/Iconpopcorn.png'
import topmato from '../../img/Icontomato.png'
import '../../css/Style.css'
import '../../css/icofont.min.css'
import Summary from '../../components/summary/Summary';
import Userreview from '../../components/Userreview/Userreview';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Footbar from '../../components/Footbar/Footbar';
import Cinemachose from '../../components/Cinemachose/Cinemachose';
import Popup from '../../components/Cinemachose/Popup';
import Seats from '../../components/Cinemachose/Seat';
import Foods from '../../components/Cinemachose/Food';


function Seatchose ()  {

      const {id} = useParams()
      const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Movie/${id}`;
      const [movie, setMovie] = useState(null)
      useEffect(() =>{
          axios.get(url)
          .then(response =>{
              setMovie(response.data)
  
          })
  
      }, [url])

        const [datas, setData] = useState({
            state:1,
            ticketamount:0,
            ticketprice:0
        });
    
        const childToParent = (state, ticketamount, ticketprice) => {
            setData({
                state:state,
                ticketamount:ticketamount,
                ticketprice:ticketprice
            })
        }



        let maincontent=null
        if(datas.state==1){
            maincontent=<Seats
            childToParent={childToParent}
            
            />
        }if(datas.state==2){

            maincontent=    
               

            <Foods
                ticketamount={datas.ticketamount}
                ticketprice={datas.ticketprice}
                name={movie.name}
                id={movie.id}
                
            />

        }
        

    if(movie){
        return (

            <div className="header moviedetail">  
        
            <div className="Divall" id="wrapper">
    
              
    
                        <div className="DivIntro-moviedetail">
                            <a className="Intro">{movie.name}</a><br/>
                            <a className="Intro2">City Walk | English - 2D</a>
                        </div>
            </div>
            <div className="ddd"></div>
            <div className="Divall" id="wrapper">
                <div className="categories moviedetail-style">
                    <button onclick="history.back()"> {'<<'}BACK </button>
                   <div className="choose-item">                  
                       <div className="pick-time">
                        <label for="time-item">MON, SEP 09 2019</label>
                        <input type="time" id="appt" name="appt"></input>
                        
                        
                       </div>
               
                   </div>
                   <div className="time-left">
                    <h2>05:00</h2>
                    <a>mins left</a>
                    </div>
    
                </div>
            </div>            
    
            <div className="Divall" id="wrapper">      
     <div className="content">
                {maincontent}
               
                
                
                
        <div className="clear"></div>     
              
    </div>
  <Footbar/>

           
</div>
</div>

    );
    }

          
  }




export default Seatchose;
