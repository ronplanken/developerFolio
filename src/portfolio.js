/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "_Kayma",
  title: "Hoi, Ik ben Ron",
  subTitle: emoji(
    "Een gepassioneerde Full Stack Software Developer 🚀, met ervaring in het bouwen en ontwerpen van Web en Mobiele applicaties met JavaScript / Reactjs / Nodejs / React Native en een aantal andere coole libraries en frameworks."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ronplanken",
  linkedin: "https://www.linkedin.com/in/ronplanken/",
  gmail: "ron.planken@kayma.nl",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Wat ik doe",
  subTitle:
    "ENTHOUSIASTE FULL STACK DEVELOPER DIE ALTIJD GAAT VOOR DE BESTE APPLICATIES",
  skills: [
    emoji(
      "⚡ Ontwikkel toegankelijke, interactieve Front end / User interfaces voor web en mobiele applicaties Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normale en SPA Stacks"),
    emoji("⚡ Integratie van diensten zoals Firebase / AWS")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "less",
      fontAwesomeClassname: "fab fa-less"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Haagse Hoge School",
      logo: require("./assets/images/OverDeHaagse-Mediakit-hhs_nl_groen_hex.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "juni 2002 - juni 2008",
      desc: "Afstudeer project afgerond voor eSports tournamenten website",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "95%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SCRUM",
      progressPercentage: "80%"
    },

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "HybrIT",
      companylogo: require("./assets/images/hybrit.png"),
      date: "juli 2018 – december 2022",
      desc: "Senior Full Stack Developer",
      descBullets: [
        "Verantwoordelijk voor het ondersteunen en leiden van collega's en interne projecten op front-end gebied.",
        "In stand houden van de developer standards voor HybrIT op front-end gebied."
      ]
    },
    {
      role: "Software Engineer",
      company: "HR2day",
      companylogo: require("./assets/images/hr2day.png"),
      date: "november 2014 – juni 2018",
      desc: "Verantwoordelijk voor de interface, applicaties en mobiele app voor medewerkers en management van het HR pakket van HR2day."
    },
    {
      company: "Segbroek College",
      role: "Computer Science Teacher",
      companylogo: require("./assets/images/segbroek.ico"),
      date: "mei 2010 – oktober 2014",
      desc: "Het onderwijzen van de volgende generatie van software engineers met ontwikkel en agile skills."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projecten",
  subtitle: "OPENSOURCE PROJECTEN WAAR IK AAN BIJGEDRAGEN HEB",
  projects: [
    {
      image: require("./assets/images/game-datacards.png"),
      projectName: "Game Datacards",
      projectDesc:
        "Een webapplicatie waarmee datacards voor tabletop wargaming spellen gemaakt kunnen worden.",
      footerLink: [
        {
          name: "Website",
          url: "http://game-datacards.eu"
        },
        {
          name: "Github",
          url: "https://github.com/ronplanken/game-datacards"
        }
      ]
    },
    {
      image: require("./assets/images/dtc.png"),
      projectName: "DTC Tournament Ranking",
      projectDesc: "Met het DTC team een applicatie geschreven om statistieken en de Nederlandse ranking te genereren aan de hand van wedstrijd resultaten.",
      footerLink: [
        {
          name: "Website",
          url: "http://dtc40k.nl/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certificaties 🏆 "),

  achievementsCards: [
    {
      title: "Professional Scrum Master I",
      subtitle: "Gecertificeerd Professional Scrum Master bij scrum.org",
      image: require("./assets/images/psm1.png"),
      imageAlt: "Professional Scrum Master",
      footerLink: [],
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Neemt contact op ☎️"),
  subtitle:
    "Heb je een project waar je wat over kwijt wilt of wil je gewoon ff babbelen?",
  number: "+31-641460909",
  email_address: "ron.planken@kayma.nl"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
