
//------------------------------------
//-------------------------------------------------
import './Skills_topPage_comp.css';
//import vidSrc from '../media/yt1s.com - Retrowave animation_1080p.mp4';
//import ToDoElement_comp from '../ToDoElementt_comp/ToDoElement_comp';

 
import React from "react";
import { connect } from 'react-redux';
import { setSelectedBtn } from '../store/actions';
 

 class Skills_topPage_comp extends React.Component {
  state = {


  };
  componentDidUpdate()
  {
    //console.log(this.state.myChart.data.datasets[0].data);
    this.state.myChart.data.labels = this.props.state.skillPageData.chartParams;
    this.state.myChart.data.datasets[0].data = this.props.state.skillPageData.chartVals;
    this.state.myChart.update();
  }

  componentDidMount()
  {
    if (!this.props.state.skillPageData.chartParams) {
      
      //console.log(this.props.state);
      //alert('NOO skilll')
      //console.log(this.props);
      this.props.state.history.push('/')
   // window.location.reload();
      
    }
    else
    {
      var data = {
        labels: this.props.state.skillPageData.chartParams,
        datasets: [{
            label: '# of Votes',
            data: this.props.state.skillPageData.chartVals,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 180)',
                'rgb(255, 205, 86)',
                'rgb(54, 162, 235)',
                'rgb(255, 161, 99)',
                'rgb(201, 203, 207)',
  
            ],
            borderColor: 'rgb(255, 255, 255)',
            hoverBorderColor: 'rgb(255, 255, 255)',
            borderWidth: 2,
            hoverBorderWidth:5
        }]
    };
    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
  
         var ctx = document.getElementById('myChart').getContext('2d');
         const Chart = window.Chart;
         Chart.defaults.global.animation.duration = 2000;
           var chrt = new Chart(ctx, {
            data: data,
            type: 'polarArea',
            options: {}
        });
        //console.log(Chart.defaults.global.animation.duration);
        this.setState({myChart: chrt})

    }
    



  }
  // constructor(props)
  // {
   
  //   super(props);
  //   this.state={
  //     complete : ""
  //   };
  // }



  render() {
   

    return (
      <>
      <div id="ghost"> </div>

<div id="skillTopCont" class="container">
            <h1 id="skillsTitle" class="skillsTitle">{this.props.state.skillPageData.title}</h1>
            <div class="row">
                <div class="col-md-6 skillImgg">
                    <img class="skillImgMainn img-fluid" src={this.props.state.skillPageData.portrait} alt="" />
                    
                </div>
                <div class="col-md-6 skillChartt">
                    <div class="chartCont"> 

                        <canvas id="myChart"  width="400" height="400"></canvas>
                    </div>
 

                </div>

            </div>
            <div class="SkillDetails">
                <span class="Detailss">
                    {this.props.state.skillPageData.details}
                 </span>
            </div>

        </div>












      </>
    );
  }

  
}
const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps , {setSelectedBtn})(Skills_topPage_comp);





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