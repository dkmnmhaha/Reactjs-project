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

function Ticketchose ()  {


      const {id} = useParams()
      const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Movie/${id}`;
      const [movie, setMovie] = useState(null)
      useEffect(() =>{
          axios.get(url)
          .then(response =>{
              setMovie(response.data)
  
          })
  
      }, [url])

    if(movie){
        return (

            <div className="header moviedetail">  
        
            <div className="Divall" id="wrapper">
    

    
                        <div className="DivIntro-moviedetail">
                            <a className="Intro">{movie.name}</a><br/>
                            <a className="Intro2">{movie.languages[0]},{movie.languages[1]},{movie.languages[2]},{movie.languages[3]}</a>
                        </div>
            </div>
            <div className="ddd"></div>
            <div className="Divall" id="wrapper">
                <div className="categories moviedetail-style">
                    <div className="search-item">                  
                        <div className="pick-item">
                         <label for="city-item">CITY</label>
                         <select  name="city-item" id="city-item">
                             <option value="London">London</option>
                             <option value="Hanoi">Hanoi</option>
                             <option value="Tokyo">Tokyo</option>
                             <option value="Paris">Paris</option>
                         </select>  
                        </div>
                        <img className="icon-item" src={process.env.PUBLIC_URL+"/img/city.png"}/>                
                    </div>
                    <div className="search-item"> 
                     <div className="pick-item"> 
                         
                         <label for="date">DATE</label>
                         <input type="text" id="datepicker" placeholder="31/12/2019"/>
                         
                     </div>
                     <img className="icon-item" src={process.env.PUBLIC_URL+"/img/date.png"}/>
                    </div>
                    <div className="search-item">                  
                         <div className="pick-item">
                         <label for="cinema-item">CINEMA</label>
                         <select  name="cinema-item" id="cinema-item">
                             <option value="Awaken">Awaken</option>
                             <option value="Cinemax">Cinemax</option>
                             <option value="Lotte">Lotte</option>
                             
                         </select>  
                         </div>
                         <img className="icon-item" src={process.env.PUBLIC_URL+"/img/cinema.png"}/>                
                     </div>
                     <div className="search-item">                  
                         <div className="pick-item">
                         <label for="exp-item">EXPERIENCE</label>
                         <select  name="exp-item" id="exp-item">
                             <option value="2d">English - 2D</option>
                             <option value="3d">English - 3D</option>
                             <option value="4dx">English - 4DX</option>
                             
                         </select>  
                         </div>
                         <img className="icon-item" src={process.env.PUBLIC_URL+"/img/Experience.png"}/>                
                     </div>
     
                    
                    
                 </div>
            </div>            
    
            <div className="Divall" id="wrapper">      

        

      
 <div className="content">
            <div className="rightbar2 moviedetail">
                <div className="booking-zone">
                    <Cinemachose 
                    id={movie.id} cinema={"Genesis Cinema"}
                    />
                    <Cinemachose
                      id={movie.id} cinema={"The Beach"}
                      />
                    <Cinemachose 
                    id={movie.id}cinema={"City Walk"}
                    />
                    <Cinemachose 
                    id={movie.id}cinema={"Box Park"}
                    />
                    <Cinemachose 
                    id={movie.id}cinema={"La Mer"}
                    />
                    <Cinemachose 
                    id={movie.id}cinema={"Genesis Cinema"}
                    />
                   
                </div>
                
                <div className="rightbanner">

                </div>
            </div>
            

    <div className="clear"></div>           
</div>
           <Footbar/>
            
        
            
        </div>
        </div>


    );
    }

          
  }




export default Ticketchose;
