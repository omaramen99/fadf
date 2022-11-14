
//------------------------------------
//-------------------------------------------------
import './Project2_Page_comp.css';

import React from "react";

import MoreProjects_comp from '../MoreProjects_comp/MoreProjects_comp';
import ProjectCarousel_comp from '../ProjectCarousel_comp/ProjectCarousel_comp';


import {Data} from '../appData';
import { connect } from 'react-redux';
import { setHistoryObj, setMatchObj } from '../store/actions';

class Project2_Page_comp extends React.Component {
  state = {
    id:"",
    Name:"",
    MinDiscription:"",
    Discription:"",
    Images:[],
    Tools:[],
    Features:[],
    YoutubeVidId:"",
    DownloadLink:"",
    SimilarProjectsIds:[]

    ,ToolsElements:[],
    FeaturesElements:[]

  };

  projectScroll()
  {
   
    try {
      var ele = document.getElementById('projectPageMain');
      ele.scrollIntoView({behavior: 'smooth', block: "start"})
      
    } catch (error) {
     this.props.state.history.push('/')
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
 
  }
  componentDidUpdate()
  {
    //console.log(this.props.match.params.id);
    if (this.props.match.params.id != this.state.id) {
      
      
          let ProjectData = Data.Projects.find(e => e.id == this.props.match.params.id)
          if (ProjectData) 
          {
            let toolsArr = [];
            let featuresArr = [];
      
            for (let i = 0; i < ProjectData.Tools.length; i++) {
              toolsArr.push(<li>{ProjectData.Tools[i]}</li>)
            }
            for (let i = 0; i < ProjectData.Features.length; i++) {
              featuresArr.push(<li>{ProjectData.Features[i]}</li>)
            }
      
      
      
            this.setState({
              id:ProjectData.id,
              Name:ProjectData.Name,
              MinDiscription:ProjectData.MinDiscription,
              Discription:ProjectData.Discription,
              Images:ProjectData.Images,
              Tools:ProjectData.Tools,
              Features:ProjectData.Features,
              YoutubeVidId:ProjectData.YoutubeVidId,
              DownloadLink:ProjectData.DownloadLink,
              SimilarProjectsIds:ProjectData.SimilarProjectsIds,
      
              ToolsElements:toolsArr,
              FeaturesElements:featuresArr
            });
          }else
          {
            //404Page
            this.props.history.push(`/404NotFound`)
          }

      
    }




  }
  componentDidMount()
  {
    this.RecordHistory();
    
    let ProjectData = Data.Projects.find(e => e.id == this.props.match.params.id)
    if (ProjectData) 
    {
      let toolsArr = [];
      let featuresArr = [];

      for (let i = 0; i < ProjectData.Tools.length; i++) {
        toolsArr.push(<li>{ProjectData.Tools[i]}</li>)
      }
      for (let i = 0; i < ProjectData.Features.length; i++) {
        featuresArr.push(<li>{ProjectData.Features[i]}</li>)
      }



      this.setState({
        id:ProjectData.id,
        Name:ProjectData.Name,
        MinDiscription:ProjectData.MinDiscription,
        Discription:ProjectData.Discription,
        Images:ProjectData.Images,
        Tools:ProjectData.Tools,
        Features:ProjectData.Features,
        YoutubeVidId:ProjectData.YoutubeVidId,
        DownloadLink:ProjectData.DownloadLink,
        SimilarProjectsIds:ProjectData.SimilarProjectsIds,

        ToolsElements:toolsArr,
        FeaturesElements:featuresArr
      });
    }else
    {
      //404Page
      this.props.history.push(`/404NotFound`)
    }
  

    try {
     var ele = document.getElementById('projectPageMain');
     ele.scrollIntoView({behavior: 'smooth', block: "start"})
      
    } catch (error) {
     this.props.state.history.push('/')
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

  }

  RecordHistory()
  {
    if (!this.props.state.history) {
     // alert('hi')
      
      this.props.setHistoryObj(this.props.history)
    }
    else{
     // alert('bye')
      console.log(this.props);
    }
      this.props.setMatchObj(this.props.match)
  }











  render() {
    return (
      <>
      <div class="container projectCont" id="projectPageMain">
    <div class="row">
      <div class="col-md-7  leftSide "  id="leftSide" >
        <div class="titlee">
          <h1>{this.state.Name}</h1>
          <span>{this.state.MinDiscription}</span>
        </div>
        <div class="row projDetails">
          <div class="col-md-6 projFeaturesSec">
            <h4 class="Features">Features</h4>
            <ul class='ListPoints' >
            {this.state.FeaturesElements}
                    
                  </ul>
                </div>
                <div class="col-md-6 projToolsSec">
                  <h4 class="Tools">Tools</h4>
                  <ul class='ListPoints'>

                    {this.state.ToolsElements}
                    
                  </ul>
                </div>
                
              </div>
            </div>
            <div class="col-md-5  rightSide" id="rightSide">

            <ProjectCarousel_comp ProjectID={this.state.id} prjName={this.state.Name} projTitle={this.state.MinDiscription} imgs={this.state.Images} ytVidID={this.state.YoutubeVidId} DwnldLink={this.state.DownloadLink} />
            
            </div>
    </div>
    <h2>Discription</h2>
    <div>{this.state.Discription}</div>
    <br/><br/>
    <MoreProjects_comp pId={this.state.id} ProjectsIds={this.state.SimilarProjectsIds}/>
  </div>

      
      </>
    );
  }

  
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setHistoryObj, setMatchObj})(Project2_Page_comp);





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