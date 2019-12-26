module.exports = {
  siteTitle: 'Cameron Nelson',
  siteDescription:
    '',
  siteKeywords:
    'Cameron Nelson, Cam Nelson, Cam, Nelson, Cameron, thecamnelson, waterloo, mechatronics engineer, software engineer',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Cameron Nelson',
  location: 'Toronto, Canada',
  email: 'ccnelson@edu.uwaterloo.ca',
  github: 'https://github.com/thecamnelson',
  twitterHandle: '@thecamnelson',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/thecamnelson',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/camcnelson/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thecamnelson',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/thecamnelson',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
