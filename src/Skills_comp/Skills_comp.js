
//------------------------------------
//-------------------------------------------------
import './Skills_comp.css';

import _400x500Skill from '../media/unnamed.png';


//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';
import SkillsBtn_comp from '../SkillsBtn_comp/SkillsBtn_comp';

import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
import { setSkillPageData } from '../store/actions';



 class Skills_comp extends React.Component {
  state = {
    skillImgMain : _400x500Skill,
    title: 'My Skills',
    details: 'Select a skill to see details',
    DetailsBtn : true

  };

  componentDidMount()
  {

    this.setState({
      BtnsArr : [ 
      <SkillsBtn_comp key={0} title={"HTML5"} details={'a markup language used for structuring and presenting content on the World Wide Web.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100HTML.png'}    MainImgUrl={'media/400x500HTML.png'} selected={this.state.selected} classTheme={"skillBtnCont"}           fullDetails={"HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and final major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard."} chartParams={['Form',"Video/Audio","Canvas"]} chartVals={[95,80,40]}  />,
      <SkillsBtn_comp key={1} title={"CSS3"} details={'a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100CSS.png'}               MainImgUrl={'media/400x500CSS.png'} selected={this.state.selected} classTheme={"skillBtnCont"}               fullDetails={"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."} chartParams={['Styling','Shadows','Animation','Transform']} chartVals={[95,70,80,75]}  />,
      <SkillsBtn_comp key={2} title={"JavaScript"} details={'programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100JS.png'}         MainImgUrl={'media/400x500JS.png'} selected={this.state.selected}  classTheme={"skillBtnCont"}                fullDetails={"JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries."} chartParams={['native JS','ES6','TS']} chartVals={[95,90,60]}  />,
      <SkillsBtn_comp key={3} title={"Bootstrap"} details={'a free and open-source CSS framework directed at responsive, mobile-first front-end web development.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100BS.png'}          MainImgUrl={'media/400x500BS.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}               fullDetails={"Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components."} chartParams={['Grid','Flex','Forms','Modal','Navs','Utilities']} chartVals={[95,90,85,80,75,70]}  />,      
      <SkillsBtn_comp key={4} title={"Dynamo"} details={'is a graphical programming interface that lets you customize your building information workflow.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100Dynamo.png'}            MainImgUrl={'media/400x500Dynamo.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"Dynamo is a graphical programming interface that lets you customize your building information workflow. Dynamo is an open source visual programming platform for designers. It is installed as part of Revit along with Revit specific programming nodes."} chartParams={["Custom Packages", "Python RevitAPI", "UI from Dynamo"]} chartVals={[70,80,75]}  />,
      <SkillsBtn_comp key={5} title={"Unity"} details={'a cross-platform game engine developed by Unity Technologies.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100Unity.png'}            MainImgUrl={'media/400x500Unity.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Worldwide Developers Conference as a Mac OS X game engine. The engine has since been gradually extended to support a variety of desktop, mobile, console and virtual reality platforms."} chartParams={["Shaders", "Materials","Physics","Control","Animation", "UI","AR","VR"]} chartVals={[65,80,75,80,80,85,85,80]}  />,
      <SkillsBtn_comp key={6} title={"RevitAPI"} details={'.NET API which can be used to automate repetitive tasks is Autodesk Revit.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100RevitAPI.png'}            MainImgUrl={'media/400x500RevitAPI.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"Autodesk Revit® provides a rich and powerful .NET API which can be used to automate repetitive tasks, extend the core functionality of Revit in simulation, conceptual design, construction and building management, and much more. Revit .NET API allows you to program with any .NET compliant language including VB.NET, C#, and C++/CLI. The Software Development Toolkit (SDK) provides extensive .NET code samples and documentation to help you get started developing with the Revit API."} chartParams={["Filters","Elements creation","Sheets","Schedules","Export","General automation"]} chartVals={[95,93,90,90,80,90]}  />,            
      <SkillsBtn_comp key={7} title={"React.js"} details={'a free and open-source front-end JavaScript library for building user interfaces based on UI components.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100React3.png'}           MainImgUrl={'media/400x500React.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}        fullDetails={"React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies."} chartParams={['redux','axios','class comp.','func. comp.']} chartVals={[95,85,90,80]}  />,
      <SkillsBtn_comp key={8} title={"Node.js"} details={'an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, Mac OS, etc.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100Node.png'}            MainImgUrl={'media/400x500Node.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}           fullDetails={"Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, Mac OS, etc. Node.js is a back-end JavaScript runtime environment. Node.js runs on a JavaScript Engine and executes JavaScript code outside a web browser."} chartParams={['Express','Mongoose','authentication','REST APIs','MVC patern']} chartVals={[95,90,80,85,75]}  />,
      <SkillsBtn_comp key={9} title={"ThreeJS"} details={'a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100THREE.png'}              MainImgUrl={'media/400x500THREE.png'} selected={this.state.selected}   classTheme={"skillBtnCont"}         fullDetails={"Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL. The source code is hosted in a repository on GitHub."} chartParams={['ThreeJS API','Navigation','3D Modeling','3d Shaders']} chartVals={[85,80,60,65]}  />,
      <SkillsBtn_comp key={10} title={"Python"} details={'a high-level, general-purpose programming language.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100Python.png'}            MainImgUrl={'media/400x500Python.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming."} chartParams={["Python Essentials","OOP","Python advanced"]} chartVals={[95,85,80]}  />,
      <SkillsBtn_comp key={11} title={"C#"} details={'a general-purpose, high-level multi-paradigm programming language.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100CS.png'}            MainImgUrl={'media/400x500CS.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"C# is a general-purpose, high-level multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines."} chartParams={["DataType","Algorithms","Design Paterns","C# Essentials","OOP","C# advanced","WPF"]} chartVals={[80,75,70,95,85,80,80]}  />,
      <SkillsBtn_comp key={12} title={"Navis API"} details={'.NET API which can be used to automate repetitive tasks is Autodesk Navisworks.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100Navis.png'}            MainImgUrl={'media/400x500Navis.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"Navisworks® software provides a flexible development platform for specialized viewing and analysis of large projects, allowing users to combine models created by software such as AutoCAD ®, Revit ®, Inventor ®, and more."} chartParams={["Sets Creation", "Clash test automation", "Simulation", "Animation"]} chartVals={[90,85,80,80]}  />,
      <SkillsBtn_comp key={13} title={"ForgeAPI"} details={'is a platform of web service APIs that allow you to integrate Autodesk SaaS products (such as Fusion Team, BIM 360 Docs, etc.)'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100Forge.png'}            MainImgUrl={'media/400x500Forge.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"Forge is a platform of web service APIs that allow you to integrate Autodesk SaaS products (such as Fusion Team, BIM 360 Docs, etc.) into your workflows and/or to embed some of the components used in those Autodesk products into your own web or mobile applications."} chartParams={["Model derivative API", "Model Viewer API", "Forge Viewer plugins", "Design automation API", "BIM360 API"]} chartVals={[95,95,80,90,80]}  />,
      <SkillsBtn_comp key={14} title={"MongoDB"} details={'a source-available cross-platform document-oriented noSQL database program.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MongoDB.png'}            MainImgUrl={'media/400x500MongoDB.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions."} chartParams={["Create QUERYs","Find QUERYs","Update QUERYs","Delete QUERYs"]} chartVals={[95,90,85,85]}  />,
      <SkillsBtn_comp key={15} title={"MS SQL"} details={'a relational database management system developed by Microsoft.'} _onClick={this.BtnClickHandeler} ImgUrl={'media/100x100MSSQL.png'}            MainImgUrl={'media/400x500MSSQL.png'} selected={this.state.selected}     classTheme={"skillBtnCont"}   fullDetails={"Microsoft SQL Server is a relational database management system developed by Microsoft. As a database server, it is a software product with the primary function of storing and retrieving data as requested by other software applications which may run either on the same computer or on another computer across a network (including the Internet). Microsoft markets at least a dozen different editions of Microsoft SQL Server, aimed at different audiences and for workloads ranging from small single-machine applications to large Internet-facing applications with many concurrent users."} chartParams={["Create QUERYs","Find QUERYs","Update QUERYs","Delete QUERYs"]} chartVals={[90,85,80,80]}  />,
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
  BtnClickHandeler = (title,details,key,IMG) => 
  {
    this.setState({
      title : title,
      details : details,
      skillImgMain:IMG,
      DetailsBtn : false
      

    })
    this.props.setSelectedBtn(title)

  }
  ShowDetails = () =>
  {
    //alert(this.props.state.selected)
    this.props.setSkillPageData({
      details:this.props.state.selectedData.details,
      portrait:this.props.state.selectedData.portrait,
      chartParams:this.props.state.selectedData.chartParams,
      chartVals:this.props.state.selectedData.chartVals,
      title:this.props.state.selectedData.title
    })
    
 
    this.props.state.history.push('/skill')

    
    try {
      if (window.innerWidth < 800) {
        var ele = document.getElementById('ghost');
        ele.scrollIntoView({behavior: 'smooth'})
        
      } else {
        
        var ele = document.getElementById('myChart');
        ele.scrollIntoView({behavior: 'smooth', block: "end"})
      }
      
      
    } catch (error) {
       document.body.scrollTop = 60;
       document.documentElement.scrollTop = 60;
      
    }
  }


  render() {


    return (
      <>
      <div>
        <div class="skillSectionHeader">
            <span class="headerTitle" >My Skills</span>
            <br />
            <span class="headerDes">Explore my skills list, My skills based on my education in mechanical power engineering, Building Modeling [BIM] and computer science technologies such as full stack web development and .NET desk top applications development.</span>
        </div>
        
        <div  class="container">
            <div id="HomeSkills" class="row skillContainer">
                
                <div  class="col-sm-5 skillDetails">
                {this.props.state.selectedData.portrait?(
                  <>
                  <img class="skillImgMain img-fluid" src={this.props.state.selectedData.portrait} alt="" />
                  <div class="skillDetailsMain" >
                        <span class="skillTitle">{this.props.state.selectedData.title}</span>
                        <div class="sepSkill"></div>
                        <div class="skillTitleDes">
                            <span class="skillDes">{this.props.state.selectedData.prife}</span>

                        </div>
                        

                    </div>
                 
                  </>
                ):(
                  <>
                  <img class="skillImgMain img-fluid" src={this.state.skillImgMain} alt="" />
                    <div class="skillDetailsMain" >
                        <span class="skillTitle">{this.state.title}</span>
                        <div class="sepSkill"></div>
                        <div class="skillTitleDes">
                            <span class="skillDes">{this.state.details}</span>

                        </div>
                        

                    </div>
                    </>
                  
                )}
                    
                    
                    
                    

    
                </div>
                <div class="col-sm-7 skillBtns">
                    <div class="btnsContainer">
                      
                      {this.state.BtnsArr}

                    </div>
                    <br />
                    <button type="button" class="btn btn-outline-dark detailsBtn" onClick={this.ShowDetails} disabled={!this.props.state.selectedData.portrait}>Show details</button>
    
                </div>
            </div>
           

        </div>
    </div>

 

      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn,setSkillPageData})(Skills_comp);





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