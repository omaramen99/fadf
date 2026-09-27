
//------------------------------------
//-------------------------------------------------
import './Footer_comp.css';
import imgSrc from '../media/logoNav.png';

import React from "react";
import { connect } from 'react-redux';
class Footer_comp extends React.Component {
  state = {
    

  };
  constructor(props)
  {
   
    super(props);
    // this.state={
    //   complete : ""
    // };
  }
  SkillsScroll = (e) => 
  {
   
    e.preventDefault();
    e.stopPropagation();
    try {
      var ele = document.getElementById('HomeSkills');
      var close = document.getElementById('close');
      close.click();
      ele.scrollIntoView({behavior: 'smooth', block: "center"})
      
    } catch (error) {
      this.props.state.history.push('/')
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      window.setTimeout(()=>{
 
        var skilll = document.getElementById('skillsH1');
        skilll.click();
 
      },1000)
 
 
 
      
    }
 
  }



  AboutScroll = (e) => 
  {
   
    e.preventDefault();
    e.stopPropagation();
    try {
     var ele = document.getElementById('aboutSection');
     var close = document.getElementById('close');
     close.click();
     ele.scrollIntoView({behavior: 'smooth', block: "center"})
 
      
    } catch (error) {
     this.props.state.history.push('/')
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
     window.setTimeout(()=>{
 
       var port = document.getElementById('aboutH1');
       port.click();
 
     },1000)
      
    }
 
 
  }
 PortfolioScroll = (e) => 
 {
  
   e.preventDefault();
   e.stopPropagation();
   try {
    var ele = document.getElementById('portfolioSection');
    var close = document.getElementById('close');
    close.click();
    ele.scrollIntoView({behavior: 'smooth', block: "center"})

     
   } catch (error) {
    this.props.state.history.push('/')
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.setTimeout(()=>{

      var port = document.getElementById('portfolioH1');
      port.click();

    },1000)
     
   }


 }
 TopScroll = (e) => 
 {
  e.preventDefault();
  e.stopPropagation();
  window.scrollTo({top: 0, behavior: 'smooth'});
 }
  


  render() {






    return (
      <>
              <div class="stayConnected" id="stayConnected">
        <div class="stayConnectedTitle">STAY CONNECTED</div>
        <div class="stayConnectedBtns">
          
          
          <a className='footerA' target='blank' href="https://www.facebook.com/omar.amen32/"><div class="contactO"><div class="contactIF"><i class="fab fa-facebook-f"></i></div></div></a>
          <a className='footerA' target='blank' href="https://www.youtube.com/channel/UCxcQOXC73rlM9DEcsz9pwLA"><div class="contactO"><div class="contactIY"><i class="fab fa-youtube"></i></div></div></a>
          <a className='footerA' target='blank' href="https://www.linkedin.com/in/omar-amen-19a374189/"><div class="contactO"><div class="contactIL"><i class="fab fa-linkedin-in"></i></div></div></a>
          {/* Upwork icon: inline SVG from Font Awesome Free 6 (CC BY 4.0), since the site's FA 5 kit has no fa-upwork */}
          <a className='footerA' target='blank' href="https://www.upwork.com/freelancers/~010e2c3b929aaf2239" aria-label="Upwork"><div class="contactO"><div class="contactIU"><svg viewBox="0 0 641 512" fill="currentColor" style={{height: '1em', width: '1.25em'}}><path d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9c11.9-95.3 46.8-125.4 92.8-125.4c45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7zm0-237.8c-81.9 0-127.8 53.4-141 108.4c-14.9-28-25.9-65.5-34.5-100.3H206v141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141H.8v141c0 41.1 13.3 78.4 37.6 105.1c25 27.5 59.2 41.8 98.8 41.8c78.8 0 133.8-60.4 133.8-146.9V112.1c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4h66.4l23.1-141.3c7.6 6.3 15.7 12 24.2 17c22.2 14 47.7 21.9 73.9 22.8c0 0 4 .2 6.1 .2c81.2 0 145.9-62.9 145.9-147.8s-64.8-148.1-146-148.1z"/></svg></div></div></a>

        </div>
        <div class="contactMe" >
            <button  type="button" class="btn btn-outline-light text-dark contactMeBtn"  data-toggle="modal" data-target="#MessageMeModal">Message Me</button>
        </div>
    </div>

    <footer class="footer">
        <div class="footerName">Omar Amen</div>
        <div><img  onClick={(e) => {this.TopScroll(e)}}  class="footerLogo" src={imgSrc} alt="" /></div>
        <div class="footerLinks"><a onClick={(e) => {this.SkillsScroll(e)}} href="#"><span>Skills</span></a><div class="footerSep">|</div><a  onClick={(e) => {this.PortfolioScroll(e)}}  href="#"><span>Portfolio</span></a><div class="footerSep">|</div><a  onClick={(e) => {this.AboutScroll(e)}} href="#"><span>About</span></a><div class="footerSep">|</div><a href="#"  data-toggle="modal" data-target="#MessageMeModal"><span>Send Message</span></a></div>
        

    </footer>
        
            
      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps )(Footer_comp);
// const mapStateToProps = (state) => ({state})
// export default connect(mapStateToProps ,{})(Header_comp);




// //------------------------------------
// //-------------------------------------------------
// import './Header_comp.css';
// //import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
// import ReactDOM from "react-dom";
// import React from "react";

// export default class Header_comp extends React.Component {
//   state = {

//   };
//   // constructor(props)
//   // {
   
//   //   super(props);
//   //   this.state={
//   //     complete : ""
//   //   };
//   // }


//   render() {
//     return (
//       <>

//       </>
//     );
//   }

  
