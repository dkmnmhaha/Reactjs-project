
import ImageHolder from '../../img/Imageholder1517.png'
import '../../css/Style.css'
import '../../css/icofont.min.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function Cast(props) {
  
 
    return(
      <div>
      <div className="cast-crew-pic" >
          <img className="pic-cast-crew" src={props.cast.avatar}/>
          
      </div>
      <a className="cast-crew-name">{props.cast.name}</a><br/>
      <a className="cast-crew-occupation">{props.cast.role}</a><br/>
      <a className="cast-crew-as">As {props.cast.as}</a>
  </div>






    )
}





export default  Cast;
