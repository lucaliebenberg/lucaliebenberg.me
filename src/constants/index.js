export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  // {
  //   id: 4,
  //   name: "Contact",
  //   href: "#contact",
  // },
];

export const myProjects = [
  {
    title: "basedLAND",
    desc: "Introducing a web 3.0 focussed project from a environmental awareness hackathon.",
    subdesc:
      "This platform allows users to participate in the token sale, stake their tokens, and receive rewards, thereby getting value from their investments.",
    href: "https://base-land-xyz.vercel.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "black",

      border: "0.2px solid #405982",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
      {
        id: 5,
        name: "Solidity",
        path: "/assets/solidity.svg",
      },
    ],
  }
];

export const myHobbies = [
      {
        id: 1,
        name: "LinkedIn",
        path: "/assets/linkedin.png",
        href: "https://www.linkedin.com/in/luca-liebenberg/",
      },
      {
        id: 2,
        name: "Github",
        path: "assets/github-white.png",
        href: "https://github.com/lucaliebenberg",
      },
      {
        id: 3,
        name: "LeetCode",
        path: "/assets/leetcode.png",
        href: "https://leetcode.com/",
        // href: "https://leetcode.com/u/lucaliebenberg/",
      },
      {
        id: 4,
        name: "NeetCode",
        path: "/assets/neetcode.png",
        href: "https://neetcode.io/",
      },
      {
        id: 5,
        name: "Frontend Masters",
        path: "/assets/fem.png",
        href: "https://frontendmasters.com/dashboard/",
      },
    ]

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 5 : isMobile ? 6 : 6,
    deskPosition: isMobile ? [1.8, -2, 0] : [2.4, -3, 4],
    saxophone: isSmall
      ? [2, -2, 2]
      : isMobile
      ? [3, -4, 3]
      : isTablet
      ? [3, -6, 6.3]
      : [4.5, 0, 10],
    headPhones: isSmall
      ? [5, 7, 0]
      : isMobile
      ? [-5, 10, -12]
      : isTablet
      ? [-12, 10, 0]
      : [-10.5, 3.5, 0],
  };
};

export const workExperiences = [
  // animation: victory, clapping, salute
  {
    id: 1,
    name: "Trinity IoT",
    pos: "Frontend Developer",
    duration: "Jul 2023 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  }
];
