
import ImageHolder from '../../img/Imageholder1517.png'
import '../../css/Style.css'
import '../../css/icofont.min.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function Crew(props) {

 
    return(


    <div>
        <div className="cast-crew-pic"style={{marginTop:50}}>
            <img className="pic-cast-crew" src={props.cast.avatar}/>
        </div>
        <a className="cast-crew-name">{props.cast.name}</a><br/>
        <a className="cast-crew-occupation">{props.cast.role}</a><br/>

    </div>

    )
}





export default Crew;
