import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NetworkWifi3BarIcon from '@mui/icons-material/NetworkWifi3Bar';

const resumeData = {
    name: "Prathamesh Pawar",
    title: "Computer Programmer",
    birthdate: "30-07-2004",
    email: "prathameshpawarpap@gmail.com",
    address: "A/P pedhe walope chiplun wadkar coloney room-d8, pin:415605",
    phone: "8329119606",
    Social: {
        GitHub: {
            link: "https://github.com/pratz2040",
            text: "My GitHub",
            icon: <GitHubIcon />,
        },
        Netlify: {
            link: "https://app.netlify.com/teams/pratz2040/overview",
            text: "My Netlify",
            icon: <NetworkWifi3BarIcon />,
        },
        LinkedIn: {
            link: "https://www.linkedin.com/in/prathamesh-pawar-454934274/",
            text: "My LinkedIn",
            icon: <LinkedInIcon />,
        },
    },
    about: "An intermediate computer programmer, with a good hand in programming language. I have a good experience with C, CPP, Data structure and Machine learning. A good problem solver with Positive Attitude. Highly Confident and Enthusiastic. Look for a company and a place to grow.",
    experience: [
        {
            title: "Self Project",
            date: "(1-2-24) - (28-2-24)",
            Description: "Worked on a Hand Gesture recognition project using various Python libraries and have hands-on experience with Machine learning. It was useful in day-to-day use and medical purposes.",
        },
        {
            title: "Deltiin",
            date: '(15-06-24) - (present)',
            Description: "Developed dynamic and interactive web applications using modern JavaScript frameworks and libraries, such as React.js and Vite. Implemented reusable components to streamline development and maintain consistency across projects.",
        },
    ],
    educations: [
        {
            title: "Christ Jyoti Convent High School",
            university: "Mumbai University, India",
            Description: "Studied SSC",
        },
        {
            title: "Dnyandeep School of Science",
            university: 'Mumbai University, India',
            Description: "Completed HSC",
        },
        {
            title: "Government College of Engineering, Karad",
            university: "Shivaji Maharaj University",
            date: "2024-2027 (Expected)",
            Description: "Bachelor of Technology, Information Technology",
        },
    ],
};

export default resumeData;
