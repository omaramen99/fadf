
//------------------------------------
//-------------------------------------------------
import './MoreProjects_comp.css';

//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import PortfolioCard_comp from '../PortfolioCard_comp/PortfolioCard_comp';

import ProjectCard_comp from '../ProjectCard_comp/ProjectCard_comp';

import React from "react";
import { connect } from 'react-redux';

import {Data} from '../appData'; 


class MoreProjects_comp extends React.Component {
  state = {
    pid:"",
    moreProjectsArr : []
    // skillImgMain : _400x500Skill,
    // title: 'My Skills',
    // details: 'Select a skill to see details',
    // DetailsBtn : true

  };

  componentDidUpdate()
  {

   if (this.props.pId != this.state.pid) {
    let arrr = []
    for (let i = 0; i < this.props.ProjectsIds.length; i++) {
      
    let p =  Data.Projects.find(e => e.id == this.props.ProjectsIds[i])
    if (p) {
      arrr = [...arrr, <ProjectCard_comp key={i} class="col-4" projectId={p.id} title={p.Name} pImg={p.Images[0]}/>]
    }
    }

    if (arrr.length < 4) {
      for (let i = 0; i < Data.Projects.length ; i++) {
        if (Data.Projects[i].id != this.props.pId) {
          let p = arrr.find(e => e.props.projectId == Data.Projects[i].id)
          if (!p) {
            let pp =  Data.Projects.find(e => e.id == Data.Projects[i].id)
            arrr = [...arrr, <ProjectCard_comp key={i} class="col-4" projectId={pp.id} title={pp.Name} pImg={pp.Images[0]}/>]
  
          }
          if (arrr.length == 4) {
            break;
          }
          
        }
        }
    }



    this.setState({
      pid:this.props.pId,
      moreProjectsArr : arrr
    })

   }


  }
  componentDidMount()
  {
    let arrr = []
    console.log(this.props.ProjectsIds);
    if (this.props.ProjectsIds) {
      for (let i = 0; i < this.props.ProjectsIds.length; i++) {
        
      let p =  Data.Projects.find(e => e.id == this.props.ProjectsIds[i])
      if (p && p.IsActive) {
        arrr = [...arrr, <ProjectCard_comp key={i} class="col-4" projectId={p.id} title={p.Name} pImg={p.Images[0]}/>]
      }
      }
      
    }


    if (arrr.length < 4) {
      for (let i = 0; i < Data.Projects.length ; i++) {
        if (Data.Projects[i].id != this.props.pId) {
          let p = arrr.find(e => e.props.projectId == Data.Projects[i].id)
          if (!p) {
            let pp =  Data.Projects.find(e => e.id == Data.Projects[i].id)
            if (pp.IsActive) {
              arrr = [...arrr, <ProjectCard_comp key={i} class="col-4" projectId={pp.id} title={pp.Name} pImg={pp.Images[0]}/>]
              
            }
  
          }
          if (arrr.length == 4) {
            break;
          }
          
        }
        }
    }




    this.setState({
      pid:this.props.pId,
      moreProjectsArr : arrr
    })



  }
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }

  slide(direction)
  {
    var testimonial_group = document.getElementById('testimonial-group');
    this.sideScroll(testimonial_group,direction,1,300,5);
  }
  sideScroll(element,direction,speed,distance,step)
  {
   var scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
  }


  ExploreAll(e)
  {
   e.preventDefault();
    document.documentElement.scrollTop = 0;
    this.props.state.history.push('/projects')
  }

  render() {


    return (
      <>
    <h2>Explore More</h2>
    <div class='showAll' ><a href="" onClick={(e)=>{this.ExploreAll(e)}}>Show All</a></div>
    <div class="row SliderContainer">

      <div class="col-1 leftArrow"><i onClick={(e) => {this.slide('left')}} class="fas fa-caret-left Arroww"></i></div>
      <div class="col-10 Slider">
        <div class="container testimonial-group">
        <div class="row text-center testimonial-group"  id="testimonial-group" >
          {this.state.moreProjectsArr}
        {/* <ProjectCard_comp class="col-4" projectId={"1ed6d221-1ce6-46c1-b43a-5f9363fca2ac"} title={'Jumia clone'} pImg={jum}/>
        <ProjectCard_comp class="col-4" projectId={"576bc703-1ce6-46c1-b43a-5f9363fca2ac"} title={'Portfolio website'} pImg={por}/>
        <ProjectCard_comp class="col-4" projectId={"1ed6d221-1ce6-46c1-b43a-5f9363fca2ac"} title={'IKEA'} pImg={ikea}/>
        <ProjectCard_comp class="col-4" projectId={"1ed6d221-1ce6-46c1-b43a-5f9363fca2ac"} title={'Jumia clone fsdf fdgddh'} pImg={jum}/> */}

        </div>
  
      </div>
    </div>
    <div class="col-1 rightArrow"><i  onClick={(e) => {this.slide('right')}}  class="fas fa-caret-right Arroww"></i></div>
    </div>

 

      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(MoreProjects_comp);





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