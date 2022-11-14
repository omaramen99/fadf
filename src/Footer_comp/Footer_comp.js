
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

  
