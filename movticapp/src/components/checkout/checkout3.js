import '../../css/Style.css'
import '../../css/icofont.min.css'



function Checkout3(){



   

    return(
        <div class="contact-detail">
        <a class="white-24pt">Get Your Ticket</a>
        <div class="Line_dashed contact-detail"></div>
        <div style={{gap:20}} class="tickets-grid">
            <div class="ticket-book getticket-sportstyle">
                <div class="tagg getticket-sportstyle">Best View</div>
                <a class="_50"><sup class="_28">$</sup>49</a><br/>
               
                <div class="chose-not getticket-sportstyle" > <i class="icofont-plus"></i></div> 
            
            </div>
            <div class="ticket-book getticket-sportstyle">
                <div class="tagg getticket-sportstyle">Comfort Zone</div>
                <a class="_50"><sup class="_28">$</sup>79</a><br/>
               
                <div class="chose-not getticket-sportstyle" > <i class="icofont-plus"></i></div> 
               
            </div>
            <div class="ticket-book getticket-sportstyle">
                <div class="tagg getticket-sportstyle">Single Tickets</div>
                <a class="_50"><sup class="_28">$</sup>99</a><br/>
               
                <div class="chose-not getticket-sportstyle" ><i class="icofont-plus"></i></div>  
                
            </div>

        </div>
    
                
                
                
         

            
            <div class="foodnumber">
            <a class="white--16pt">Number of seat:</a><button class="decrease">-</button><input id="number"type="number" ></input><button class="increase" >+</button>
            <input class="normalinput" id="promocode" type="text" placeholder="Please enter promo code"/>
            <button class="normalbtn">VERIFY</button>
            </div> 

        
    </div>
        
    )
}
export default  Checkout3