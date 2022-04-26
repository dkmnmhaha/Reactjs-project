
import ImageHolder from '../../img/Imageholder1517.png'
import '../../css/Style.css'
import '../../css/icofont.min.css'
import Moviecard from '../Moviecard/Moviecard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Cast from './Cast';
import Crew from './Crew';
import { useAxiosGet } from '../../Hooks/HttpRequest';



function Summary() {
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group">
            <i className="icofont-curved-double-left" onClick={() => previous()} ></i>
            <i className="icofont-curved-double-right" onClick={() => next()}></i>
            
          </div>
        );
      };
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    const {id} = useParams()
    const url=`https://62603c6e92df0bc0f341b545.mockapi.io/Movie/${id}`;
    const [movie, setMovie] = useState(null)
    useEffect(() =>{
        axios.get(url)
        .then(response =>{
            setMovie(response.data)

        })

    }, [url])
    
    const url2=`https://62603c6e92df0bc0f341b545.mockapi.io/Cast?page=1&limit=7`;
    let casts = useAxiosGet(url2)
  let castsContent=null
  let castsContent2=null
  if(casts.error){
    castsContent=<p>Error</p>
  }
  if(casts.loading){
    castsContent=<p>loading</p>
  }
  if(casts.data){
    castsContent=
    casts.data.map((cast, key)=>
      
  
          <Cast
          cast={cast}
          />

    )
  }
  if(casts.data){
    castsContent2=
    casts.data.map((cast, key)=>

          <Crew
          cast={cast}
          />

    )
  }
    

  if(movie){
    return(
        <div>
              
            <div className="Main-intro">
                <h2>Synopsis</h2>
                <p>{movie.review}</p>
            </div>

            <div className="cast-crew">
                <div className="cast-crew-header"><a>CAST</a></div>
                <div className="cast-crew-grid">
<Carousel
swipeable={false}
draggable={false}
showDots={false}
responsive={responsive}
infinite={true}
keyBoardControl={true}
customTransition="all .5"
containerClass="cast-crew-grid"
arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}

>
                 {castsContent}
</Carousel>
                </div>
                
</div>
            
        <div className="cast-crew" >
        <div className="cast-crew-header"><a>CREW</a></div>
        <div className="cast-crew-grid" >
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        containerClass="cast-crew-grid"
        arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}

        >
           
           {castsContent2}
        </Carousel>
        </div>
        
    </div>
</div>

    )
}



}

export default  Summary;
