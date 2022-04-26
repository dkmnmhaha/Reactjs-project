import '../../css/Style.css'
import '../../css/icofont.min.css'
import { Link } from 'react-router-dom'
function Speakercard(props) {
    
      

  
    return(
        
       <Link style={{textDecoration:'none'}} to={"/Speaker/"+props.cast.id}>
<div class="speaker-info" >
<div class="speaker-img-holder">
    <img src={props.cast.avatar}/>
</div>
<div class="speaker-txt-holder">
    <a class="white-24pt">{props.cast.name} </a><br/>
    <a class="white-16pt normalfont aqua">{props.cast.role}</a>
</div>
</div>
       </Link>
       

    )
}
export default Speakercard
