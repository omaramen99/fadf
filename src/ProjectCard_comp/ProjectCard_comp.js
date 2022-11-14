
//------------------------------------
//-------------------------------------------------
import './ProjectCard_comp.css';


import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setSkillPageData } from '../store/actions';



 class ProjectCard_comp extends React.Component {
  state = {
 

  };

  componentDidMount()
  {




  }

  GoToProject()
  {
    //this.props.state.history.push(`/sd`)
    this.props.state.history.push(`/portfolio/${this.props.projectId}`)
    try {
      var ele = document.getElementById('projectPageMain');
      ele.scrollIntoView({behavior: 'smooth', block: "start"})
       
     } catch (error) {

      // this.props.state.history.push('/')
      //  document.body.scrollTop = 0;
      //  document.documentElement.scrollTop = 0;
     }
    // document.location.reload();
    // var ele = document.getElementById('projectPageMain');
    // ele.scrollIntoView({behavior: 'auto', block: "start"})
   

  }



  render() {


    return (
      <>

                    <div class="portCardd">
                        <img class="img-fluid portCardImgg" src={this.props.pImg} alt="Chania"/>
                        <div class="cardContentt">
                            <span class="portProjNamee">{this.props.title}</span>
                            <button type="button" class="btn btn-outline-light portProjBtnn" onClick={() => {this.GoToProject()}}>Explore</button>
                        </div>
                    </div>

                   

      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn,setSkillPageData})(ProjectCard_comp);





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