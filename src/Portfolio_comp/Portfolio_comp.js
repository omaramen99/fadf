
//------------------------------------
//-------------------------------------------------
import './Portfolio_comp.css';
//import pbg from '../media/pbg.jpeg';
import pbg from '../media/bgi.jpg';

import PortfolioCard_comp from '../PortfolioCard_comp/PortfolioCard_comp';
import ReactDOM from "react-dom";
import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setSkillPageData } from '../store/actions';
import {Data} from '../appData';


 class Portfolio_comp extends React.Component {
  state = {
    // skillImgMain : _400x500Skill,
    // title: 'My Skills',
    // details: 'Select a skill to see details',
    // DetailsBtn : true

  };

  componentDidMount()
  {
    
    let A = Data.Projects.find(e => e.id == Data.TopProjects[0]);
    let B = Data.Projects.find(e => e.id == Data.TopProjects[1]);
    let C = Data.Projects.find(e => e.id == Data.TopProjects[2]);

    this.setState({
      CardsArr : [ 
        <PortfolioCard_comp projectId={A.id} title={A.Name} pImg={A.Images[0]}/>,
        <PortfolioCard_comp projectId={B.id} title={B.Name} pImg={B.Images[0]}/>,
        <PortfolioCard_comp projectId={C.id} title={C.Name} pImg={C.Images[0]}/>
      ]
    });


  }
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }


ExploreAll()
{
 
  document.documentElement.scrollTop = 0;
  this.props.state.history.push('/projects')
}

  render() {


    return (
      <>
<div class="container-fluid portCont" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.5)) , url(${pbg})` }}>
            <div class="row portfolioMainRow" id="portfolioSection">

                <div class="col-lg-7 portLeft" id="portfolioSection2">
                    <span class="portTitle">Portfolio</span><br/>
                    <span class="portTitlee">check my projects</span><br/>
                    <div class="portBtnCont">
                        <button type="button" class="btn btn-outline-light btn-lg" onClick={()=>{this.ExploreAll()}} >Explore All</button>
                    </div>
                </div>
                <div class="col-lg-5 portRight">
                    {/* <!-- /////////////////////////////////////// --> */}
                    {this.state.CardsArr}
                    {/* <!-- /////////////////////////////////////// --> */}
                    {/* portBtn */}
                    <div class="portBtnContt">
                        <button type="button" class="btn btn-outline-light btn-lg  portBtn" onClick={()=>{this.ExploreAll()}} >Explore All</button>
                    </div>
                </div>

            </div>

        </div>

 

      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn,setSkillPageData})(Portfolio_comp);





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