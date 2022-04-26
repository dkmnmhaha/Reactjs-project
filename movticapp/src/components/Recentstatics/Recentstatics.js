import '../../css/Style.css'
import '../../css/icofont.min.css'
function Recentstatics() {
    return(
        <div class="recent-statics">
        <div class="bgbox">
            <div class="icon-holder style-recent-statics"><img src={process.env.PUBLIC_URL+"/img/Ticketbooked.png"}/></div>
            <div class="content-holder style-recent-statics">
                <a class="white-36">461<br/> <a class ="white-16pt aqua normalfont">Ticket Booked</a></a>
            </div>
        </div>
        <div class="bgbox">
            <div class="icon-holder style-recent-statics"><img src={process.env.PUBLIC_URL+"/img/usefullsessions.png"}/></div>
            <div class="content-holder style-recent-statics">
                <a class="white-36">500<br/> <a class ="white-16pt aqua normalfont">USEFULL SESSIONS</a></a>
            </div>
        </div>
        <div class="bgbox">
            <div class="icon-holder style-recent-statics"><img src={process.env.PUBLIC_URL+"/img/talentedspeaker.png"}/></div>
            <div class="content-holder style-recent-statics">
                <a class="white-36">28<br/> <a class ="white-16pt aqua normalfont">Talented Speakers</a></a>
            </div>
        </div>

    </div>
    )
}
export default Recentstatics