
//------------------------------------
//-------------------------------------------------
import './ProjectCarousel_comp.css';

import React from "react";
import { connect } from 'react-redux';


class ProjectCarousel_comp extends React.Component {
  state = {
    // skillImgMain : _400x500Skill,
    // title: 'My Skills',
    // details: 'Select a skill to see details',
    // DetailsBtn : true
    imgsIndecators : [],
    CarouselImgs : []
    , createdFlag : false,
    projectId:"dfghjhehefhf"
  };

  componentDidMount()
  {
    var nextt = document.getElementById('aaaaaaaaaaaa')
    var prevv = document.getElementById('aaaaaaaaaaaaa')
    nextt.click();
    //prevv.click();
    // this.setState({
    //   CardsArr : [ 
    //     <PortfolioCard_comp title={'Portfolio website'} pImg={por}/>,
    //     <PortfolioCard_comp title={'Jumia clone'} pImg={jum}/>,
    //     <PortfolioCard_comp title={'IKEA'} pImg={ikea}/>
    //   ]
    // });
   



  }

  AllOff()
  {
    var ci = document.getElementsByClassName('carousel-item')
    var cii = document.getElementsByClassName('carousel-item-indicator')
      for (let i = 0; i < ci.length; i++) {
        ci[i].classList = ["carousel-item"]
        cii[i].classList = ["carousel-item-indicator"]
      }

  }
  FirstOn()
  {
    var ci = document.getElementsByClassName('carousel-item')
    var cii = document.getElementsByClassName('carousel-item-indicator')
      for (let i = 0; i < ci.length; i++) {
        if (i == 0) 
        {
          ci[i].classList = ["carousel-item "," active"]
          cii[i].classList = ["carousel-item-indicator "," active"]
        }else
        {
          ci[i].classList = ["carousel-item"]
          cii[i].classList = ["carousel-item-indicator"]

        }
      }
  }

  componentDidUpdate()
  {

    if (this.props.ProjectID != this.state.projectId) {
    console.log(this.state.CarouselImgs);

    // var ci = document.getElementsByClassName('carousel-item')
    // var cii = document.getElementsByClassName('carousel-item-indicator')
    //   for (let i = 0; i < ci.length; i++) {
    //     ci[i].classList = ["carousel-item"]
    //     cii[i].classList = ["carousel-item-indicator"]
    //   }

this.AllOff()

      /////////////////////////////////////////////////////////////

      this.setState({
        createdFlag : false,
        projectId: this.props.ProjectID
  });

  
    }
    

    if (this.props.imgs.length != 0 && !this.state.createdFlag) {

        this.setState({
          createdFlag : true
    });
      var activeClass = 'active'
      var indicatorsArr = []
      var carouselImgsArr = []
console.log(this.props.imgs.length);

    for (let i = 0; i < this.props.imgs.length; i++) {
      if (i != 0) {
        activeClass = ''
      }
      
      
      indicatorsArr = [...indicatorsArr, <li data-target="#ProjCarousel" data-slide-to={`${i}`} className={`carousel-item-indicator ${activeClass}`}></li>]
      carouselImgsArr = [...carouselImgsArr, <div className={`carousel-item ${activeClass}`}><img src={this.props.imgs[i]} class="img-fluid imgss" alt={i} /></div>]
    }

      console.log(carouselImgsArr);
      console.log(indicatorsArr);
      this.setState({
        imgsIndecators : [ indicatorsArr],
        CarouselImgs : [carouselImgsArr]
    });

    this.FirstOn()
    }
  }


  isZoomed = false;
  ZoomCarousel()
  {
    if (window.screen.availWidth > 1150) {
        
        
      var watchBtn = document.getElementById('watchBtn');  
      var dwnldBtn = document.getElementById('dwnldBtn');  
      var ProjCarousel = document.getElementById('ProjCarousel');
      var bdy = document.getElementsByTagName('body');
      var carouselContainer = document.getElementById('rightSide');
      var LeftSideContainer = document.getElementById('leftSide');
      var inner_img = document.getElementById('inner-img');

      if (!this.isZoomed) {
        carouselContainer.scrollIntoView(true);
        bdy[0].style.overflow = 'hidden' 
        bdy[0].style.height = '100vh' 
        LeftSideContainer.style.visibility = 'hidden' 
        LeftSideContainer.style.flex = '0 0 0%' 
        LeftSideContainer.style.maxWidth = ' 0%' 
        LeftSideContainer.style.width = ' 0px' 
        LeftSideContainer.style.height = ' 0px' 
        carouselContainer.style.flex = '0 0 100%' 
        carouselContainer.style.maxWidth = ' 100%' 
        carouselContainer.style.width = ' 100vc' 
        carouselContainer.style.height = ' 100vh' 
try {
  
  watchBtn.style.display = ' none'
} catch (error) {
  
}
try {
  dwnldBtn.style.display = ' none'
  
} catch (error) {
  
}

        ProjCarousel.style.height = 'auto' 


        this.isZoomed = true;
        inner_img.style.cursor = 'zoom-out' 
        
      }
      else
      {
        bdy[0].style.overflow = 'visible' 
        bdy[0].style.height = 'fit-content' 
        LeftSideContainer.style.visibility = 'visible' 
        LeftSideContainer.style.flex = '0 0 58.333333%' 
        LeftSideContainer.style.maxWidth = ' 58.333333%' 
        LeftSideContainer.style.width = ' 100%' 
        LeftSideContainer.style.height = ' 100%' 
        carouselContainer.style.flex = '0 0 41.666667%' 
        carouselContainer.style.maxWidth = ' 41.666667%' 
        carouselContainer.style.width = ' 100%' 
        carouselContainer.style.height = 'auto' 

        try {
          
          watchBtn.style.display = ' inline-block'
        } catch (error) {
          
        }
        try {
          
                  dwnldBtn.style.display = ' inline-block'
          
        } catch (error) {
          
        }

        ProjCarousel.style.height = '200px' 
        this.isZoomed = false;
        inner_img.style.cursor = 'zoom-in' 

      }
    }

  }


  pauseVid()
  {
    document.getElementById('myframe').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');

  }
  Download(url)
  {
    window.open(url,'_blank');
  }







  render() {


    return (
      <>
                    <div class="mob-titlee">
                <h1>{this.props.prjName}</h1>
                <span>{this.props.projTitle}</span>
              </div>
              <div id="ProjCarousel" class="carousel slide" data-ride="carousel" data-touch={true}>
              
                
                {/* <!-- The Indicators --> */}
                <ul class="carousel-indicators carousel-indicators-container">
                  {this.state.imgsIndecators}
                </ul>
                
                {/* <!-- The slideshow --> */}
                <div class="carousel-inner inner-img" id="inner-img" onClick={() => {this.ZoomCarousel()}} >
              
                {this.state.CarouselImgs}

              
                </div>
                
                {/* <!-- Left and right controls --> */}
                <a class="carousel-control-prev" id='aaaaaaaaaaaaa' href="#ProjCarousel" data-slide="prev">
                  <span class="carousel-control arrowCar"><i class="fas fa-caret-left"></i></span>
                </a>
                <a class="carousel-control-next" id='aaaaaaaaaaaa' href="#ProjCarousel" data-slide="next">
                  <span class="carousel-control arrowCar"><i class="fas fa-caret-right"></i></span>
                </a>
              </div>


              {!this.props.ytVidID=='' ? (<>
              
              <button id="watchBtn" type="button" class="btn btn-dark watchBtn" data-toggle="modal" data-target="#myModal"><span class="Watchmore">Watch more</span><i class="fas fa-video"></i></button>

      <div class="modal fade" id="myModal" onClick={(e) => {this.pauseVid();}}>
    <div class="modal-dialog modal-dialog-centered vidBdyCont" id="aa">
      <div class="modal-content vidBdyCont" id="aaa">
      
        
        {/* <!-- Modal body --> */}
        <div class="modal-body vidBdy">
          <iframe id="myframe" class="vidd" width="560" height="315" src={`https://www.youtube.com/embed/${this.props.ytVidID}?enablejsapi=1&version=3&playerapiid=ytplayer`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </div>
        

        
      </div>
    </div>
  </div>
             </> ):
              ''
              }
    {
      !this.props.DwnldLink == ''? (
      
        <button onClick={()=> {this.Download(this.props.DwnldLink)}} id="dwnldBtn" type="button" class="btn btn-success dwnldBtn" ><span class="Watchmore">Download</span><i class="fas fa-download"></i></button>
      
      
      ):('')
    }
 

      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(ProjectCarousel_comp);





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