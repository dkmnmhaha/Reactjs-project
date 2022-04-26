

import '../../css/Style.css'
import '../../css/icofont.min.css'
import { Component } from 'react';


class Moviecard extends Component {
  render(){
    var { movie,index} = this.props;
    return (
      <div className="movie-card">
                 
      <div className="card-head">
          
      <img src={process.env.PUBLIC_URL+"img/funny.jpeg"} alt="" className="card-img" />
      </div>
      
      <div className="card-body">
          
      <h1  className="card-title">{movie.name}</h1>
      <div className="Line_dashed"></div>
      <div className="card-info">
          <i className="tomato"></i>
          <a className="tomatoscore">{movie.tomato}</a>
          <i className="popcorn"></i>
          <a className="popcornscore">{movie.popcorn}</a>
  
      </div>
      </div>
  
  </div>
    );
  }

}

export default  Moviecard;
