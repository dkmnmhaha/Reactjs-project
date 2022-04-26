
import '../../css/Style.css'
import '../../css/icofont.min.css'
import Footbar from '../../components/Footbar/Footbar';
import Blogcontent from '../../components/blogcontent/Blogcontent';
import Ticket from '../../components/Cinemachose/Ticket';


function Blog ()  {

    
    
        return (
            <div className="event-banner aboutus">  
        
            <div className="Divall" id="wrapper">
    
              
    
                        <div className="DivIntro-moviedetail">
                            <a className="Intro">blog</a><br/>
                            <a className="Intro2">Home {'>'} Blog</a>
                        </div>
            </div>
            
      
    
            <div className="Divall" id="wrapper">      
     <div className="content">
                
               
                
     <div id="ticketbuy" className="rightbar2 seat-select" >
    
    <div className="blog-left">
            <Blogcontent/>
            <Blogcontent/>
            <Blogcontent/>
            <Blogcontent/>
            <Blogcontent/>
            


    </div>
    <div className="blog-right">
            <div className='right-content'>
                <a className='white-24pt'>Search</a><br/>
                <input  className="normalinput"></input><br/>
                <button  className="btn"> <i class="icofont-search-2"></i>SEARCH</button>
            </div>
            <div className='right-content'>
                <a className='white-24pt'>Lastest post</a><br/>
                <div className='imgholder'></div>
                <a className='white-24pt'>Three Ways to Book  Sporting Event Tickets</a><br/>
                <i class="icofont-speech-comments"></i><a className='white-14pt'>20 comments</a><i class="icofont-eye"></i><a className='white-14pt'>466 views</a><br/><br/>
            </div>
            <div className='right-content'>
                <a className='white-24pt'>Follow us</a><br/>
                
                <div className="iconbar">
                        <a className="bgfb2"><i className="icofont-facebook"></i></a>
                        <a className="bgtw2"><i className="icofont-twitter"></i></a>
                        <a className="bggg2"><i className="icofont-google-plus"></i></a>
                        <a className="bgins"><i className="icofont-instagram"></i></a>
                        <a className="bgpin"><i className="icofont-pinterest"></i></a>        
                    </div>
            </div>
            <div className='right-content'>
                <a className='white-24pt'>Categories</a><br/>
                <div className='divline'> 
                    <a className="white-14pt floatleft">Showtimes & tickets</a>
                    <a className="white-14pt floatright">50</a>
                    <div className="clear"></div>
                </div>
                <div className='divline'> 
                    <a className="white-14pt floatleft">Showtimes & tickets</a>
                    <a className="white-14pt floatright">50</a>
                    <div className="clear"></div>
                </div>
                <div className='divline'> 
                    <a className="white-14pt floatleft">Showtimes & tickets</a>
                    <a className="white-14pt floatright">50</a>
                    <div className="clear"></div>
                </div>
                <div className='divline'> 
                    <a className="white-14pt floatleft">Showtimes & tickets</a>
                    <a className="white-14pt floatright">50</a>
                    <div className="clear"></div>
                </div>
                <div className='divline'> 
                    <a className="white-14pt floatleft">Showtimes & tickets</a>
                    <a className="white-14pt floatright">50</a>
                    <div className="clear"></div>
                </div>
                <div className='divline'> 
                    <a className="white-14pt floatleft">Showtimes & tickets</a>
                    <a className="white-14pt floatright">50</a>
                    <div className="clear"></div>
                </div>
                <div className='divline'> 
                    <a className="white-14pt floatleft">Showtimes & tickets</a>
                    <a className="white-14pt floatright">50</a>
                    <div className="clear"></div>
                </div>

            </div>
            <div className='right-content'>
                <a className='white-24pt'>Feature tag</a><br/>
                
                <button  className="btnftg"> Creavive</button>
                <button  className="btnftg"> Design</button>
                <button  className="btnftg"> Skill</button>
                <button  className="btnftg"> Template</button>
                <button  className="btnftg"> Landing</button>
            </div>
            


    </div>
    
   
    </div>



<div className="clear"></div>  
                
        <div className="clear"></div>     
              
    </div>
  <Footbar/>

           
</div>
</div>

           
 
         


    );
    }

          
  




export default Blog;
