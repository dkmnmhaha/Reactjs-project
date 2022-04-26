
import '../../css/Login.css'




function Login ()  {

    
    
        return (
<div className='divbg'>
  <div className="Divlogin">
          <div className="DivHeader">
            <h3 >HELLO</h3>
            <h1>WELCOME BACK</h1>
          </div>
            
                <div className="DivForm">
                  <form>
                        <div>
                          <span style={{color:'white', fontSize: 16 }}>EMAIL<label className="mark">*</label></span>
                          <input className="inp" type="text" placeholder="Enter your Email"/> 
                        </div>
                        <div>
                          <span style={{color:'white', fontSize: 16 }}>PASSWORD<label className="mark">*</label></span>
                          <input className="inp" type="password" placeholder="Password"/> 
                        </div>
                        <label className="container">Remember password
                          <input  type="checkbox" id="html" name="fav_language" value="HTML"/>
                          <span className="checkmark"></span>
                          <a className="forgot" href="#">Forgot Your Password?</a><br/>
                        </label>
                        <input className="btnlg" type="submit" value="LOG IN"></input>
                  </form>     
                </div>
          <div className="DivFooter">

            <a style={{color: 'rgb(237, 243, 241)'}}>Don't have an account? </a> <a style={{textDecoration: 'none', color: 'rgb(49,215,169)'}} href="Signup.html">SIGN UP NOW{'>>'}</a>
            <br/>
            <a className="Divider1"></a><h5>OR</h5><a className="Divider2"></a>
            <a className="bgfb"><i className="icofont-facebook"></i></a>
            <a className="bgtw"><i className="icofont-twitter"></i></a>
            <a className="bggg"><i className="icofont-google-plus"></i></a>

          
          </div>      
        </div>
            </div>
           

           
 
         


    );
    }

          
  




export default Login;
