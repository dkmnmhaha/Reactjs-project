
import '../../css/Login.css'




function Signup ()  {

    
    
        return (
            <div class="Divlogin">
            <div class="DivHeader">
              <h3 >WELCOME</h3>
              <h1>TO MOVTIC</h1>
            </div>        
                  <div class="DivForm">
                    <form>
                          <div>
                            <span style={{color:'white', fontSize: 16 }}>EMAIL<label class="mark">*</label></span>
                            <input class="inp" type="text" placeholder="Enter your Email"/> 
                          </div>
                          <div>
                            <span style={{color:'white', fontSize: 16 }}>PASSWORD<label class="mark">*</label></span>
                            <input class="inp" type="password" placeholder="Password"/> 
                          </div>
                          <div>
                              <span style={{color:'white', fontSize: 16 }}>CONFIRM PASSWORD<label class="mark">*</label></span>
                              <input class="inp" type="password" placeholder="Password"/> 
                            </div>
                          <label class="container">Agree to the <a style={{textDecoration:'none', color: 'rgb(49,215,169)'}} href="#">Term, Privacy Policy</a> and <a style={{textDecoration:'none', color: 'rgb(49,215,169)'}} href="#">Fees</a>
                            <input  type="checkbox" id="html" name="fav_language" value="HTML"/>
                            <span class="checkmark"></span>
                          
                          </label>
                          <input class="btnlg" type="submit" value="SIGN UP"></input>
                    </form>     
                  </div>
            <div class="DivFooter2">
  
              <a style={{color: 'rgb(237, 243, 241)'}}>Already have an account? </a> <a style={{textDecoration:'none', color: 'rgb(49,215,169)'}} href="Login.html">LOG IN {'>>'}</a>
              <br/>
              <a class="Divider1"></a><h5>OR</h5><a class="Divider2"></a>
              <a class="bgfb"><i class="icofont-facebook"></i></a>
              <a class="bgtw"><i class="icofont-twitter"></i></a>
              <a class="bggg"><i class="icofont-google-plus"></i></a>
  
            
            </div>      
          </div>

           
 
         


    );
    }

          
  




export default Signup;
