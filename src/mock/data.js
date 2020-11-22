import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Angie To | Software Engineer', // e.g: 'Name | Developer'
  lang: 'JavaScript, TypeScript, C#', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Angie To',
  subtitle: `Welcome to my portfolio`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I am a passionate programmer seeking the opportunity to empower individuals, communities, and the underserved among them.`,
  paragraphTwo: `Having worked with developmentally-challenged children and families from varied backgrounds, I saw how technology had the power to either isolate its users or draw people together. I want to be a part of a coding community that not only cares about advancing technology but also about improving lives.`,
  paragraphThree: `I'm always amazed how people perceive and solve problems from different perspectives, whether those differences stem from culture, education, or other life experiences. Wase Boggs once said "A positive attitude causes a chain reaction of positive thoughts, events and outcomes. It is a catalyst and it sparks extraordinary results." I hope that my background in psychology combined with my passion in software engineering can spark those extraordinary results.`,
  resume: 'https://drive.google.com/file/d/1-vavhXuoOocec8ZHWy-3fMQg9c4Yfofr/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'jokebot.JPG',
    title: 'Joke Bot',
    info: 'Highly educated in joke telling, the bot is commited to make your day a little happier.',
    info2: '',
    url: 'https://angieto.github.io/Joke-Bot/',
    repo: 'https://github.com/angieto/Joke-Bot',
  },
  {
    id: nanoid(),
    img: 'canvas.JPG',
    title: 'Mini Canvas',
    info: 'A basic canvas for users to work on their own painting project.',
    info2: '',
    url: 'https://angieto.github.io/MiniCanvas/',
    repo: 'https://github.com/angieto/MiniCanvas',
  },
  {
    id: nanoid(),
    img: 'pingpong.png',
    title: 'Mini Ping Pong',
    info: 'A mini ping pong game with an AI opponent.',
    info2: '',
    url: 'https://angieto.github.io/MiniPingPong/',
    repo: 'https://github.com/angieto/MiniPingPong',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'angie.to@berkeley.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/angie-to/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/angieto',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
