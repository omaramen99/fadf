
//------------------------------------
//-------------------------------------------------
import './PortfolioCard_comp.css';

//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';


import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setProjectPageData } from '../store/actions';



 class PortfolioCard_comp extends React.Component {
  state = {
    // skillImgMain : _400x500Skill,
    // title: 'My Skills',
    // details: 'Select a skill to see details',
    // DetailsBtn : true

  };

  componentDidMount()
  {



  }



GoToProject()
{
 // this.props.setProjectPageData(this.props.ProjectPageOpj)
  this.props.state.history.push(`/portfolio/${this.props.projectId}`)
  // document.body.scrollTop = 60;
  // document.documentElement.scrollTop = 60;
}

  render() {


    return (
      <>

                    <div class="portCard">
                        <img class="img-fluid portCardImg" src={this.props.pImg} alt="Chania"/>
                        <div class="cardContent">
                            <span class="portProjName">{this.props.title}</span>
                            <button onClick={() => {this.GoToProject()}} type="button" class="btn btn-outline-light portProjBtn" >Explore</button>
                        </div>
                    </div>

                   

      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn,setProjectPageData})(PortfolioCard_comp);





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