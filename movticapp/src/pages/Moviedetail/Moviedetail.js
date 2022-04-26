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
import Footbar from '../../components/Footbar/Footbar';

function Moviedetail ()  {


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

            <div>
                
                <div className="Divall">
                            
                         
                
               
                <div className="content">
                
                
                                <div className="movieleftbar">
                                    <div className="movie-poster"> 
                                    <img src={movie.movie_img} alt="" className="card-img" />                      
                                    </div>
                                    <div className="resolution-button">
                                        <button>2D</button><button>IMAX 2D</button><button>4DX</button>
                                    </div>
                                    <h1>Applicable Offers</h1>
                                    <div className="offers-grids">
                                        <div className="offers-grid">
                                            <image  className="imgoffer" src="img/imageoffer.png"></image><br/>
                                            <label>Amazon Pay Cashback Offer</label><br/>
                                            <a>Win cash back up to RS 300*</a>
                                            
                                        </div>
                                        <div className="offers-grid">
                                            <image  className="imgoffer" src="img/imageoffer.png"></image><br/>
                                            <label>PayPal Offer</label><br/>
                                            <a>Transact first time with Paypal and get 100% cashback up to Rs.</a>
                                            
                                        </div> <div className="offers-grid">
                                            <image  className="imgoffer" src="img/imageoffer.png"></image><br/>
                                            <label>HDFC Bank Offer</label><br/>
                                            <a>Get 15% discount up to INR 100*  and INR 50* off on F&B T&C apply</a>
                                            
                                        </div>
                                    </div>
                                    <div className="imgleftbar"></div>
                                    
                                </div>
                
                <div className="rightzone">
                     
                    <div className="movie-info">
                        <div className="iconrows">
                            <i className="icofont-facebook"></i>
                            <i className="icofont-twitter"></i>
                            <i className="icofont-google-plus"></i>
                            <i className="icofont-instagram"></i>
                            <i className="icofont-pinterest"></i>    
                        </div>
                        <h1>{movie.name}</h1>
                        <b>ENGLISH, HINDI, TELUGU, TAMIL</b><br/>
                        <button>HORROR</button><br/>
                        
                        <i className="icofont-ui-calendar"></i><a>06 Dec, 2019</a>
                        <i className="icofont-clock-time"></i><a>2 hrs, 50 mins</a>
                       
                        
                    </div>
                
                    <div className="movierating" >
                        <div className="rate-movie">
                            <img src={topmato}></img><a>{movie.tomato}%</a><br/>
                            <a>Tomatometer</a>
                        </div>
                        <div className="rate-movie">
                            <img src={popcorn}/><a>{movie.popcorn}%</a><br/>
                            <a>Tomatometer</a>
                        </div>
                        <div className="rate-movie">
                           <b>4.3</b><i className="icofont-heart"></i><i className="icofont-heart"></i><i className="icofont-heart"></i><i className="icofont-heart"></i><i className="icofont-heart"></i><br/>
                            <a>Users rating</a>
                        </div>
                        <div className="rate-movie rate">
                            <i className="icofont-heart s1"></i><i className="icofont-heart s2"></i><i className="icofont-heart s3"></i><i className="icofont-heart s4"></i><i className="icofont-heart s5"></i><b>0.0</b><br/>
                             <a>RATE IT</a>
                         </div>
                         <button ><Link style={{textDecoration:'none', color:'white'}} to={"/Ticketchose/"+movie.id}>BOOK TICKETS</Link></button>
                      
                
                      
                    </div>
                    <div className="Photos-zone">
                        <h1>PHOTOS</h1>
                        <div className="Photos-grid">
                            <img src={movie.movie_img}/><img src={movie.movie_img}/><img src={movie.movie_img}/>
                        </div>
                    </div>
                    <Tabs>
                    <div className="summary-review">
                        <div className="summary-review-header">
                            <div className="NavBar summary-review-bar">  
                            <TabList>                                               
                                    <Tab><li><a > SUMMARY</a></li></Tab>
                                    <Tab><li><a >USER REVIEWS (147)</a></li></Tab>    
                            </TabList>            
                            </div>
                        </div>
                        
                            

                            <TabPanel>
                            <Summary></Summary> 
                            </TabPanel>
                            <TabPanel>
                            <Userreview></Userreview>
                            </TabPanel>
                        
                        

                                
                                

                    </div></Tabs>
                
                
                </div>
                <div className="clear"></div>
                </div>
                <Footbar/>
                
                          
                
                            
                        
                            
                            
</div>
                  
                  
                  
</div>


    );
    }

          
  }




export default Moviedetail;
