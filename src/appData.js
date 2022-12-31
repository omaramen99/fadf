
import cot1 from './media/cot1.jpg';
import cot2 from './media/cot2.jpg';
import cotCover from './media/cotCover.jpg';

import cot2Cover from './media/cot2Cover.jpg';

import fab1 from './media/fab1.jpg';
import fab2 from './media/fab2.jpg';
import fabCover from './media/fabCover.jpg';

import armep1 from './media/armep1.jpg';
import armep2 from './media/armep2.jpg';
import armepCover from './media/armepCover.jpg';

import unit1 from './media/unit1.jpg';
import unit2 from './media/unit2.jpg';
import unitCover from './media/unitCover.jpg';

import checker1 from './media/checker1.jpg';
import checker2 from './media/checker2.jpg';
import checker3 from './media/checker3.jpg';
import checkerCover from './media/checkerCover.jpg';

import DTproto1 from './media/DTproto1.jpg';
import DTproto2 from './media/DTproto2.jpg';
import DTproto3 from './media/DTproto3.jpg';
import DTprotoCover from './media/DTprotoCover.jpg';


import revitPiano1 from './media/revitPiano1.jpg';
import revitPiano2 from './media/revitPiano2.jpg';
import revitPianoCover from './media/revitPianoCover.jpg';

export const Data = 
{
    TopProjects:["491cbe47-f2cc-42f2-9189-9f1704524e3b","e90dd55c-321c-48ba-937f-66b8993dff8f", "df2c63e6-f5eb-4239-9f17-90762329eb1a"],
    Projects:[
        {
            id:"491cbe47-f2cc-42f2-9189-9f1704524e3b",
            Name:"Revit Piano add-in",
            MinDiscription:"Funny Revit add-in the allow you play music on Revit",
            Discription:"Just having fun with Revit API, this add-in opens a piano and allow the user to play music on the piano through the keyboared keys 😂!",
            Images:[revitPianoCover,revitPiano1,revitPiano2],
            Tools:["C#","RevitAPI","Audio system"],
            Features:["Dynamic Revit view","Playing music while working 😅","Having fun 😁"],
            YoutubeVidId:"61K7LJxi_M0",
            DownloadLink:"",
            SimilarProjectsIds:["bc9184b1-8d96-462f-87d4-f14d708ce5b5","e90dd55c-321c-48ba-937f-66b8993dff8f","df2c63e6-f5eb-4239-9f17-90762329eb1a","250e9f2d-3aeb-4149-9b07-80ceb8c4e7ab"],
            IsActive:true

        },
        {
            id:"bc9184b1-8d96-462f-87d4-f14d708ce5b5",
            Name:"Digital Twin Prototype",
            MinDiscription:"Project to apply the digital twin and IOT on a real structure.",
            Discription:"This project is a compination of Internet Of Things [IOT], Building Information Modeling [BIM] and Augmented Reality [AR] to apply the concept of the live digital twin on a real structure prototype.",
            Images:[DTprotoCover,DTproto1,DTproto2,DTproto3],
            Tools:["C++","C#","NodeJS","Unity","Arduino","IOT","AR"],
            Features:["IOT wifi connection","Fast 2-way communication.","Fast 3d Viewer.","Power of augmented reality.","Accurate 3D model."],
            YoutubeVidId:"P1EUPtbP6hg",
            DownloadLink:"",
            SimilarProjectsIds:["df2c63e6-f5eb-4239-9f17-90762329eb1a","e90dd55c-321c-48ba-937f-66b8993dff8f","2ed6d221-1ce6-46c1-b43a-5f9363fca2ad","250e9f2d-3aeb-4149-9b07-80ceb8c4e7ab"],
            IsActive:true

        },
        {
            id:"2ed6d221-1ce6-46c1-b43a-5f9363fca2ad",
            Name:"Conduits over tray V2",
            MinDiscription:"Revit add-in, using pre designed patterns to creates conduits and place them over cable trays.",
            Discription:"This is the new version of the addin [C.O.T 1], this Revit add-in is using pre designed conduits patterns to create electrical conduits then automatically place them over selected cable trays and set the spacing and the bend raduis automatically.",
            Images:[cot2Cover,cot1,cot2],
            Tools:["C#","Revit API","WPF"],
            Features:["Using pre designed conduits patterns.","Conduits bottom offset.","Create required fittings.","Justify fitting bend radius."],
            YoutubeVidId:"I3mnYY4HzVw",
            DownloadLink:"",
            SimilarProjectsIds:["1ed6d221-1ce6-46c1-b43a-5f9363fca2ac","576bc703-1ce6-46c1-b43a-5f9363fca2ac","e90dd55c-321c-48ba-937f-66b8993dff8f"],
            IsActive:true

        },
        {
            id:"e90dd55c-321c-48ba-937f-66b8993dff8f",
            Name:"Model Health Checker",
            MinDiscription:"Revit add-in, checks and calculate the Revit model health.",
            Discription:"This tool can generate a health check report for any Revit project, based on some roles and checks that is contained in the BEP document of the project. It can list all the elements that failed in the test and make it so easy to grab the elements ids, it list also the project warning elements.",
            Images:[checkerCover,checker1,checker2,checker3],
            Tools:["C#","Revit API","Javascript","HTML","CSS"],
            Features:["Model health charts.","Interactive 3D rotation.","Contains the check list document.","Easy to pick Revit element ids.","Revit warnings listing.","Export offline HTML report."],
            YoutubeVidId:"xccdcfYpbkQ",
            DownloadLink:"https://www.mediafire.com/file/xlefczc4a7ensak/ARCH-_MODEL_o.amen.html/file",
            SimilarProjectsIds:["1ed6d221-1ce6-46c1-b43a-5f9363fca2ac","2ed6d221-1ce6-46c1-b43a-5f9363fca2ad","576bc703-1ce6-46c1-b43a-5f9363fca2ac"],
            IsActive:true

        },
        {
            id:"1ed6d221-1ce6-46c1-b43a-5f9363fca2ac",
            Name:"Conduits over tray V1",
            MinDiscription:"Revit add-in, creates conduits and place them over cable trays.",
            Discription:"This Revit add-in used for creating electrical conduits then automatically place them over selected cable trays and set the spacing and the bend raduis automatically.",
            Images:[cotCover,cot1,cot2],
            Tools:["C#","Revit API","WPF"],
            Features:["Conduits bottom offset.","Create required fittings.","Justify fitting bend radius.","spacing due to standards."],
            YoutubeVidId:"V-Jsfwo-vOU",
            DownloadLink:"",
            SimilarProjectsIds:["2ed6d221-1ce6-46c1-b43a-5f9363fca2ad","576bc703-1ce6-46c1-b43a-5f9363fca2ac","e90dd55c-321c-48ba-937f-66b8993dff8f"],
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
            YoutubeVidId:"enPGEV6a7Yg",
            DownloadLink:"",
            SimilarProjectsIds:["1ed6d221-1ce6-46c1-b43a-5f9363fca2ac","2ed6d221-1ce6-46c1-b43a-5f9363fca2ad","e90dd55c-321c-48ba-937f-66b8993dff8f"],
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
