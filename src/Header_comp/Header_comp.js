
//------------------------------------
//-------------------------------------------------
import './Header_comp.css';
import imgSrc from '../media/logoNav.png';
import loadingGif from '../media/Loading Gif.gif';
import React from "react";
import { connect } from 'react-redux';
import { setPingingVar } from '../store/actions';
var axios = require('axios');

 class Header_comp extends React.Component {
  state = {
    successMessageVisability : 'messageSuccessHid',
    displayNoneClass:''
  };
  constructor(props)
  {
   
    super(props);
    // this.state={
    //   complete : ""
    // };
  }
  componentDidUpdate()
  {

  }
  componentDidMount()
  {
    this.CheckApplicationPinging()


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

     },500)



     
   }

 }
 ContactMeScroll = (e) => 
 {
  
   e.preventDefault();
   e.stopPropagation();
     var ele = document.getElementById('stayConnected');
     var close = document.getElementById('close');
     close.click();
     ele.scrollIntoView({behavior: 'smooth', block: "start"})

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

    },500)
     
   }


 }
 AboutScrollMobile = (e) => 
 {
  
   e.preventDefault();
   e.stopPropagation();
   try {
    var ele = document.getElementById('aboutSection');
    var close = document.getElementById('close');
    close.click();
    ele.scrollIntoView({behavior: 'smooth', block: "start"})

     
   } catch (error) {
    this.props.state.history.push('/')
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.setTimeout(()=>{

      var port = document.getElementById('aboutH1');
      port.click();

    },500)
     
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

    },500)
     
   }


 }
 PortfolioScroll2 = (e) => 
 {
  
   e.preventDefault();
   e.stopPropagation();
   try {
    var ele = document.getElementById('portfolioSection');
    var close = document.getElementById('close');
    close.click();
    ele.scrollIntoView({behavior: 'smooth', block: "start"})

     
   } catch (error) {
    this.props.state.history.push('/')
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.setTimeout(()=>{

      var port = document.getElementById('portfolioH1');
      port.click();

    },500)
     
   }


 }
 port = (e) => 
 {
  e.preventDefault();
  e.stopPropagation();
  this.props.state.history.push('/skill')

 }
 HomeRoute = (e) => 
 {
  e.preventDefault();
  e.stopPropagation();
  try {

    var ele = document.getElementById('myName');
    var close = document.getElementById('close');
     close.click();
    ele.scrollIntoView({behavior: 'smooth', block: "center"})

    
  } catch (error) {
    this.props.state.history.push('/')
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    var close = document.getElementById('close');
     close.click();
    
  }

 }
 fort = (e) => 
 {
  e.preventDefault();
  e.stopPropagation();
  this.props.state.history.push('/')

 }
 forttt = (e) => 
 {
  e.preventDefault();
  e.stopPropagation();
  console.log(this.props.state.history);

 }
 CustomSubmit(e)
 {

  var startLoading = () => 
  {
    var ss = document.getElementById('loadingSpinnerMail')
    ss.style.display = "flex"
  }

  var endLoading = () => 
  {
    var ss = document.getElementById('loadingSpinnerMail')
    ss.style.display = "none"
  }




   var setSuccessMessageVisabilityToTrue = () => {
       this.setState({
           successMessageVisability : ''
       })
   }
   var setSuccessMessageVisabilityToFalse = () => {
    this.setState({
        successMessageVisability : 'messageSuccessHid'
    })
}
     e.preventDefault()
   var form = document.getElementById("contactFormmm");

   if (form.checkValidity()) {

      form.classList.remove('was-validated');
      startLoading();

       var name = document.getElementById('nameee');
       var email = document.getElementById('emailll');
       var subject = document.getElementById('subjecttt');
       var message = document.getElementById('messageee');
   

       var config = {
        method: 'post',
        url: `https://my-portfolio-backend-11-12-22.herokuapp.com/api/sendmail?name=${name.value}&mail=${email.value}&subject=${subject.value}&message=${message.value}`,
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data));
        setSuccessMessageVisabilityToTrue();
        endLoading();
        subject.value = ""
        message.value = ""
        setTimeout(() => {
          setSuccessMessageVisabilityToFalse();
        }, 5000);
      })
      .catch(function (error) {
        endLoading();
      });
   }
   else{

       form.classList.add('was-validated');
   }
 }

 CheckApplicationPinging()
 {
  var  _RemoveLoadingScreen = ()=>
  {
   this.props.setPingingVar(true);
   this.setState({
     displayNoneClass:'displayNoneClass'
   })
   var bdy = document.getElementById('applicationBody');
   bdy.style.overflowX = ""
   bdy.style.overflowY = ""
  }
    if (this.props.state.isPinged) {
      this.RemoveLoadingScreen();
    }else
    {
      document.documentElement.scrollTop = 0;

      //Need Ping
      this.ApplyLoadingScreen()
      
      setTimeout(() => {
        if (!this.props.state.isPinged) {
          this.RemoveLoadingScreen();
        }
      }, 5000);

      ////////////////Pinging//////////////
      var config = {
        method: 'get',
        url: 'https://my-portfolio-backend-11-12-22.herokuapp.com/api/ping',
        headers: { }
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if (response.data == "pinged") {
          _RemoveLoadingScreen();
          var configg = {
            method: 'post',
            url: 'https://my-portfolio-backend-11-12-22.herokuapp.com/api/traffic/record',
            headers: { }
          };
          axios(configg)
          .then(function (response) {
            //console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            //console.log(error);
          });
        }
      })
      .catch(function (error) {
        //console.log(error);
      });



    }
 }

 RemoveLoadingScreen()
 {
  this.setState({
    displayNoneClass:'displayNoneClass'
  })
  var bdy = document.getElementById('applicationBody');
  bdy.style.overflowX = ""
  bdy.style.overflowY = ""
 }

 ApplyLoadingScreen()
 {
  this.setState({
    displayNoneClass:''
  })
  var bdy = document.getElementById('applicationBody');
  bdy.style.overflowX = "hidden"
  bdy.style.overflowY = "hidden"
 }


  render() {

          window.addEventListener('scroll',NavStickyTrigger);
          
          
          function NavStickyTrigger() {
              var mynav = document.getElementById('mynav');
              var navBtn = document.getElementById('navBtn');
              
                if (mynav.offsetTop != 50) {
                    mynav.classList.add("sticky");
                    navBtn.classList.add("navBtnn");
                    
                    
                }
                else
                {
                    mynav.classList.remove("sticky");
                    navBtn.classList.remove("navBtnn");
                }
                
            }




    return (
      <>
      <div class={`loadingScreenContainer ${this.state.displayNoneClass}`}><img class="loadingGif" src={loadingGif} alt="loading" /></div>


              <nav class="navbar navbar-expand-sm bg-dark  sticky-top defaultnav" id="mynav">
            
            <a class="navbar-brand navbar-brandd" href="#">
              <img onClick={(e) => {this.HomeRoute(e)}} class="logo" src={imgSrc} alt="logo" />
            </a>
            
            
            <ul class="navbar-nav">
              <li class="nav-item navLinkk">
                <a class="nav-link navLink" id="aboutH1" onClick={(e) => {this.AboutScroll(e)}} href="#">About</a>
              </li>
              <li class="nav-item"><div class="sep"></div></li>
              <li class="nav-item navLinkk">
                <a class="nav-link  navLink" href="#" id="portfolioH1"  onClick={(e) => {this.PortfolioScroll(e)}} >Portfolio</a>
              </li>
              <li class="nav-item"><div class="sep"></div></li>
              <li class="nav-item navLinkk">
                <a class="nav-link  navLink" href="#" id='skillsH1' onClick={(e) => {this.SkillsScroll(e)}}>Skills</a>
              </li>
              <li class="nav-item"><div class="sep"></div></li>
              <li class="nav-item navLinkk">
                <a class="nav-link navLink" onClick={(e) => {this.ContactMeScroll(e)}} href="#">Contact Me</a>
              </li>
            </ul>
            <button id="navBtn" type="button" class="btn btn-dark navBtn" data-toggle="modal" data-target="#MessageMeModal">Send Message</button>
          </nav>



          <nav class="mobNav">
           <span data-toggle="modal" data-target="#exampleModal" class="bars"><i class="fas fa-bars"></i></span>
            <img onClick={(e) => {this.HomeRoute(e)}}  class="logoMob" src={imgSrc} alt="logo" />  
          </nav>

          <div class="modal left fade" id="exampleModal" tabindex="" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content modall">
                    <div class="modal-body modalBody">
                        <h1  onClick={(e) => {this.HomeRoute(e)}}  class="namee">Omar Amen</h1>
                        <div class="sep2"></div>
                        <span class="sideContent" onClick={(e) => {this.AboutScrollMobile(e)}}>About</span>
                        <div class="sep2"></div>
                        <span class="sideContent"  onClick={(e) => {this.PortfolioScroll2(e)}}>Portfolio</span>
                        <div class="sep2"></div>
                        <span class="sideContent" onClick={(e) => {this.SkillsScroll(e)}}>Skills</span>
                        <div class="sep2"></div>
                        <span class="sideContent" onClick={(e) => {this.ContactMeScroll(e)}}>Contact Me</span>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" id="close" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>



        <div class="modal fade" id="MessageMeModal">
          <div class="modal-dialog modal-xl modal-dialog-centered modalContCustom">
            <div class="modal-content">

              
              <div class="modal-header">
                <h4 class="modal-title">Be in touch with me</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>

              
              <div class="modal-body qqqqq">
                


              <div class="row ">
				<div class="col-md-12">
					<div class="wrapper">
						<div class="row no-gutters">
							<div class="col-md-6">
								<div class="contact-wrap w-100 p-lg-5 p-4">
                <div className={`messageSuccessVis ${this.state.successMessageVisability}`}>sent successfully, Thank you!</div>
									<h3 class="mb-4">Send me a message</h3>
									<div id="form-message-warning" class="mb-4"></div> 
				      		<div id="form-message-success" class="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form action="#" id="contactFormmm" name="contactForm" class="contactForm">
										<div class="row">
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control form-controll" name="name" id="nameee" placeholder="Name" required/>
                            <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Please fill out this field.</div>
												</div>
											</div>
											<div class="col-md-12"> 
												<div class="form-group">
													<input type="email" class="form-control form-controll" name="email" id="emailll"  pattern="([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,8})"  placeholder="Email" required/>
                          <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Please fill out this field.</div>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<input type="text" class="form-control form-controll" name="subject" id="subjecttt" placeholder="Subject" required/>
                          <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Please fill out this field.</div>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<textarea name="message" class="form-control form-controll" id="messageee" cols="30" rows="6" placeholder="Message" required></textarea>
                          <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Please fill out this field.</div>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													{/* <input type="submit" value="Send Message" class="btnn btn-primary" onClick={(e)=>(this.CustomSubmit(e))}/> */}
                          <button type="submit" class="btnn btn-primary btnnbtnn"  onClick={(e)=>(this.CustomSubmit(e))}><div id='loadingSpinnerMail' class="spinner-border text-light loadingSpinnerMail"></div> <span>Send Message</span></button>
													<div class="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-6 d-flex align-items-stretch">
								<div class="info-wrap w-100 p-lg-5 p-4 img">
									<h3>Contact me</h3>
									<p class="mb-4">I will be so glad if you communicate with me</p>
				        	<div class="dbox w-100 d-flex align-items-start">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text pl-3 aaasssddd">
					            <p><span>Address:</span> Maadi city, Cairo, Egypt</p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Phone:</span> <a href="tel:+201159390337">+20 115 939 0337</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Email:</span> <a  href="mailto:contact@omaramen.com">contact@omaramen.com</a></p>
					          </div>
				          </div>
				        	<div class="dbox w-100 d-flex align-items-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text pl-3">
					            <p><span>Website</span> <a href="https://www.omaramen.com">OmarAmen.com</a></p>
					          </div>
				          </div>
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
 


              </div>

              
              {/* <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div> */}

            </div>
          </div>
        </div>
        
            
      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})
//withRouter(Header_comp);
export default connect(mapStateToProps, {setPingingVar})(Header_comp);
//connect(mapStateToProps );
//export default withRouter(Header_comp);
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

  
