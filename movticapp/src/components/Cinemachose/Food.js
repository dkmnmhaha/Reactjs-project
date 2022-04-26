import '../../css/Style.css'
import '../../css/icofont.min.css'
import Popup from './Popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';
import Ticket from './Ticket';


function Foods(props){


    const [counterA, setCounterA] = useState(0);
    const [counterB, setCounterB] = useState(0);
    const [counterC, setCounterC] = useState(0);
    const [counterD, setCounterD] = useState(0);
    const [food, setFood] = useState(
        {
            number:0,
            foodset:"none",
            price:57
        }
        );
        const foodChosed =(number, foodset, price) => {
            setFood({
                number:number,
                foodset:foodset,
                price: number*price
            })
            
        }
        let maincontent=
        <Ticket
        ticketamount={props.ticketamount}
        ticketprice={props.ticketprice}
        name={props.name}
        number={food.number}
        foodset={food.foodset}
        price={food.price}
        id={props.id}
        checkoutstyle={1}
    
        />
        

    return(
        <div id="ticketbuy" className="rightbar2 seat-select">
        <div id="foodorder" className="foodorder">
            <div className="leftbanner1 bnn730-167"></div>
            <div className="foodintro">
                <a className="foodintro1">you are hungry</a><br/>
                <a className="foodintro2">we have food</a><br/>
                <a className="foodintro3">Prebook Your Meal and Save More!</a>
            </div>
            <div className="btngrid">
                <button>All</button>
                <button>Combos</button>
                <button>Beverages</button>
                <button>Popcorn</button>

            </div>
            <div className="foodgrid">
                <div className="foodcard">
                    <div className="pricetag"><a>$57</a></div>
                    <div className="discounttag"><b>24%</b><br/><a>OFF</a> </div>
                    <img src={process.env.PUBLIC_URL+"/img/Image holder.png"} className="foodimg"/>
                    <div className="foodcontent">
                        <a>Muchaco, Crispy Taco, Bean Burrito</a>
                    </div>
                    <div className="Line_dashed foodcard"></div>
                    <div className="foodnumber">
                        <button className="decrease"onClick={() => {setCounterA(counterA - 1);}}>-</button>
                        <input id="number"type="number"value= {counterA} ></input>
                        <button className="increase" onClick={() => {setCounterA(counterA + 1);}} >+</button> 
                        <button className="addfood"onClick={() => foodChosed(counterA,"Burrito Combos",57)}>ADD</button>
                    </div>
                </div>
                <div className="foodcard">
                    <div className="pricetag"><a>$57</a></div>
                    <div className="discounttag"><b>24%</b><br/><a>OFF</a> </div>
                    <img src={process.env.PUBLIC_URL+"/img/Image holder.png"} className="foodimg"/>
                    <div className="foodcontent">
                        <a>Crispy Beef Taco, Beef  Mucho Nachos</a>
                    </div>
                    <div className="Line_dashed foodcard"></div>
                    <div className="foodnumber">
                        <button className="decrease" onClick={() => {setCounterB(counterB - 1);}} >-</button>
                        <input id="number" type="number" value= {counterB}></input>
                        <button className="increase"onClick={() => {setCounterB(counterB + 1);}} >+</button> 
                        <button className="addfood" onClick={() => foodChosed(counterB,"Nachos Combos", 80)}>ADD</button>
                    </div>
                </div>
                <div className="foodcard">
                    <div className="pricetag"><a>$57</a></div>
                    <div className="discounttag"><b>24%</b><br/><a>OFF</a> </div>
                    <img src={process.env.PUBLIC_URL+"/img/Image holder.png"} className="foodimg"/>
                    <div className="foodcontent">
                        <a>Chicken Quesadilla Crispy Beef Taco</a>
                    </div>
                    <div className="Line_dashed foodcard"></div>
                    <div className="foodnumber">
                        <button className="decrease"onClick={() => {setCounterC(counterC - 1);}}>-</button>
                        <input id="number"type="number"value= {counterC} ></input>
                        <button className="increase"onClick={() => {setCounterC(counterC + 1);}} >+</button> 
                        <button className="addfood"  onClick={() => foodChosed(counterC,"Taco Combos", 100)}>ADD</button>
                    </div>
                </div>
                <div className="foodcard">
                    <div className="pricetag"><a>$57</a></div>
                    <div className="discounttag"><b>24%</b><br/><a>OFF</a> </div>
                    <img src={process.env.PUBLIC_URL+"/img/Image holder.png"} className="foodimg"/>
                    <div className="foodcontent">
                        <a> MexiDips & Chips, Beef Muchaco</a>
                    </div>
                    <div className="Line_dashed foodcard"></div>
                    <div className="foodnumber">
                        <button className="decrease" onClick={() => {setCounterD(counterD - 1);}}>-</button>
                        <input id="number"type="number"value= {counterD} ></input>
                        <button className="increase"onClick={() => {setCounterD(counterD + 1);}} >+</button> 
                        <button className="addfood"  onClick={() => foodChosed(counterD,"Muchaco Combos", 80)}>ADD</button>
                    </div>
                </div>
            </div>
            
        </div>
        
        {maincontent}
       
    </div>
        
    )
}
export default Foods
