
import '../../css/Style.css'
import '../../css/icofont.min.css'
import Footbar from '../../components/Footbar/Footbar';
import Speakerinfo from '../../components/Speakerinfo/Speakerinfo';


function Contact ()  {

        return (
          
            <div className="event-banner aboutus">
            <div className="Divall">
            
             

     
                
        <div className="DivIntro-moviedetail">
                    <a className="Intro">contact us</a><br/>
                    <a className="grey-20">Home  {">"} Contact Us</a>
                </div>
            <div className="content">
            <div className="eventdetail-body-info aboutus">
            <div className="event-text-info">
              
                     <a className="aqua-24">contact us</a><br/>
                        <a className="white-50">get in touch</a><br/>
                        <a className="white--16pt normalfont">We'd love to talk about how we can work together. Send us a message below and we'll respond as soon as possible.
                        </a><br/>

                        <div className="contactus">
                            <a>Name</a><br/>
                            <input></input><br/>
                            <a>Email</a><br/>
                            <input></input><br/>
                            <a>Subject</a><br/>
                            <input></input><br/>
                            <a>Message</a><br/>
                            <input style={{height:180}}></input><br/>
                            
                            <button className="bookticketbtn" style={{width:450, height:60}}>Send message</button>
                            
                        </div>
                        
                    </div>
                    <div className="event-pic-info contactbg">
                        <div className='phone-email'>
                            <div className='imgholder'>
                            <img src="/img/Phonenumber.png"/>
                            </div>
                            <div className='txtholder'>
                                <a>PHONE NUMBER</a><br/>
                                <a className='aqua'>+0123456789</a>
                            </div>
                            <div className='line'></div>
                            <div className='imgholder'>
                            <img src="/img/email.png"/>
                            </div>
                            <div className='txtholder'>
                                <a>EMAIL</a><br/>
                                <a className='aqua'>info@movtic.com</a>
                            </div>
                        </div>
                        <img src="/img/contactbg.png"/>
                        
                        
                        
                    </div>
                </div>
            
                
                
     
         
            
        
            </div> 
            
        <div className="clear"></div>
            <div className='divGrid'>
                <div className='gridItem'>
                <div className='iconholder'><i class="icofont-facebook"></i></div>
                <a className='white-34'>130K</a><br/>
                <a className='aqua'>Follower</a><br/>

                </div>
                <div className='gridItem'>
                <div className='iconholder'><i class="icofont-users-alt-5"></i></div>
                <a className='white-34'>35K</a><br/>
                <a className=' aqua'>Member</a><br/>
                </div>
                <div className='gridItem'>
                <div className='iconholder'><i class="icofont-twitter"></i></div>
                <a className='white-34'>47K</a><br/>
                <a className='white-28pt aqua'>Follower</a><br/>
                </div>
                <div className='gridItem'>
                <div className='iconholder'><i class="icofont-email"></i></div>
                <a className='white-34'>291K</a><br/>
                <a className='white-28pt aqua'>Subcriber</a><br/>
                </div>
            </div>

        </div>
            <div className="Divall">
            
             
            
            
                <Footbar/>
            </div>
            
            </div>
            


 



    );

    }

          





export default Contact;
