import {
    SiGithub,
    SiInstagram,
    SiTwitter,
    SiLinkedin,
    SiQuora,
    SiYoutube,
    SiCodepen,
    SiSnapchat,
    SiPython,
    SiJavascript,
    SiReact,
    SiHtml5,
    SiCss3,
    SiSpring,
    SiDjango,
    SiBootstrap,
    SiWebpack,
    SiTailwindcss,
    SiNodedotjs,
    SiGraphql,
    SiMaterialdesign,
    SiCplusplus,
    SiSpringboot,
    SiFastapi,
    SiMysql,
    SiMongodb,
    SiGoland,
    SiRust,
    SiTypescript,
    SiSonarcloud,
    SiAuth0,
    SiJest,
    SiVite
} from 'react-icons/si'	

import { calculateAge, renderDate } from '../functions';
import { BiLogoJava } from 'react-icons/bi';
import { HelpCmd } from '../type';

export const BIO_LINKS = [
    {
      title: "Github",
      Icon: SiGithub,
      href: "https://github.com/dev-madhurendra",
      text: "@dev-madhurendra",
    },
    {
      title: "Instagram",
      Icon: SiInstagram,
      href: "https://www.instagram.com/dev.madhurendra/",
      text: "@dev.madhurendra",
    },
    {
      title: "Twitter",
      Icon: SiTwitter,
      href: "https://twitter.com/devMadhurendra",
      text: "@devMadhurendra",
    },
    {
      title: "Linkedin",
      Icon: SiLinkedin,
      href: "https://www.linkedin.com/in/dev-madhurendra",
      text: "@dev-madhurendra",
    },
    {
      title: "Quora",
      Icon: SiQuora,
      href: "https://www.quora.com/profile/dev.madhurendra",
      text: "@dev.madhurendra",
    },
    {
      title: "Youtube",
      Icon: SiYoutube,
      href: "https://www.youtube.com/@dev.madhurendra",
      text: "@dev.madhurendra",
    },
    {
      title: "Codepen",
      Icon: SiCodepen,
      href: "https://codepen.io/devMadhurendra",
      text: "@devMadhurendra",
    },
    {
      title: "Snapchat",
      Icon: SiSnapchat,
      href: "https://www.snapchat.com/add/dev-madhurendra",
      text: "@dev-madhurendra",
    },
];
  
export const DOB = new Date('2001-08-02');
export const AGE = calculateAge(DOB)

export const BIO_CONSTANTS = {
    IMAGE: "https://avatars.githubusercontent.com/u/68775519?v=4",
    IMAGE_ALT: "Madhurendra Nath Tiwari",
    NAME: "Madhurendra",
    DOB_DESCRIPTION: `Join the world ${AGE} years ago.`,
    ABOUT_DESCRIPTION: "Hi there, I am a software engineer. Passionate with development and like to learn new thing related to coding and sharing it to the internet."
}

export const ABOUT_CONSTANTS = {
    ABOUT_TEXT: '<About />',
    ABOUT_DESCRIPTION: `
        🚀 I am a <b>Full-Stack Developer</b> with hands-on experience in building robust and scalable web applications.I am always open to collaboration and creating amazing digital experiences; Let's connect and explore the possibilities together;
        Passionate software engineer working at a dynamic startup, with expertise in a variety of cutting-edge technologies and tools.
    `
}

export const SKILLS_DATA = [
  { Icon: SiCplusplus, barWidth: "w-90%", percentageValue: "90%", text: "Cpp" },
  { Icon: SiPython, barWidth: "w-90%", percentageValue: "90%", text: "Python" },
  { Icon: BiLogoJava, barWidth: "w-70%", percentageValue: "70%", text: "Java" },
  { Icon: SiJavascript, barWidth: "w-80%", percentageValue: "80%", text: "JavaScript" },
  { Icon: SiReact, barWidth: "w-90%", percentageValue: "90%", text: "React" },
  { Icon: SiHtml5, barWidth: "w-80%", percentageValue: "80%", text: "HTML" },
  { Icon: SiCss3, barWidth: "w-80%", percentageValue: "80%", text: "CSS" },
  { Icon: SiSpring, barWidth: "w-70%", percentageValue: "70%", text: "Spring" },
  { Icon: SiNodedotjs, barWidth: "w-80%", percentageValue: "80%", text: "NodeJS" },
  { Icon: SiDjango, barWidth: "w-70%", percentageValue: "70%", text: "Django" },
  { Icon: SiGraphql, barWidth: "w-70%", percentageValue: "70%", text: "GraphQL" },
  { Icon: SiBootstrap, barWidth: "w-80%", percentageValue: "80%", text: "Bootstrap" },
  { Icon: SiMaterialdesign, barWidth: "w-90%", percentageValue: "90%", text: "MaterialUI" },
  { Icon: SiWebpack, barWidth: "w-70%", percentageValue: "70%", text: "Webpack" },
  { Icon: SiTailwindcss, barWidth: "w-80%", percentageValue: "80%", text: "TailwindCSS" },
  { Icon: SiSpringboot, barWidth: "w-80%", percentageValue: "80%", text: "Springboot" },
  { Icon: SiFastapi, barWidth: "w-80%", percentageValue: "80%", text: "Fastapi" },
  { Icon: SiMysql, barWidth: "w-80%", percentageValue: "80%", text: "MySQL" },
  { Icon: SiMongodb, barWidth: "w-80%", percentageValue: "80%", text: "MongoDB" },
  { Icon: SiGoland, barWidth: "w-80%", percentageValue: "80%", text: "Golang" },
  { Icon: SiRust, barWidth: "w-80%", percentageValue: "80%", text: "Rust" },
  { Icon: SiTypescript, barWidth: "w-80%", percentageValue: "80%", text: "TypeScript" },
  { Icon: SiSonarcloud, barWidth: "w-80%", percentageValue: "80%", text: "Sonarcloud" },
  { Icon: SiAuth0, barWidth: "w-80%", percentageValue: "80%", text: "Auth0" },
  { Icon: SiJest, barWidth: "w-80%", percentageValue: "80%", text: "Jest" },
  { Icon: SiVite, barWidth: "w-80%", percentageValue: "80%", text: "Vite" },
];

export const CONTACT_CONSTANTS = {
    CONTACTS: [
        {
            text: "Phone number",
            value: "+916307233230",
            href: "tel:85595419150",
        },
        {
            text: "Email",
            value: "dev.madhurendra@gmail.com",
            href: "mailto:dev.madhurendra@gmail.com",
        },
    ]
}

export const HELP_COMMANDS: HelpCmd[] = [
    { cmd: "bio", detail: "Show my bio information." },
    { cmd: "skill", detail: "List all of my skills." },
    { cmd: "contact", detail: "List all of the contacts." },
    { cmd: "about", detail: "To see what is terminal portfolio." },
    { cmd: "clear", detail: "To clear the history." },
];

export const APP_CONSTANTS = {  
    USE_A_PC_TEXT: "For a better experience, please use a PC!",
    OPTIMIZED_MOBILE_VIEW: "This design is not optimized for mobile view.",
    VISIT_THIS_INSTEAD: "Visit this instead"
}

export const TODAY_DATE = `Today is, ${renderDate()}`