
import cot1 from './media/cot1.jpg';
import cot2 from './media/cot2.jpg';
import cotCover from './media/cotCover.jpg';

import fab1 from './media/fab1.jpg';
import fab2 from './media/fab2.jpg';
import fabCover from './media/fabCover.jpg';

import armep1 from './media/armep1.jpg';
import armep2 from './media/armep2.jpg';
import armepCover from './media/armepCover.jpg';

import unit1 from './media/unit1.jpg';
import unit2 from './media/unit2.jpg';
import unitCover from './media/unitCover.jpg';


export const Data = 
{
    TopProjects:["1ed6d221-1ce6-46c1-b43a-5f9363fca2ac", "df2c63e6-f5eb-4239-9f17-90762329eb1a","576bc703-1ce6-46c1-b43a-5f9363fca2ac"],
    Projects:[
        {
            id:"1ed6d221-1ce6-46c1-b43a-5f9363fca2ac",
            Name:"Conduits over tray V1",
            MinDiscription:"Revit add-in, creates conduits and place them over cable trays.",
            Discription:"This Revit add-in used for creating electrical conduits then automatically place them over selected cable trays and set the spacing and the bend raduis automatically.",
            Images:[cotCover,cot1,cot2],
            Tools:["C#","Revit API","WPF"],
            Features:["Conduits bottom offset.","Create required fittings.","Justify fitting bend radius.","spacing due to standards."],
            YoutubeVidId:"hd2ukWP4Beg",
            DownloadLink:"",
            SimilarProjectsIds:["576bc703-1ce6-46c1-b43a-5f9363fca2ac"],
            IsActive:true

        },
        {
            id:"576bc703-1ce6-46c1-b43a-5f9363fca2ac",
            Name:"MEP elements fabricator",
            MinDiscription:"Revit add-in for splitting all MEP parts for fabrication presentation.",
            Discription:"This tool can split MEP ducts, pipes, cable trays and conduits within part length, also provides a mark parameter to easily isolate the fabricated parts and vice versa, it can index the splitted parts to give each part a uniqe and serialize number.",
            Images:[fabCover, fab1, fab2],
            Tools:["C#","Revit API","WPF"],
            Features:["Supports all MEP curve types.","Flexible indexing and justification.","'IsFabricated' parameter as Mark.","Easy to isolate fabricated elements."],
            YoutubeVidId:"SDLDBv2zxCg",
            DownloadLink:"",
            SimilarProjectsIds:["1ed6d221-1ce6-46c1-b43a-5f9363fca2ac"],
            IsActive:true

        },
        {
            id:"250e9f2d-3aeb-4149-9b07-80ceb8c4e7ab",
            Name:"MEP Sheet [AR] App",
            MinDiscription:`Augmented reality application for MEP drawings review.`,
            Discription:"Mobile application for MEP shopdrawing sheets review with 3D BIM model projection over the drawings, also allow the user to select the BIM elements to view the elements BIM information and parameters, mainly supports the facility management information and data sheets.",
            Images:[armepCover, armep1, armep2],
            Tools:["AR","C#","Unity","BIM"],
            Features:["MEP Sections and shop drawing.","FM parameters data.","Assets manuals and documents."],
            YoutubeVidId:"AsJDtHe_YIo",
            DownloadLink:"",
            SimilarProjectsIds:["df2c63e6-f5eb-4239-9f17-90762329eb1a"]
            ,
            IsActive:true
        }
        ,
        {
            id:"df2c63e6-f5eb-4239-9f17-90762329eb1a",
            Name:"Medical unit [AR] App",
            MinDiscription:"Augmented reality application for BIM model visualization",
            Discription:"This mobile application uses the Augmented Reality [AR] to power the BIM models visualization and design review, allows the user to take a cross section to navigate the different building floors, also allows the user to select and isolate each building room and watch the room details as wall layers and materials.",
            Images:[unitCover, unit1, unit2],
            Tools:["AR","C#","Unity","BIM"],
            Features:["AR navigation with cross section.", "Isolate any buildiing room.", "Show room wall layers."],
            YoutubeVidId:"-68F-Kf7XGw",
            DownloadLink:"",
            SimilarProjectsIds:["250e9f2d-3aeb-4149-9b07-80ceb8c4e7ab"]
            ,
            IsActive:true
        }
    ],
    Skills:[]
}




// ProjectSchema
// {
//     id:"",
//     Name:"",
//     MinDiscription:"",
//     Discription:"",
//     Images:[],
//     Tools:[],
//     Features:[],
//     YoutubeVidId:"",
//     DownloadLink:"",
//     SimilarProjectsIds:[]
// }

// SkillSchema
// {
//     id:"",
//     Name:"",
//     MinDiscription:"",
//     Discription:"",
//     Images:[],
//     SkillData:{}
//     RelatedProjectsIds:[]
// }