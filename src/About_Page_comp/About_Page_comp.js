
//------------------------------------
//-------------------------------------------------
import './About_Page_comp.css';


import React from "react";



import omaramen400 from '../media/omaramen400.png';
import omaramen246400 from '../media/omaramen246400.png';


import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj } from '../store/actions';
import {Helmet} from "react-helmet";
var axios = require('axios');
class About_Page_comp extends React.Component {
  state = {
    successMessageVisability : 'messageSuccessHid'
  };


  componentDidMount()
  {
    this.setState({
        successMessageVisability : 'messageSuccessHid'
    })
    this.RecordHistory();
    
   // document.documentElement.scrollTop = 0;
  }

  RecordHistory()
  {
    if (!this.props.state.history) {
      this.props.setHistoryObj(this.props.history)
    }
    else{
     //console.log(this.props);
    }
      this.props.setMatchObj(this.props.match)
  }




  CustomSubmit(e)
  {
    var startLoading = () => 
    {
      var ss = document.getElementById('loadingSpinnerMailAbout')
      ss.style.display = "flex"
    }
  
    var endLoading = () => 
    {
      var ss = document.getElementById('loadingSpinnerMailAbout')
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
    var form = document.getElementById("form1sendmessage");

    if (form.checkValidity()) {
        form.classList.remove('was-validated');
        startLoading();
        
        var name = document.getElementById('formsubmitAname');
        var email = document.getElementById('formsubmitAemail');
        var subject = document.getElementById('formsubmitAsubject');
        var message = document.getElementById('formsubmitAmessage');
    


        var config = {
            method: 'post',
            url: `https://my-portfolio-backend-11-12-22.herokuapp.com/api/sendmail?name=${name.value}&mail=${email.value}&subject=${subject.value}&message=${message.value}`,
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
            //console.log(JSON.stringify(response.data));
            //console.log(http.responseText);
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

        // var http = new XMLHttpRequest();
        // http.open("POST", "https://formsubmit.co/contact@omaramen.com", true);
        // http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        // var params = `_captcha=false&name=${name.value}&email=${email.value}&subject=${subject.value}&message=${message.value}`
        // http.send(params);
        // http.onload = function() {
        //   console.log(http.responseText);
        //   setSuccessMessageVisabilityToTrue();
        // }
    }
    else{

        form.classList.add('was-validated');
    }
  }







  render() {
    return (
      <>
            <div class="content aboutmePageCont">

<div class="header" id="header">
    <div class="content-inner" style={{ background: `url(${omaramen246400}) right bottom no-repeat` }}>
        <p></p>
        <h1 id='footerNameAboutMe'>Omar Amen</h1>
        <h2 id='footerTitlesAboutMe'></h2>
        <div class="typed-text">BIM Software Dev, Web Developer, Revit API Dev, Autodesk Forge Dev, Extended Realities Dev</div>
    </div>
    
</div>

<div class="large-btn">
    <div class="content-inner">
        <a class="btn downloadResume" href="https://drive.google.com/u/1/uc?id=1JpmS9LBCMn0K6_rRYkeGX4vYg2PQgcVz&export=download"><i class="fa fa-download"></i>Resume</a>
    </div>
</div>

<div class="aboutt" id="about">
    <div class="content-inner">
        <div class="content-header">
            <h2>About Me</h2>
        </div>
        <div class="row align-items-center">
            <div class="col-md-6 col-lg-5">
                <img src={omaramen400} alt="Image"/>
            </div>
            <div class="col-md-6 col-lg-7">
                <p>
                    I'm a Developer with a mechanical Engineering-based background, 
                    interested in developing and implementing AEC software, 
                    specialized in BIM Automation and BIM application development using desktop development and 
                    full-stack web development technologies for enhancing workflow, reducing time and effort.<br/>
                    Worked and interested in: <br/>
                    ● BIM Automation<br/>
                    ● Revit API<br/>
                    ● Navisworks API<br/>
                    ● AutoCAD API<br/>
                    ● Full stack web development [MEARN]<br/>
                    ● Autodesk Forge APIs<br/>
                    ● Digital Twin platforms development<br/>
                    ● Internet of things [IOT]<br/>
                    ● Extended Realities [VR, AR, MR]<br/>
                </p>
                
            </div>
        </div>
        <div class="row" id="skillBarContainer">
            <div class="col-md-6">
                <div class="skills">
                    <div class="skill-name">
                        <p>BIM .net development</p><p>90%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="skill-name">
                        <p>Front End Web Dev</p><p>85%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="skills">
                    <div class="skill-name">
                        <p>BIM web development</p><p>85%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="skill-name">
                        <p>Back End Web Dev</p><p>80%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="education" id="education">
    <div class="content-inner">
        <div class="content-header">
            <h2>Education</h2>
        </div>
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="edu-col">
                    <span>01-Nov-2020 <i>to</i> 1-Mar-2021</span>
                    <h3>MEARN Full stack web development Diploma</h3>
                    <p>ITI - Information Technology Institute</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="edu-col">
                    <span>01-Jul-2019 <i>to</i> 31-Sep-2019</span>
                    <h3>BIM Diploma</h3>
                    <p>University to Work (UTW) 11th Round - BIM [Building Information Modeling]</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="edu-col">
                    <span>01-Jan-2015 <i>to</i> 1-Aug-2019</span>
                    <h3>Bachelor Degree</h3>
                    <p>Mechanical Power Engineering - Helwan University</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="edu-col">
                    <span>01-Jul-2018 <i>to</i> 31-Sep-2018</span>
                    <h3>HVAC design Diploma</h3>
                    <p>University to Work (UTW) 10th Round - HVAC Design systems</p>
                </div>
            </div>
            
        </div>
    </div>
</div>

<div class="experience" id="experience">
    <div class="content-inner">
        <div class="content-header">
            <h2>Experience</h2>
        </div>
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="exp-col">
                    <span>01-Dec-2022 <i>to</i> Present</span>
                    <h3>Galluim</h3>
                    <h4>Cairo, Egypt</h4>
                    <h5>BIM Specialist | BIM Developer</h5>
                    <p>Revit API · Forge APIs · AR VR MR · C# · Python · JavaScript · HTML5 · CSS</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="exp-col">
                    <span>01-Jul-2021 <i>to</i> 15-Nov-2022</span>
                    <h3>FirstOption ES</h3>
                    <h4>Cairo, Egypt</h4>
                    <h5>BIM R&D Specialist</h5>
                    <p>Revit API · Forge APIs · AR VR MR · C# · Python · JavaScript · HTML5 · CSS</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="exp-col">
                    <span>01-Nov-2020 <i>to</i> 01-Mar-2021</span>
                    <h3>ITI</h3>
                    <h4>Smart Village, Cairo, Egypt</h4>
                    <h5>Web Developer</h5>
                    <p>TypeScript · AngularJS · React.js · Node.js · Express.js · Three.js · MongoDB · JavaScript · HTML5 · CSS</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="exp-col">
                    <span>01-Sep-2019 <i>to</i> 31-Aug-2020</span>
                    <h3>TEAServ ES</h3>
                    <h4>Cairo, Egypt</h4>
                    <h5>Mechanical BIM Engineer</h5>
                    <p>Revit · Mechanical, Electrical, and Plumbing (MEP) · MEP Coordination · MEP Modeling · Navisworks · bim360</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="service" id="service">
    <div class="content-inner">
        <div class="content-header">
            <h2>Service</h2>
        </div>
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="srv-col">
                    <i class="fa fa-desktop"></i>
                    <h3>BIM Software Development</h3>
                    <p>I can develop .net BIM addins through C# or Python for Revit, Navisworks, AutoCAD, ...etc.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="srv-col">
                    <i class="fa fa-code"></i>
                    <h3>Web Development</h3>
                    <p>Specialist in MERN full stack web development for BIM and normal buisness applications/web sites</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="srv-col">
                    <i class="fa fa-american-sign-language-interpreting"></i>
                    <h3>Digital Twin through BIM</h3>
                    <p>I can delever a BIM based digital twin application by integrating BIM, IOT and web dev.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="srv-col">
                    <i class="fa fa-vr-cardboard"></i>
                    <h3>AR | VR | MR</h3>
                    <p>can produce extended realities applications through game engines as Unity and Unreal</p>
                </div>
            </div>
        </div>
    </div>
</div>



<div class="contact" id="contact">
    <div class="content-inner">
        <div class="content-header">
            <h2>Contact</h2>
        </div>
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="contact-info">
                    <p><i class="fa fa-user"></i>Omar Amen</p>
                    <p><i class="fa fa-tag"></i>BIM Software Developer</p>
                    <p><i class="fa fa-envelope"></i><a href="mailto:contact@omaramen.com">contact@omaramen.com</a></p>
                    <p><i class="fa fa-phone"></i><a href="tel:+201159390337">+20-115-939-0337</a></p>
                    <p><i class="fa fa-map-marker"></i>Maadi city, Cairo, Egypt</p>
                    <div class="social">
                        <a class="btn" href="https://twitter.com/omarame54520814"  target="_blank"><i class="fab fa-twitter"></i></a>
                        <a class="btn" href="https://www.facebook.com/omar.amen32/"  target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn" href="https://www.linkedin.com/in/omaramenbim/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn" href="https://www.youtube.com/channel/UCxcQOXC73rlM9DEcsz9pwLA" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div className={`messageSuccessVis ${this.state.successMessageVisability}`}>sent successfully, Thank you!</div>
                <div class="form">
                    <form action="" class="needs-validation" id='form1sendmessage'> 
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <input type="text" class="form-control" name="name" id='formsubmitAname' placeholder="Your Name" required/>
                                <div class="valid-feedback">Valid.</div>
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </div>
                            <div class="form-group col-md-6">
                                <input type="email" class="form-control" pattern="([A-Za-z\d\.-]+)@([A-Za-z\d-]+)\.([A-Za-z]{2,8})" name="email" id='formsubmitAemail' placeholder="Your Email" required/>
                                <div class="valid-feedback">Valid.</div>
                                <div class="invalid-feedback">Please fill out this field.</div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" name="subject" id='formsubmitAsubject' placeholder="Subject" required/>
                            <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" name="message" id='formsubmitAmessage' placeholder="Message" required></textarea>
                            <div class="valid-feedback">Valid.</div>
                            <div class="invalid-feedback">Please fill out this field.</div>
                        </div>
                        <div><button class="btn btnnbtnn" type="submit" onClick={(e)=>(this.CustomSubmit(e))} ><div id='loadingSpinnerMailAbout' class="spinner-border text-dark loadingSpinnerMail"></div> <span>Send Message</span></button></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>



</div>

<Helmet>
<script>
{
  `

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
// Typed Initiate
if ($('.header h2').length == 1) {
var typed_strings = $('.header .typed-text').text();
var typed = new Typed('.header h2', {
  strings: typed_strings.split(', '),
  typeSpeed: 100,
  backSpeed: 20,
  smartBackspace: false,
  loop: true
});
}


// Skills
var skillBarAnimated = false;
var skillBarContainer = document.getElementById('skillBarContainer')
var interval = setInterval(() => {
    //console.log("ping")
    $('.progress .progress-bar').each(function () {
        $(this).css("width", '0%');
      });
      if(isInViewport(skillBarContainer) && !skillBarAnimated)
      {
        clearInterval(interval);
        skillBarAnimated = true;
          $('.skills').waypoint(function () {
          $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
          });
          }, {offset: '80%'});

      }
}, 100);


// Porfolio isotope and filter
// var portfolioIsotope = $('.portfolio-container').isotope({
// itemSelector: '.portfolio-item',
// layoutMode: 'fitRows'
// });

// $('#portfolio-flters li').on('click', function () {
// $("#portfolio-flters li").removeClass('filter-active');
// $(this).addClass('filter-active');

// portfolioIsotope.isotope({filter: $(this).data('filter')});
// });


// // Review slider
// $('.review-slider').slick({
// autoplay: true,
// dots: false,
// infinite: true,
// slidesToShow: 1,
// slidesToScroll: 1
// });


// Back to top button
// $(window).scroll(function () {
// if ($(this).scrollTop() > 100) {
//   $('.back-to-top').fadeIn('slow');
// } else {
//   $('.back-to-top').fadeOut('slow');
// }
// });
// $('.back-to-top').click(function () {
// $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
// return false;
// });

  `
}

</script>
</Helmet>
       
      </>
    );
  }

  
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj})(About_Page_comp);





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

  
// }