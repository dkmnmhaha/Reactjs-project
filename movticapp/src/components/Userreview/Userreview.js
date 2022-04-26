

import '../../css/Style.css'
import '../../css/icofont.min.css'
import Moviecard from '../Moviecard/Moviecard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Userreview() {

    return(
          <div>
        
            <div class="review-grid">
                <div class="user-review">
                    <div class="user-piczone">
                        <div class="user-review-pic">
                         <img class="pic-user-review"src="./img/bg.png"></img>
                        </div>
                    </div>

                    <div class="review-name">
                        <a class="review-date">13 days ago</a><br/>
                        <a class="reviewer">MINSUK SEO</a><br/>
                        <a class="Verified"> <i class="icofont-tick-mark"></i> Verified Review</a>

                    </div>
                    <div class="review-content">
                        <i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><br/>
                        <a class="content-review">Awesome  Movie</a><br/>
                        <a class="all-review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </a>
                        <div class="like-dislike">
                            <a> <img src="./img/like.png"/> (8)</a> | <a> <img src="./img/dislike.png"/> (0)</a> | <a>Report Abuse</a>

                        </div>
                    </div>

                </div>
                <div class="user-review">
                    <div class="user-piczone">
                        <div class="user-review-pic">
                         <img class="pic-user-review"src="./img/bg.png"></img>
                        </div>
                    </div>

                    <div class="review-name">
                        <a class="review-date">13 days ago</a><br/>
                        <a class="reviewer">MINSUK SEO</a><br/>
                        <a class="Verified"> <i class="icofont-tick-mark"></i> Verified Review</a>

                    </div>
                    <div class="review-content">
                        <i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><br/>
                        <a class="content-review">Awesome  Movie</a><br/>
                        <a class="all-review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </a>
                        <div class="like-dislike">
                            <a> <img src="./img/like.png"/> (8)</a> | <a> <img src="./img/dislike.png"/> (0)</a> | <a>Report Abuse</a>

                        </div>
                    </div>

                </div>
                <div class="user-review">
                    <div class="user-piczone">
                        <div class="user-review-pic">
                         <img class="pic-user-review"src="./img/bg.png"></img>
                        </div>
                    </div>

                    <div class="review-name">
                        <a class="review-date">13 days ago</a><br/>
                        <a class="reviewer">MINSUK SEO</a><br/>
                        <a class="Verified"> <i class="icofont-tick-mark"></i> Verified Review</a>

                    </div>
                    <div class="review-content">
                        <i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><br/>
                        <a class="content-review">Awesome  Movie</a><br/>
                        <a class="all-review">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </a>
                        <div class="like-dislike">
                            <a> <img src="./img/like.png"/> (8)</a> | <a> <img src="./img/dislike.png"/> (0)</a> | <a>Report Abuse</a>

                        </div>
                    </div>

                </div>
                <div class="user-review">
                    <div class="user-piczone">
                        <div class="user-review-pic">
                         <img class="pic-user-review"src="./img/bg.png"></img>
                        </div>
                    </div>

                    <div class="review-name">
                        <a class="review-date">13 days ago</a><br/>
                        <a class="reviewer">MINSUK SEO</a><br/>
                        <a class="Verified"> <i class="icofont-tick-mark"></i> Verified Review</a>

                    </div>
                    <div class="review-content">
                        <i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><i class="icofont-heart"></i><br/>
                        <a class="content-review">Awesome  Movie</a><br/>
                        <a class="all-review">or sit amet,Lorem ipsum dolor sit amet,or sit amet,Lorem ipsum dolor sit amet,or sit amet,Lorem ipsum dolor sit amet,or sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat enim non ante egestas vehicula. Suspendisse potenti. Fusce malesuada fringilla lectus venenatis porttitor. </a>
                        <div class="like-dislike">
                            <a> <img src="./img/like.png"/> (8)</a> | <a> <img src="./img/dislike.png"/> (0)</a> | <a>Report Abuse</a>

                        </div>
                    </div>

                </div>
                
                
            </div>
            <button class="loadmore">Load More</button>
          </div>

    )
}

export default  Userreview;
