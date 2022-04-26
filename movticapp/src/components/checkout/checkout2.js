import '../../css/Style.css'
import '../../css/icofont.min.css'



function Checkout2(){



   

    return(
        <div class="contact-detail">
        <a class="white-24pt">Get Your Ticket</a>
        <div class="Line_dashed contact-detail"></div>
        <div class="tickets-grid">
            <div class="ticket-book getticket silver-ticket">
                <img src="/img/silverticket.png"/><br/>
                <a class="white-16pt color-black-">Standard Ticket</a><br/>
                <a class="_50"><sup class="_28">$</sup>49</a>
                <div class="chose-not" onclick="ticketchose('ticketchosed1')"> <i class="icofont-plus"></i></div> 
               
               
            </div>
            <div class="ticket-book getticket premium-ticket ">
                <div class="hotticket getticket">HOT</div>
                <img src="/img/premiumticket.png"/><br/>
                <a class="white-16pt color-black-">Premium Ticket</a><br/>
                <a class="_50"><sup class="_28">$</sup>79</a>    
                <div class="chose-not" onclick="ticketchose('ticketchosed2')"> <i class="icofont-plus"></i></div> 
                
            </div>
            <div class="ticket-book getticket vip-ticket">
                <img src="/img/vipticket.png"/><br/>
                <a class="white-16pt color-black-">VIP Ticket</a><br/>
                <a class="_50"><sup class="_28">$</sup>99</a>
                <div class="chose-not" onclick="ticketchose('ticketchosed3')"><i class="icofont-plus"></i></div>  
               
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
export default  Checkout2