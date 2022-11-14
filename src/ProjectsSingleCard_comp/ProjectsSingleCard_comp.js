
//------------------------------------
//-------------------------------------------------
import './ProjectsSingleCard_comp.css';

import React from "react";


import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj } from '../store/actions';


class ProjectsSingleCard_comp extends React.Component {
  state = {
    toolsLine : ""
  };


  componentDidMount()
  {

    var x = "";
    for (let i = 0; i < this.props.tools.length; i++) {
        if (i == 0) {
            x += `${this.props.tools[i]}`
        }else{

            x += ` | ${this.props.tools[i]}`
        }
        
    }
    this.setState({
        toolsLine:x
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






  GoToProject()
  {

    this.props.state.history.push(`/portfolio/${this.props.pId}`)

  }


  render() {
    return (
      <>
 
 <div class="projectSingleCardContainer">

<div class="projectSingleCardImageContainer">
    <img src={this.props.img} class="projectSingleCardImage" alt="" />
</div>

<div class="projectSingleCardTitle">
    <h5>{this.props.Name}</h5>
</div>

<div class="projectSingleCardDiscription">
    <p>

       {this.props.Disc}
    </p>
</div>

<div class="projectSingleCardTools">Tools: {this.state.toolsLine}</div>

<button  onClick={() => {this.GoToProject()}} type="button" class="btn btn-dark projectSingleCardButton">Details</button>

</div>

      </>
    );
  }

  
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj})(ProjectsSingleCard_comp);
