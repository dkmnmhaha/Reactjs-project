

import '../../css/Style.css'
import '../../css/icofont.min.css'
import useCollapse from 'react-collapsed';
import Question from './Question';

function Questions() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
   
    return (
  <div>
        <div class="event-text-info body3">
        <a class="aqua-24">HOW CAN WE HELP?</a><br/>

        <a class="white-50">Frequently Asked Questions</a><br/>
        <a class="white--16pt normalfont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  ut labore et <br/>dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</a>
        
    </div>
    <div class="questions-zone">
       
        <Question/>
        <Question/>
        <Question/>
        <Question/>
        
        
        
    </div>
  </div>
          

                              
          
     
          )

    }



export default  Questions;