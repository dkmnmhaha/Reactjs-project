
import '../../css/Style.css'
import '../../css/icofont.min.css'
import Icon from '../../img/Icon.png'
function Footbar(){
    return(
        <div className="footbr">
                <div className="subcribe">
                    <h3>SUBCRIBE TO MOVTIC</h3>
                    <h1>TO GET EXCLUSIVE BENEFITS</h1>
                </div>

                <form>
                    <input className="inputbar" type="text" placeholder=" Your email address"/>
                    <input className="subbtn" type="submit" value="Subcribe"></input>
                </form>
                <div className="trust">
                    <a>We respect your privacy, so we never share your info</a>
                </div>
                <div className="clear"></div>
               
                <div className="footcntent">                
                    <a ><img  className="imgmovtic" src={Icon}/><b className="movtic2">MOV<b  style={{color:"#ff4343"}}>TIC</b></b></a>
                    <div className="iconbar">
                        <a className="bgfb2"><i className="icofont-facebook"></i></a>
                        <a className="bgtw2"><i className="icofont-twitter"></i></a>
                        <a className="bggg2"><i className="icofont-google-plus"></i></a>
                        <a className="bgins"><i className="icofont-instagram"></i></a>
                        <a className="bgpin"><i className="icofont-pinterest"></i></a>        
                    </div>
                    <div className="copyrightbar">
                        <a className="cpr">Copyright © 2019.All Rights Reserved By</a> <a style={{color:"#31d7a9"}}> Movtic </a>
                                  
                            <ul>  
                                <li><a href="#about">Feedback</a></li>
                                <li><a href="#about">FAQ</a></li>
                                <li><a href="#about">Privacy Policy</a></li>
                                <li><a href="#contact">Term Of Use</a></li>
                                <li><a href="#news">About</a></li>
                                
                                
                  
                            </ul> 
                    </div>
                </div>
            </div>
    )
}
export default Footbar
