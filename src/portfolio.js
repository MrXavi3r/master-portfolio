// Website related settings
const settings = {
  isSplash: false, // slash page
};

//SEO Related settings
const seo = {
  title: "Xavier Ritch || Software Engineer",
  description:
    "A man on a mission to better himself each day through applied learning, trial and error and communication",
  og: {
    title: "Xavier Ritch Developer Portfolio",
    type: "website",
    url: "http://therealxavier.com/",
  },
};

//Home Page
const greeting = {
  title: "Xavier Ricardo",
  logo_name: "XavierRRitch",
  nickname: "Software Engineer",
  subTitle:
    "A man on a mission to better himself each day through applied learning, trial and error and communication",
  resumeLink:
    "https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
  portfolio_repository: "https://github.com/MrXavi3r",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/mrXavi3r",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/xavier-ritch-254238145/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:xritch89@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Discord",
    link: "https://discordapp.com/users/MrXavi3r#6291",
    fontAwesomeIcon: "fa-discord",
    backgroundColor: "purple",
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/xay305",
  //   fontAwesomeIcon: "fa-twitter",
  //   backgroundColor: "#1DA1F2",
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/mrXavi3r/",
  //   fontAwesomeIcon: "fa-instagram",
  //   backgroundColor: "#E4405F",
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build responsive frontend apps using React",
        "⚡ Create fully functional application backends with Node/Express",
        "⚡ Data storage with MongoDB",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#fff",
            color: "#2f74c1",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "cib:mongodb",
          style: {
            color: "#499c4a",
          },
        },
      ],
    },
    {
      title: "BlockChain Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ I'm just getting started in the blockchain space but i'm actively studying and have high ambitions for it",
        "⚡ I believe blockchain is a huge part of our tech future and I want to be a part of that as a developer",
        "⚡ From cryptocurrency to NFTs and Smart Contracts, metaverse and more. Blockchain will be the centerpiece ",
      ],
      softwareSkills: [
        {
          skillName: "Ethereum",
          fontAwesomeClassname: "logos-ethereum",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Bitcoin",
          fontAwesomeClassname: "logos:bitcoin",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "Web3.Js",
          fontAwesomeClassname: "simple-icons:web3dotjs",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Solidity",
          fontAwesomeClassname: "vscode-icons:file-type-light-solidity",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },

    {
      title: "A BIT ABOUT ME...",
      fileName: "DesignImg",
      skills: [
        "⚡ I live on the computer but there's much more to me beyond that",
        "⚡ Enjoying the great outdoors is by far my favorite way to spend free time",
        "⚡ It can be travel, a day at the park, a concert event, exercise, or pick up basketball. Being outside and active is something I really cherish",
        "⚡ I like to get the adrenaline going too. Skydiving is still on my bucket list, but I go scuba diving, jet skiing or dirt biking whenever possible",
      ],
      softwareSkills: [
        {
          skillName: "sports",
          fontAwesomeClassname: "emojione:person-bouncing-ball-dark-skin-tone",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "scuba-diving",
          fontAwesomeClassname: "noto:diving-mask",
          style: {
            color: "#0000FF",
          },
        },
        {
          skillName: "rock-climbing",
          fontAwesomeClassname: "noto:man-climbing-medium-dark-skin-tone",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "travel",
          fontAwesomeClassname: "emojione-v1:airplane-departure",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "exercise",
          fontAwesomeClassname:
            "noto:man-lifting-weights-medium-dark-skin-tone",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Team Treehouse",
      iconifyClassname: "logos:treehouse",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://teamtreehouse.com/xavierritch",
    },
    {
      siteName: "CodeWars",
      iconifyClassname: "simple-icons:codewars",
      style: {
        color: "#b0361e",
        backgroundColor: "#222222",
      },
      profileLink: "https://www.codewars.com/users/MrXavi3r",
    },
    {
      siteName: "freeCodeCamp",
      iconifyClassname: "cib:freecodecamp",
      style: {
        color: "#b0361e",
        backgroundColor: "transparent",
      },
      profileLink: "https://www.codewars.com/users/MrXavi3r",
    },
    {
      siteName: "Codecademy",
      iconifyClassname: "cib:codecademy",
      style: {
        color: "#1f4053",
        backgroundColor: "transparent",
      },
      profileLink: "https://www.codewars.com/users/MrXavi3r",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Thinkful",
      subtitle: "Software Engineering Immersion",
      logo_path: "Thinkful.jpg",
      alt_name: "Thinkful Online Coding Bootcamp",
      duration: "Aug 2020 - Dec 2020",
      descriptions: [
        "⚡ Remote accelerated code bootcamp with experienced industry professional instructors",
        "⚡ Studied Javascript, JQuery, React, Node/Express, SQL, & Algorithms",
        "⚡ Collaborated daily with peers to solve problems and complete group projects while meeting strict deadlines",
      ],
      website_link:
        "https://thinkful.com/bootcamp/web-development/#introduction",
    },
    {
      title: "Team TreeHouse TechDegree",
      subtitle: "FullStack Web Development",
      logo_path: "verto_logo.svg",
      alt_name: "Team Treehouse Online",
      duration: "Jul 2019 - Apr 2020",
      descriptions: [
        "⚡ In depth online tutorial based learning track with live support from experienced developers",
        "⚡ Learned core concepts of web development, version control, databases, and computer science",
        "⚡ Built several projects using Javascript, React, CSS and Node.Js, and more",
      ],
      website_link:
        "https://teamtreehouse.com/techdegree?campaign=%2A%2ALP+-+TM+-+TD&content=526982633949&keyword=team%20treehouse%20tech&cid=10262&utm_source=google&utm_medium=cpc&utm_campaign=%2A%2ALP+-+TM+-+TD&utm_term=team%20treehouse%20tech&hsa_acc=9235032315&hsa_cam=2029084716&hsa_grp=71447038003&hsa_ad=526982633949&hsa_src=g&hsa_tgt=aud-764007069802:kwd-763862687666&hsa_kw=team%20treehouse%20tech&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQiAhMOMBhDhARIsAPVml-Eejx-06aWdMlL9N7T9SZxZivMHeDUT1rCKSLZTdYuVRe8PE0Gy7HcaAoC9EALw_wcB",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Blockchain Essentials",
      subtitle: "Cornell University Online",
      logo_path: "eCornell_Logo.png",
      certificate_link:
        "https://online.cornell.edu/blockchain-essentials?creative=496097867493&keyword=%2Bblockchain%20%2Bcertification&matchtype=b&network=g&device=c&utm_campaign=tech_US+-+BMM+-+Blockchain+for+Business&utm_source=google&utm_medium=cpc&utm_term=%2Bblockchain%20%2Bcertification&utm_content=g_496097867493_b&creative=496097867493&keyword=%2Bblockchain%20%2Bcertification&matchtype=b&network=g&device=c&url=https%3A%2F%2Fonline.cornell.edu%2Fblockchain-essentials%3Fcreative%3D496097867493%26keyword%3D%252Bblockchain%2520%252Bcertification%26matchtype%3Db%26network%3Dg%26device%3Dc&target=&position=&gclid=Cj0KCQiAhMOMBhDhARIsAPVml-F398dA0-_ii2IhJJ1bpW0URNbLhQvCuPn8-O0GR3rnDl8QiRb7h_0aAptCEALw_wcB",
      alt_name: "Cornell University Online",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work & Volunteerships",
  description:
    "I have primarily worked as a React developer, although I am also capable with Node/Express on the backend, My goal here is to continue to gain experience and level up my skills, and eventually work with blockchain technology in a professional capacity.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "FrontEnd Developer",
          company: "Verto",
          company_url: "https://www.linkedin.com/company/verto-art/",
          logo_path: "verto_logo.svg",
          duration: "Aug 2020 - Present",
          location: "Miami, FL - Remote",
          description:
            "At Verto I'm the primary frontend developer. Working with ReactJs, we're building an innovate web3 application on the Solana blockchain.",
          color: "#9b1578",
        },
        {
          title: "DASHBOARD",
          company: "Xavier Ritch",
          company_url: "https://www.koffeekult.com/",
          logo_path: "dashboard_logo.png",
          duration: "Aug 2021 - Present",
          location: "Hollywood, FL",
          description:
            "My personal project. MERN/TYPESCRIPT/GRAPQL. A personal finance dashboard that allows users to track bank account transactions via Plaid API, track investment performance and market data via Tradingview API, and get financial news via News API. Users may also set spending goals, view expense breakdowns and receive suggestions to improve habits.",
          color: "#9b1578",
        },
        {
          title: "Web Developer (Freelance)",
          company: "Koffee Kult",
          company_url: "https://www.koffeekult.com/",
          logo_path: "koffee.png",
          duration: "Apr 2021 - May 2021",
          location: "Hollywood, FL",
          description:
            "Assisted in building several React components as an overall upgrade to the site.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "Thinkful",
          company_url: "https://www.thinkful.com/",
          logo_path: "thinkful.jpg",
          duration: "Jan - Feb 2020",
          location: "Online",
          description:
            "Assisted incoming students with coding challenges as a TA",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer",
          company: "Miami Rescue Mission",
          company_url: "http://miamirescuemission.com/",
          logo_path: "miami_mission.jpg",
          duration: "Aug 2006 - Present",
          location: "2020 NW 1st Ave, Miami, FL 33127",
          description:
            "Although this is not programming related, I feel it's of great importance to have the best possible impact on the environment around you. Helping others in need and giving back to show gratitude for what you may have been blessed with in life. I have been volunteering and donating in many capacities to the Miami Rescue Mission since first being inspired to do so in high school. We help local homeless find shelter and housing, provide a community food bank, host Thanksgiving and Christmas dinner, and provide support for health services.",
          color: "#4285F4",
        },
        {
          title: "Developer Support",
          company: "Discord - The Coding Den",
          company_url: "http://discord.gg/0xZXblUU30hYo1vJ",
          logo_path: "discord.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am a part of one of the most active software developer communities on discord, where I regularly volunteer to help newbie or peer developers with coding challenges, questions and debugging.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects primarily utilize MERN stack building scalable, responsive web applications. I'm always building, so many may be a work in progress, as I add functionality, refactor and update old code, and improve the overall UI/UX.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "xavier.svg",
    description:
      "I'm available! Feel free to connect via LinkedIn, join me on discord, shoot me an email or even give me a call if you really can't wait. I'm open to collaboration and new and ambitious projects.",
  },
  addressSection: {
    title: "Location",
    subtitle: "Miami, Florida, United States",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/vNa8xrcpvDGbNchb7",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+1 9542966361",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
