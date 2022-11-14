
//------------------------------------
//-------------------------------------------------
import './Cover_comp.css';
// import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
import gifSrc from '../media/bg6.gif';
import gifStaticSrc from '../media/bg6static-min.png';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';

import React from "react"; 

export default class Cover_comp extends React.Component {
  state = {

  };
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }

  ContactMeScroll = (e) => 
 {
  
   e.preventDefault();
   e.stopPropagation();
     var ele = document.getElementById('stayConnected');
     var close = document.getElementById('close');
     close.click();
     ele.scrollIntoView({behavior: 'smooth', block: "center"})

 }

  render() {
    return (
      <>

<div class="vidCont" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0)) , url(${gifStaticSrc})` }} >

{/* <video class="headerVid"  src={vidSrc} muted autoPlay loop ></video> */}
<img class="headerGif" src={gifSrc} style={{filter: `brightness(90%)`}} alt="this slowpoke moves"  />
          </div>

 
          <h1 id="myName" class="name">Omar Amen</h1>
          <h1 class="title">BIM Software Developer</h1>
          <div class="row BtnCoubleCont"> 
              <div class="col-md-6">
                  <button type="button" onClick={(e) => {this.ContactMeScroll(e)}} class="btn btn-outline-light BtnCouble btn-outline-light-custom">Contact Me</button>

              </div>
              <div class="col-md-6">
                  <button type="button" class="btn btn-dark BtnCouble "  data-toggle="modal" data-target="#MessageMeModal" >Send Message</button>

            </div>

          </div>
          <div className='vidFiller'></div>
          {/* <span>cc</span> */}
      </>
    );
  }

  
}





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