
//------------------------------------
//-------------------------------------------------
import './Projects_Page_comp.css';

import React from "react";
import ProjectsSingleCard_comp from '../ProjectsSingleCard_comp/ProjectsSingleCard_comp';




import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj } from '../store/actions';
import {Data} from '../appData';

class Projects_Page_comp extends React.Component {
  state = {
    allProjectsCards : ""
  };


  componentDidMount()
  {
    this.RecordHistory();
    let allProjects = []
    for (let i = 0; i < Data.Projects.length; i++) {

      if (Data.Projects[i].IsActive) {
          allProjects = [...allProjects, <ProjectsSingleCard_comp pId={Data.Projects[i].id} Name={Data.Projects[i].Name} Disc={Data.Projects[i].Discription} tools={Data.Projects[i].Tools} img={Data.Projects[i].Images[0]}/>]
      }
        
    }
    this.setState({
        allProjectsCards : allProjects
    })


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
 
<div class="container projectSingleCardPageContainer">
    {this.state.allProjectsCards}
</div>

      </>
    );
  }

  
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj})(Projects_Page_comp);
