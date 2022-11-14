
//------------------------------------
//-------------------------------------------------
import './SkillsBtn_comp.css';


 
import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setSelectedSkillData } from '../store/actions';


class SkillsBtn_comp extends React.Component {

  state =
  {
    imgSrc : "" ,
    MainimgSrc : "" ,
    btnClass : "skillBtnCont"
  }
  componentDidMount()
  {

    var imgSrc =  require(`../${this.props.ImgUrl}`).default;
    var MainimgSrc =  require(`../${this.props.MainImgUrl}`).default;

    this.setState({
      imgSrc ,
      MainimgSrc ,
      btnClass : "skillBtnCont"
    })


  }
  // constructor(props)
  // {

    
  //   super(props);

  //   var imgSrc =  require(`../${props.ImgUrl}`).default;
  //   var MainimgSrc =  require(`../${props.MainImgUrl}`).default;

  //   this.state={
  //       imgSrc ,
  //       MainimgSrc ,
  //       btnClass : "skillBtnCont"
  //   };
  // }
  // componentDidUpdate()
  // {
    
  //   if (this.props.selected == this.props.title) {
  //     this.setState(
  //       {
  //         btnClass : "skillBtnContSelected"
  //       })} else 
  //       {
  //         this.setState(
  //           {
  //             btnClass : "skillBtnCont"
  //           })
  //       }
      
    

  // }

  BtnClick = () => 
  {
    this.props.setSelectedSkillData({
      title:this.props.title,
      portrait:this.state.MainimgSrc,
      prife:this.props.details,
      details:this.props.fullDetails,
      chartParams:this.props.chartParams,
      chartVals:this.props.chartVals
    });
    this.props._onClick(this.props.title,this.props.details,parseInt(this._reactInternals.key),this.state.MainimgSrc);
  }


  render() {
    return (
      <>


                            <div onClick={this.BtnClick} className={this.props.state.selected==this.props.title?"skillBtnContSelected":"skillBtnCont"} >
                                <div class="skillBtn">
                                <img class="BtnImg" src={this.state.imgSrc} alt="" />
                                <img class="ghostImg" src={this.state.MainimgSrc} alt="" />
                                </div>
                                <span class="btnTitle" >{this.props.title}</span>
                            </div>






      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn,setSelectedSkillData})(SkillsBtn_comp);





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