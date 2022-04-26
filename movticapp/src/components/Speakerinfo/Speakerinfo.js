import '../../css/Style.css'
import '../../css/icofont.min.css'
import Speakercard from './Speakercard';
import { useAxiosGet } from '../../Hooks/HttpRequest';

function Speakerinfo() {
    const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Cast?page=1&limit=4`;
    let casts = useAxiosGet(url)
  let content=null
  if(casts.error){
    content=<p>Error</p>
  }
  if(casts.loading){
    content=<p>loading</p>
  }
  if(casts.data){
    content=
      casts.data.map((cast, key)=>
      
  
          <Speakercard
           cast={cast}
          />
  
    
    )
  }
    return(
        <div class="speakers-info">
            {content}
        
    </div>
    )
}
export default Speakerinfo