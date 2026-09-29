
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

import fmWebApp1 from './media/fmWebApp1.jpg';
import fmWebApp2 from './media/fmWebApp2.jpg';
import fmWebApp3 from './media/fmWebApp3.jpg';
import fmWebAppCover from './media/fmWebAppCover.jpg';

import spacefit1 from './media/spacefit1.jpg';
import spacefit2 from './media/spacefit2.jpg';
import spacefit3 from './media/spacefit3.jpg';
import spacefit4 from './media/spacefit4.jpg';
import spacefitCover from './media/spacefitCover.jpg';

import arenPro1 from './media/arenPro1.jpg';
import arenPro2 from './media/arenPro2.jpg';
import arenPro3 from './media/arenPro3.jpg';
import arenPro4 from './media/arenPro4.jpg';
import arenProCover from './media/arenProCover.jpg';

export const Data =
{
    TopProjects:["491cbe47-f2cc-42f2-9189-9f1704524e3o","491cbe47-f2cc-42f2-9189-9f1704524e3b","e90dd55c-321c-48ba-937f-66b8993dff8f"],
    Projects:[
        {
            id:"3671fea7-a21b-459b-9de3-b0ad4be57336",
            Name:"SPACEFIT.ai Plan Detection",
            MinDiscription:"Autodesk viewer extension that turns PDF/DWG floor plans into smart, editable spaces for AI space planning.",
            Discription:"Drop in a PDF or DWG floor plan and watch it turn into smart geometry. Built from scratch for SPACEFIT.ai, my Autodesk viewer extension finds walls, windows, columns and rooms on its own, then hands clean polygons to their AI space planner.",
            Images:[spacefitCover,spacefit1,spacefit2,spacefit3,spacefit4],
            Tools:["Autodesk Forge / APS","Forge Viewer extensions","Model Derivative API","Angular","JavaScript"],
            Features:["PDF & DWG plans in the Autodesk viewer.","Auto-detects walls, windows, columns and rooms.","Guided review: edit shapes, add rooms and voids.","Feeds SPACEFIT's AI space planner."],
            YoutubeVidId:"AWnv6fwimA4",
            DownloadLink:"",
            SimilarProjectsIds:["eff4a652-c3f1-4a59-8dc2-8da7ce4b1896","491cbe47-f2cc-42f2-9189-9f1704524e3o","e90dd55c-321c-48ba-937f-66b8993dff8f"],
            IsActive:true
        },
        {
            id:"eff4a652-c3f1-4a59-8dc2-8da7ce4b1896",
            Name:"ArenPro Massing & Solar Study",
            MinDiscription:"Sketch a building on any spot of the globe and watch the sun move around it.",
            Discription:"Pick a spot anywhere on the globe, sketch a building mass on the map and stack floors of any shape among the real 3D neighbourhood. Then press play on the sun: a full solar simulation shows its path around the building for any date and time. Built for ArenPro, a web-based building energy platform.",
            Images:[arenProCover,arenPro1,arenPro2,arenPro3,arenPro4],
            Tools:["Mapbox","Three.js","React","JavaScript"],
            Features:["Pick the site on an interactive map.","Draw multi-floor masses with any floor shape.","Real 3D neighbouring buildings for context.","Sun path simulation for any date and time."],
            YoutubeVidId:"BWZrfqhgrIA",
            DownloadLink:"",
            SimilarProjectsIds:["3671fea7-a21b-459b-9de3-b0ad4be57336","bc9184b1-8d96-462f-87d4-f14d708ce5b5","491cbe47-f2cc-42f2-9189-9f1704524e3o"],
            IsActive:true
        },
        {
            id:"491cbe47-f2cc-42f2-9189-9f1704524e3o",
            Name:"FM Web Application",
            MinDiscription:"web application that combine BIM documents management with Facility management",
            Discription:"web application that combine BIM documents management with Facility management, with a Revit file exporter addin. It allows the user to manage and navigate his BIM full models with all information, with the ability to assign maintainance workorders and automatic e-mails notifications with some animation effects.",
            Images:[fmWebAppCover,fmWebApp1,fmWebApp2,fmWebApp3],
            Tools:["JavaScript", "ReactJS", "NodeJS" , "Unity", "ThreeJS" , "C#","RevitAPI"],
            Features:["BIM Documents Management.","Facilities Management.","Workorders and alerts.","E-mails notifications.","Issue messaging system.","Export all system issues."],
            YoutubeVidId:"Z2j86JAVgtU",
            DownloadLink:"https://gallium-fm.vercel.app/",
            SimilarProjectsIds:["e90dd55c-321c-48ba-937f-66b8993dff8f","bc9184b1-8d96-462f-87d4-f14d708ce5b5","491cbe47-f2cc-42f2-9189-9f1704524e3b","250e9f2d-3aeb-4149-9b07-80ceb8c4e7ab"],
            IsActive:true

        },
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

// ---- Everything below is the site's text (from the CV). Projects stay in Data.Projects above. ----

export const Profile = {
    name: "Omar Amen",
    role: "AEC Software Developer",
    tagline: "MEP & Fabrication Tools for Revit",
    // the plain sentence under the name in the hero (says BIM / AEC in words, since the typing line is animated)
    heroLine: "BIM software for the AEC industry: MEP & fabrication tools for Revit. Mechanical engineer turned developer.",
    // cycled by the typing line in the hero
    titles: ["AEC Software Developer", "BIM Software Developer", "MEP & Fabrication Tools for Revit", "Revit API Developer", "APS / Forge Developer"],
    location: "Cairo, Egypt",
    email: "contact@omaramen.com",
    phone: "+20 115 939 0337",
    phoneHref: "tel:+201159390337",
    site: "omaramen.com",
    resume: "https://drive.google.com/u/1/uc?id=1yXUWIuvX49BdU52Fcg1l5QhoS0o0s0Mi&export=download",
    summary: "AEC software developer with 5+ years of experience building BIM software, specializing in MEP and fabrication tools for Revit. A mechanical engineer with HVAC design training, bringing hands-on MEP knowledge to C#/.NET, WPF/MVVM, Revit API and Autodesk Platform Services development. Works remotely with teams in the US and Europe.",
    quote: "A crow’s curiosity, an engineer’s mind."
};

// the key/value list next to the About text
export const AboutFacts = [
    ["role", "AEC Software Developer"],
    ["industry", "AEC · BIM · MEP"],
    ["focus", "MEP & fabrication · Revit"],
    ["experience", "5+ years"],
    ["revit", "2019 – 2027"],
    ["based_in", "Cairo, Egypt"],
    ["works_with", "US · Europe (remote)"],
    ["education", "B.Sc. Mech. Power Eng."]
];

export const SkillGroups = [
    { name: "MEP & Fabrication", items: ["Conduit tools", "Custom multi-tier strut hangers", "Duct bank tools", "Mechanical background"] },
    { name: "BIM & Autodesk", items: ["Revit API", "Dynamo", "APS / Forge Viewer", "Model Derivative", "Design Automation"] },
    { name: "Desktop & .NET", items: [".NET Framework 4.8", ".NET 8+", "WPF", "MVVM", "Excel automation (EPPlus)"] },
    { name: "Web & 3D", items: ["React", "Node.js", "Express", "MongoDB", "Three.js", "Unity (AR/VR)", "glTF / GLB"] },
    { name: "Languages", items: ["C#", "JavaScript (ES6+)", "Python", "HTML5", "CSS3", "Embedded C"] },
    { name: "Tools & DevOps", items: ["Git", "Azure DevOps CI/CD", "WiX", "Inno Setup", "NUnit", "xUnit"] }
];

// segmented bars under the skills table (value is a percentage)
export const SkillLevels = [
    { name: "C# / .NET", value: 95 },
    { name: "Revit API", value: 95 },
    { name: "WPF / MVVM", value: 85 },
    { name: "APS / Forge", value: 85 }
];

// latest first
export const Experience = [
    { role: "AEC Software Developer", org: "Allied BIM, LLC", where: "Montana, USA (Remote) · Full-time via FRBIM, an Upwork agency", when: "Mar 2023 – Present",
      points: [
        "Maintain and extend “AlliedBIM - Fabrication Tools” for Revit, an MEP fabrication add-in suite for Revit 2019–2027.",
        "Built automated conduit cutting for electrical fabrication, handling elbows and parallel conduit banks.",
        "Built a duct bank spacer tool that groups conduits and places spacers with concrete flow-through openings.",
        "Created WPF/MVVM data tools for conduit runs with column filtering, Excel import/export and change comparison.",
        "Built a cloud marketplace for publishing Revit families as GLB models and importing them back into projects.",
        "Contribute to “AlliedBIM - Fabrication Connected”, a web platform built on Autodesk Platform Services.",
        "Maintain installers (WiX, Inno Setup), Azure DevOps builds, licensing and automated tests."
      ] },
    { role: "Freelance AEC Software Developer", org: "FRBIM (Upwork agency)", where: "Remote", when: "Project-based",
      points: [
        "SPACEFIT (Puteaux, France): Revit API development, and started and built its APS web app for AI space planning.",
        "D’Angelo & Associates (Texas, USA): Revit tools for an AV and telecom (low-voltage) design firm."
      ] },
    { role: "BIM Specialist / Developer", org: "Gallium", where: "Cairo, Egypt", when: "Dec 2022 – Mar 2023",
      points: ["Developed a web-based BIM platform for facility management, linking building systems with IoT sensor data."] },
    { role: "BIM R&D Engineer", org: "FirstOption Engineering Services", where: "Cairo, Egypt", when: "Jul 2021 – Nov 2022",
      points: [
        "Built Revit add-ins and BIM automation tools, mainly for MEP modeling and coordination teams.",
        "Developed a digital twin platform and supporting web applications.",
        "Created AR/VR applications for exploring BIM models."
      ] },
    { role: "Mechanical BIM Engineer", org: "TEAServ ES", where: "Cairo, Egypt", when: "Sep 2019 – Aug 2020",
      points: ["Revit · MEP coordination · MEP modeling · Navisworks · BIM 360"] }
];

export const Education = [
    { title: "B.Sc. in Mechanical Power Engineering", org: "Helwan University, Cairo", when: "2015 – 2019", note: "Grade: Very Good · Graduation project: Excellent" },
    { title: "Full-Stack Web Development (MEARN)", org: "Information Technology Institute (ITI)", when: "Nov 2020 – Mar 2021", note: "" },
    { title: "BIM Track (UTW-11)", org: "Engineering Consultants Group (ECG)", when: "Jul – Sep 2019", note: "Best Member Award" },
    { title: "HVAC Design Track (UTW-10)", org: "Engineering Consultants Group (ECG)", when: "Jul – Sep 2018", note: "Best Member & Best Project" }
];

export const Social = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/omar-amen-19a374189" },
    { name: "Upwork", url: "https://www.upwork.com/freelancers/~010e2c3b929aaf2239" },
    { name: "YouTube", url: "https://www.youtube.com/channel/UCxcQOXC73rlM9DEcsz9pwLA" },
    { name: "Facebook", url: "https://www.facebook.com/omar.amen32/" },
    { name: "X / Twitter", url: "https://twitter.com/omarame54520814" }
];




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
