

import '../../css/Style.css'
import '../../css/icofont.min.css'
import {Link} from 'react-router-dom';
import Icon from '../../img/Icon.png'
function Menu() {
  return (
  
    <div>
                
    <div className="NavBar moviedetail">  
                 
        
        <ul>
          <Link to={"/"}><li className="icon"><img src={Icon}/> </li> <li className="movtic"><b>MOV<b style={{color:"#ff4343"}}>TIC</b></b></li></Link>
            
            <div className="NavBar_">
                <li><Link to="Moviepage" >MOVIES</Link></li> 
                <li><Link to="Eventpage" >EVENTS</Link></li>
                <li><Link to="Sportpage" >SPORTS</Link></li>
                <li><Link to="About" >PAGES</Link></li>
                <li><Link to="Blog" >BLOG</Link></li>
                <li><Link to="Contact" >CONTACT</Link></li>
            </div>

            <Link to="Login" ><li className="libtn" ><input className="btn" type="submit" value="LOG IN"></input></li></Link>

        </ul>
        
        
    </div>

</div>
  );
}

export default Menu;
