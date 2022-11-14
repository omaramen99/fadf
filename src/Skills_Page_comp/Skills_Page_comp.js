
//------------------------------------
//-------------------------------------------------
import './Skills_Page_comp.css';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
 
import React from "react";
import Skills_topPage_comp from '../Skills_topPage_comp/Skills_topPage_comp';
import Skills_comp from '../Skills_comp/Skills_comp';
import MoreProjects_comp from '../MoreProjects_comp/MoreProjects_comp';
import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj } from '../store/actions';
class Skills_Page_comp extends React.Component {
  state = {
    Skills_topPage_comp : []

  };
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }
  componentDidMount()
  {
    
    this.RecordHistory();
    console.log(this.props);
    this.setState({
      Skills_topPage_comp : [<Skills_topPage_comp />]
});

    
  }

  RecordHistory()
  {
    if (!this.props.state.history) {
      
      this.props.setHistoryObj(this.props.history)
    }
    else{
      
      console.log(this.props);
    }
    this.props.setMatchObj(this.props.match)
  }


  render() {
    return (
      <>
      {this.state.Skills_topPage_comp}
      <Skills_comp />
      <div class="container MoreProjectsSkillpage">

      <MoreProjects_comp />
      </div>
      
      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj})(Skills_Page_comp);





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