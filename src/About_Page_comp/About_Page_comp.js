
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
            url: `https://myportfolio-be-13-11-2022.onrender.com/api/sendmail?name=${name.value}&mail=${email.value}&subject=${subject.value}&message=${message.value}`,
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
        <div class="typed-text">AEC Software Developer, MEP & Fabrication Tools for Revit, Revit API Developer, APS / Forge Developer</div>
    </div>
    
</div>

<div class="large-btn">
    <div class="content-inner">
        <a class="btn downloadResume" href="https://drive.google.com/u/1/uc?id=1yXUWIuvX49BdU52Fcg1l5QhoS0o0s0Mi&export=download"><i class="fa fa-download"></i>Résumé</a>
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
                    I'm an AEC software developer with 5+ years of experience building BIM software,
                    specializing in MEP and fabrication tools for Revit.
                    A mechanical engineer with HVAC design training, I bring hands-on MEP knowledge to
                    C#/.NET, WPF/MVVM, Revit API and Autodesk Platform Services development,
                    and I work remotely with teams in the US and Europe.<br/>
                    Core skills: <br/>
                    ● MEP & Fabrication: conduit, custom multi-tier strut hanger and duct bank tools<br/>
                    ● BIM & Autodesk: Revit API, Dynamo, APS / Forge (Viewer, Model Derivative, Design Automation)<br/>
                    ● Desktop & .NET: .NET Framework 4.8, .NET 8+, WPF, MVVM, Excel automation (EPPlus)<br/>
                    ● Web & 3D: React, Node.js, Express, MongoDB, Three.js, Unity (AR/VR), glTF/GLB<br/>
                    ● Languages: C#, JavaScript (ES6+), Python, HTML5, CSS3<br/>
                    ● Tools & DevOps: Git, Azure DevOps CI/CD, WiX, Inno Setup, NUnit, xUnit<br/>
                </p>
                
            </div>
        </div>
        <div class="row" id="skillBarContainer">
            <div class="col-md-6">
                <div class="skills">
                    <div class="skill-name">
                        <p>C# / .NET</p><p>95%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="skill-name">
                        <p>WPF / MVVM</p><p>85%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="skills">
                    <div class="skill-name">
                        <p>Revit API</p><p>95%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="skill-name">
                        <p>APS / Forge</p><p>85%</p>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div class="education" id="education">
    <div class="content-inner">
        <div class="content-header">
            <h2>Education & Training</h2>
        </div>
        <div class="row align-items-center">
            <div class="col-md-6">
                <div class="edu-col">
                    <span>Nov 2020 <i>to</i> Mar 2021</span>
                    <h3>Full-Stack Web Development (MEARN)</h3>
                    <p>Information Technology Institute (ITI)</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="edu-col">
                    <span>Jul 2019 <i>to</i> Sep 2019</span>
                    <h3>BIM Track (UTW-11)</h3>
                    <p>Engineering Consultants Group (ECG) · Best Member Award</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="edu-col">
                    <span>2015 <i>to</i> 2019</span>
                    <h3>B.Sc. in Mechanical Power Engineering</h3>
                    <p>Helwan University, Cairo · Grade: Very Good · Graduation project: Excellent</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="edu-col">
                    <span>Jul 2018 <i>to</i> Sep 2018</span>
                    <h3>HVAC Design Track (UTW-10)</h3>
                    <p>Engineering Consultants Group (ECG) · Best Member & Best Project</p>
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
                    <span>Mar 2023 <i>to</i> Present</span>
                    <h3>Allied BIM, LLC</h3>
                    <h4>Montana, USA (Remote) · Full-time via FRBIM, an Upwork agency</h4>
                    <h5>AEC Software Developer</h5>
                    <p>
                        ● Maintain and extend "AlliedBIM - Fabrication Tools", an MEP fabrication add-in suite for Revit 2019–2027.<br/>
                        ● Built conduit cutting, duct bank spacer and WPF/MVVM conduit-run data tools with Excel import/export.<br/>
                        ● Built a cloud marketplace for publishing Revit families as GLB models and importing them back into projects.<br/>
                        ● Contribute to "AlliedBIM - Fabrication Connected", a web platform on Autodesk Platform Services.<br/>
                    </p>
                    <p>Revit API · C# · WPF · MVVM · .NET · APS · WiX · Azure DevOps</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="exp-col">
                    <span>Project-based</span>
                    <h3>FRBIM (Upwork agency)</h3>
                    <h4>Remote</h4>
                    <h5>Freelance AEC Software Developer</h5>
                    <p>
                        ● SPACEFIT (Puteaux, France): Revit API development, and started and built its APS web app for AI space planning.<br/>
                        ● D'Angelo & Associates (Texas, USA): Revit tools for an AV and telecom (low-voltage) design firm.<br/>
                    </p>
                    <p>Revit API · C# · APS / Forge</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="exp-col">
                    <span>Dec 2022 <i>to</i> Mar 2023</span>
                    <h3>Gallium</h3>
                    <h4>Cairo, Egypt</h4>
                    <h5>BIM Specialist / Developer</h5>
                    <p>● Developed a web-based BIM platform for facility management, linking building systems with IoT sensor data.<br/></p>
                    <p>Revit API · Forge APIs · AR VR MR · Unity · C# · Python · ReactJS · NodeJS · ThreeJS · JavaScript · HTML5 · CSS</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="exp-col">
                    <span>Jul 2021 <i>to</i> Nov 2022</span>
                    <h3>FirstOption Engineering Services</h3>
                    <h4>Cairo, Egypt</h4>
                    <h5>BIM R&D Engineer</h5>
                    <p>
                        ● Built Revit add-ins and BIM automation tools, mainly for MEP modeling and coordination teams.<br/>
                        ● Developed a digital twin platform and supporting web applications.<br/>
                        ● Created AR/VR applications for exploring BIM models.<br/>
                    </p>
                    <p>Revit API · Forge APIs · AR VR MR · C# · Python · JavaScript · HTML5 · CSS</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="exp-col">
                    <span>Sep 2019 <i>to</i> Aug 2020</span>
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
                    <p><i class="fa fa-tag"></i>AEC Software Developer</p>
                    <p><i class="fa fa-envelope"></i><a href="mailto:contact@omaramen.com">contact@omaramen.com</a></p>
                    <p><i class="fa fa-phone"></i><a href="tel:+201159390337">+20-115-939-0337</a></p>
                    <p><i class="fa fa-map-marker"></i>Maadi city, Cairo, Egypt</p>
                    <div class="social">
                        <a class="btn" href="https://twitter.com/omarame54520814"  target="_blank"><i class="fab fa-twitter"></i></a>
                        <a class="btn" href="https://www.facebook.com/omar.amen32/"  target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn" href="https://www.linkedin.com/in/omaramenbim/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a class="btn" href="https://www.youtube.com/channel/UCxcQOXC73rlM9DEcsz9pwLA" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                        {/* Upwork icon: inline SVG from Font Awesome Free 6 (CC BY 4.0), since the site's FA 5 kit has no fa-upwork */}
                        <a class="btn" href="https://www.upwork.com/freelancers/~010e2c3b929aaf2239" target="_blank" aria-label="Upwork"><svg viewBox="0 0 641 512" fill="currentColor" style={{height: '1em', width: '1.25em', verticalAlign: '-0.125em'}}><path d="M494.7 295.6c-50.3 0-83.5-38.9-92.8-53.9c11.9-95.3 46.8-125.4 92.8-125.4c45.5 0 80.9 36.4 80.9 89.7s-35.4 89.7-80.9 89.7zm0-237.8c-81.9 0-127.8 53.4-141 108.4c-14.9-28-25.9-65.5-34.5-100.3H206v141c0 51.1-23.3 89-68.8 89s-71.6-37.8-71.6-89l.5-141H.8v141c0 41.1 13.3 78.4 37.6 105.1c25 27.5 59.2 41.8 98.8 41.8c78.8 0 133.8-60.4 133.8-146.9V112.1c8.2 31.2 27.8 91.1 65.3 143.6l-35 199.4h66.4l23.1-141.3c7.6 6.3 15.7 12 24.2 17c22.2 14 47.7 21.9 73.9 22.8c0 0 4 .2 6.1 .2c81.2 0 145.9-62.9 145.9-147.8s-64.8-148.1-146-148.1z"/></svg></a>
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
