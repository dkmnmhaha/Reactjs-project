

import '../../css/Style.css'
import '../../css/icofont.min.css'
import useCollapse from 'react-collapsed';

function Question() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
   
    return (
 
    
        <div class="question-answer">
            <div class="question-answer-zone" id="fold">
                <div class="question">
                    <a class="text-question">Can I Upgrade my Tickets after Placing an Order?</a>
                </div>
                <button class="expand" id="fold_p" {...getToggleProps()}> 
                {isExpanded ? '-' : '+'} 
                </button>
                <div class="answer" {...getCollapseProps()}>
                    <a class="text-answer">Being that Tickto does not own any of the tickets sold on our site, we do not have the ability to exchange or replace tickets with other inventory.</a><br/><br/>
                    <a class="text-answer">If you would like to "upgrade" or change the location of your seats, you can relist your current tickets for sale here and purchase other tickets of your choice. </a>
                </div>
            </div>
            <div class="clear"></div>
        </div>

          )

    }



export default  Question;