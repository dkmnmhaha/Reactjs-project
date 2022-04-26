import '../../css/Style.css'
import '../../css/icofont.min.css'
import Popup from './Popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';

function Seats({childToParent}){
    const[seat, setSeat] =useState({
        seatname:"D0",
        seatcount:1,
        totalprice: 0,
        
    })
        
    const seatChosed =(D1, D2, D3) => {
        setSeat({
            seatname:D1,
            seatcount:D2,
            totalprice: D3,
        })
    }

    return(
        <div id="seatselect1" className="rightbar2 seat-select">
        <div className="Scren-position">
            <div className="header-position">   <a>SCREEN</a></div>
            <img style={{marginTop: 60}} src={process.env.PUBLIC_URL+"/img/screen_illustration.png"}/>
        </div>
        <div className="silver-gold"><a>Silver plus</a></div>
        <div className="column-grid">
            <div className="silver-plus-grid">
                <a>G</a>
                <div className="grid-4-2">
                    <div className="seat-img" onClick={() => seatChosed("G1",1,80)}><a>G1</a></div>
                    <div className="seat-img" onClick={() => seatChosed("G2",1,80)}><a>G2</a></div>
                    <div className="seat-img" onClick={() => seatChosed("G3",1,80)}><a>G3</a></div>
                    <div className="seat-img" onClick={() => seatChosed("G4",1,80)}><a>G4</a></div>

                </div>
                <div className="grid-6-2">
                    <div className="seat-img" onClick={() => seatChosed("G5",1,80)}><a>G5</a></div>
                    <div className="seat-img" onClick={() => seatChosed("G6",1,80)}><a>G6</a></div>
                    <div className="seat-img" onClick={() => seatChosed("G7",1,80)}><a>G7</a></div>
                    <div className="seat-img" onClick={() => seatChosed("G8",1,80)}><a>G8</a></div>
                    <div className="seat-img" onClick={() => seatChosed("G9",1,80)}><a>G9</a></div>
                    <div className="seat-img" onClick={() => seatChosed("G10",1,80)}><a>G10</a></div>

                </div>
                <div className="grid-4-2">
                    <div className="seat-img" onClick={() => seatChosed("G11",1,80)}><a>G11</a></div>
                    <div className="seat-img" onClick={() => seatChosed("G12",1,80)}><a>G12</a></div>
                    <div className="seat-img" onClick={() => seatChosed("G13",1,80)}><a>G13</a></div>
                    <div className="seat-img" onClick={() => seatChosed("G14",1,80)}><a>G14</a></div>

                </div>
                <a>G</a>
            </div>
            <div className="silver-plus-grid">
                <a>F</a>
                <div className="grid-4-2">
                    <div className="seat-img" onClick={() => seatChosed("F1",1,80)}><a>F1</a></div>
                    <div className="seat-img" onClick={() => seatChosed("F2",1,80)}><a>F2</a></div>
                    <div className="seat-img" onClick={() => seatChosed("F3",1,80)}><a>F3</a></div>
                    <div className="seat-img" onClick={() => seatChosed("F4",1,80)}><a>F4</a></div>

                </div>
                <div className="grid-6-2">
                    <div className="seat-img" onClick={() =>seatChosed("F5",1,80)}><a>F5</a></div>
                    <div className="seat-img active" onClick={() =>seatChosed("F6",1,80)}><a>F6</a></div>
                    <div className="seat-img active" onClick={() =>seatChosed("F7",1,80)}><a>F7</a></div>
                    <div className="seat-img" onClick={() =>seatChosed("F8",1,80)}><a>F8</a></div>
                    <div className="seat-img" onClick={() =>seatChosed("F9",1,80)}><a>F9</a></div>
                    <div className="seat-img" onClick={() =>seatChosed("F10",1,80)}><a>F10</a></div>

                </div>
                <div className="grid-4-2">
                    <div className="seat-img" onClick={() =>seatChosed("F11",1,80)}><a>F11</a></div>
                    <div className="seat-img" onClick={() =>seatChosed("F12",1,80)}><a>F12</a></div>
                    <div className="seat-img" onClick={() =>seatChosed("F13",1,80)}><a>F13</a></div>
                    <div className="seat-img" onClick={() =>seatChosed("F14",1,80)}><a>F14</a></div>

                </div>
                <a>F</a>
            </div>
        </div>
        <div className="silver-gold"><a>GOLD PLUS</a></div>
        <div className="column-grid">
            <div className="silver-plus-grid">
                <a>E</a>
                <div className="grid-4-2 type2">
                    <div className="grid2-2" onClick={() =>seatChosed("E1,E2",2,150)}>
                        <div className="seat-img"><a>E1</a></div>
                        <div className="seat-img"><a>E2</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("E3,E4",2,150)}>
                        <div className="seat-img"><a>E3</a></div>
                        <div className="seat-img"><a>E4</a></div>        
                    </div>

                </div>
                <div className="grid-6-2 type2"onClick={() =>seatChosed("E5,E6",2,150)}>
                    <div className="grid2-2">
                        <div className="seat-img"><a>E5</a></div>
                        <div className="seat-img"><a>E6</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("E7,E8",2,150)}>

                        <div className="seat-img"><a>E7</a></div>
                        <div className="seat-img"><a>E8</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("E9,E10",2,150)}>

                        <div className="seat-img"><a>E9</a></div>
                        <div className="seat-img"><a>E10</a></div>
                    </div>


                </div>
                <div className="grid-4-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("E11,E12",1,150)}>
                        <div className="seat-img"><a>E11</a></div>
                        <div className="seat-img"><a>F12</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("E13,E14",2,150)}>
                        <div className="seat-img"><a>E13</a></div>
                        <div className="seat-img"><a>E14</a></div>        
                    </div>

                </div>
                <a>E</a>
            </div>
            <div className="silver-plus-grid">
                <a>D</a>
                <div className="grid-4-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("D1,D2",2,150)}>
                        <div className="seat-img"><a>D1</a></div>
                        <div className="seat-img"><a>D2</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("D3,D4",2,150)}>
                        <div className="seat-img"><a>D3</a></div>
                        <div className="seat-img"><a>D4</a></div>        
                    </div>

                </div>
                <div className="grid-6-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("D5,D6",2,150)}>
                        <div className="seat-img"><a>D5</a></div>
                        <div className="seat-img"><a>D6</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("D7,D8",2,150)}>

                        <div className="seat-img"><a>D7</a></div>
                        <div className="seat-img"><a>D8</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("D9,D10",2,150)}>

                        <div className="seat-img"><a>D9</a></div>
                        <div className="seat-img"><a>D10</a></div>
                    </div>


                </div>
                <div className="grid-4-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("D11,D12",2,150)}>
                        <div className="seat-img"><a>D11</a></div>
                        <div className="seat-img"><a>D12</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("D13,D14",2,150)}>
                        <div className="seat-img"><a>D13</a></div>
                        <div className="seat-img"><a>D14</a></div>        
                    </div>

                </div>
                <a>D</a>
            </div>
            <div className="silver-plus-grid">
                <a>C</a>
                <div className="grid-4-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("C1,C2",2,150)}>
                        <div className="seat-img"><a>C1</a></div>
                        <div className="seat-img"><a>C2</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("C3,C4",2,150)}>
                        <div className="seat-img"><a>C3</a></div>
                        <div className="seat-img"><a>C4</a></div>        
                    </div>

                </div>
                <div className="grid-6-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("C5,C6",2,150)}>
                        <div className="seat-img"><a>C5</a></div>
                        <div className="seat-img"><a>C6</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("C7,C8",2,150)}>

                        <div className="seat-img"><a>C7</a></div>
                        <div className="seat-img"><a>C8</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("C9,C10",2,150)}>

                        <div className="seat-img"><a>C9</a></div>
                        <div className="seat-img"><a>C10</a></div>
                    </div>


                </div>
                <div className="grid-4-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("C11,C12",2,150)}>
                        <div className="seat-img"><a>C11</a></div>
                        <div className="seat-img"><a>C12</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("C13,C14",2,150)}>
                        <div className="seat-img"><a>C13</a></div>
                        <div className="seat-img"><a>C14</a></div>        
                    </div>

                </div>
                <a>C</a>
            </div>
            <div className="silver-plus-grid">
                <a>B</a>
                <div className="grid-4-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("B1,B2",2,150)}>
                        <div className="seat-img"><a>B1</a></div>
                        <div className="seat-img"><a>B2</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("B3,B4",2,150)}>
                        <div className="seat-img"><a>B3</a></div>
                        <div className="seat-img"><a>B4</a></div>        
                    </div>

                </div>
                <div className="grid-6-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("B5,B6",2,150)}>
                        <div className="seat-img active"><a>B5</a></div>
                        <div className="seat-img active"><a>B6</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("B7,B8",2,150)}>

                        <div className="seat-img"><a>B7</a></div>
                        <div className="seat-img"><a>B8</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("B9,B10",2,150)}>

                        <div className="seat-img"><a>B9</a></div>
                        <div className="seat-img"><a>B10</a></div>
                    </div>


                </div>
                <div className="grid-4-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("B11,B12",2,150)}>
                        <div className="seat-img"><a>B11</a></div>
                        <div className="seat-img"><a>B12</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("B13,B14",2,150)}>
                        <div className="seat-img"><a>B13</a></div>
                        <div className="seat-img"><a>B14</a></div>        
                    </div>

                </div>
                <a>B</a>
            </div>
            <div className="silver-plus-grid">
                <a>A</a>
                <div className="grid-4-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("A1,A2",2,150)}>
                        <div className="seat-img"><a>A1</a></div>
                        <div className="seat-img"><a>A2</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("A3,A4",2,150)}>
                        <div className="seat-img"><a>A3</a></div>
                        <div className="seat-img"><a>A4</a></div>        
                    </div>

                </div>
                <div className="grid-6-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("A5,A6",2,150)}>
                        <div className="seat-img"><a>A5</a></div>
                        <div className="seat-img"><a>A6</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("A7,A8",2,150)}>

                        <div className="seat-img active"><a>A7</a></div>
                        <div className="seat-img active"><a>A8</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("A9,A10",2,150)}>

                        <div className="seat-img"><a>A9</a></div>
                        <div className="seat-img"><a>A10</a></div>
                    </div>


                </div>
                <div className="grid-4-2 type2">
                    <div className="grid2-2"onClick={() =>seatChosed("A11,A12",2,150)}>
                        <div className="seat-img"><a>A11</a></div>
                        <div className="seat-img"><a>A12</a></div>
                    </div>
                    <div className="grid2-2"onClick={() =>seatChosed("A13,A14",2,150)}>
                        <div className="seat-img"><a>A13</a></div>
                        <div className="seat-img"><a>A14</a></div>        
                    </div>

                </div>
                <a>F</a>
            </div>
        </div>
    
        <div className="chosed-seat">
            <div className="chosedseat-info">
                <a>You have chosed seat</a>
                <h1 id="seat-chosed">{seat.seatname}</h1>
            </div>
            <div className="chosedseat-price">
                <a>Total Price</a>
                <h1 id="price-chosed">{seat.totalprice}$</h1>
            </div>
            
            <button primary onClick={() => childToParent(2, seat.seatcount, seat.totalprice)}>PROCEED</button>

        </div>
    </div>
        
    )
}
export default Seats
