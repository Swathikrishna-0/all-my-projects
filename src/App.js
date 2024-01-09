import TimelineView from "./components/TimelineView";
import "./App.css";

const timelineItemsList = [
  {
    id: "c6aad2fb-7673-45cf-9606-a335acc0cf4b",
    categoryId: "COURSE",
    title: "17 MAY 2021",
    courseTitle: "Static Website",
    description:
      "Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.",
    duration: "10 days",
    tagsList: [
      {
        id: "c31b2ad8-f766-11eb-9a03-0242ac130003",
        name: "HTML Elements",
      },
      {
        id: "c31b2d08-f766-11eb-9a03-0242ac130003",
        name: "Class Attribute",
      },
      {
        id: "c31b2dee-f766-11eb-9a03-0242ac130003",
        name: "Text Properties",
      },
      {
        id: "c31b2eb6-f766-11eb-9a03-0242ac130003",
        name: "Bootstrap",
      },
      {
        id: "c31b2f6a-f766-11eb-9a03-0242ac130003",
        name: "Box Properties",
      },
      {
        id: "c31b347e-f766-11eb-9a03-0242ac130003",
        name: "Layout",
      },
      {
        id: "c31b358c-f766-11eb-9a03-0242ac130003",
        name: "Flexbox",
      },
    ],
  },
  {
    id: "a19d93d6-bdac-479e-b554-974ef9e6e66c",
    categoryId: "PROJECT",
    title: "27 MAY 2021",
    projectTitle: "SkyScanner Clone",
    description:
      "A tourism website enables the user to browse through the images of popular destinations.",
    imageUrl: "{image}",
    duration: "3 hrs",
    projectUrl: "https://skyscanner-a131d.web.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Skyscanner-Clone"
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Signal Clone",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "./components/assets/skyscanner.png",
    duration: "6 hrs",
    projectUrl: "https://signalapp-101.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/signal-clone"
  },
  {
    id: "40b82899-fdf7-4a3e-a43a-41a9917b4582",
    categoryId: "COURSE",
    title: "10 JUNE 2021",
    courseTitle: "Responsive Website",
    description:
      "Build a responsive website that appears beautifully on the screen of any size. Develop a personal portfolio website, an E-commerce product listing website and a website to host conferences and events.",
    duration: "12 days",
    tagsList: [
      {
        id: "551e2b7e-f767-11eb-9a03-0242ac130003",
        name: "Responsive Web Design",
      },
      {
        id: "551e2de0-f767-11eb-9a03-0242ac130003",
        name: "Multiple Layouts",
      },
      {
        id: "551e3114-f767-11eb-9a03-0242ac130003",
        name: "Column Wrapping",
      },
      {
        id: "551e31e6-f767-11eb-9a03-0242ac130003",
        name: "Navbar",
      },
      {
        id: "551e32a4-f767-11eb-9a03-0242ac130003",
        name: "Designing Layouts",
      },
      {
        id: "551e334e-f767-11eb-9a03-0242ac130003",
        name: "Inheritance",
      },
      {
        id: "551e3402-f767-11eb-9a03-0242ac130003",
        name: "CSS Gradients",
      },
    ],
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Food Munch Responsive Website",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: " https://foodmunch1032.ccbp.tech/ ",
    githubUrl:"https://github.com/Swathikrishna-0/foodmunch"
  },
  {
    id: "ae2ede68-af77-427c-817c-0ce4beeb69c7",
    categoryId: "PROJECT",
    title: "12 JUNE 2021",
    projectTitle: "Youtube Clone",
    description: "Food Much Website is a user-centric food tech website.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/projects-r2-img.png",
    duration: "2 hrs",
    projectUrl: "https://youtube-clone-swathi.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/YouTube-React-Clone"
  },
  {
    id: "4938c3d1-81cd-4729-9d2c-dcd50796aa4d",
    categoryId: "COURSE",
    title: "5 JULY 2021",
    courseTitle: "Dynamic Website",
    description:
      "Learn the fundamental concepts in JavaScript and apply them to build dynamic and interactive web applications like Counter, Guessing Game, Chat Web app, E-commerce web app, etc.",
    duration: "20 days",
    tagsList: [
      {
        id: "d4743c06-f767-11eb-9a03-0242ac130003",
        name: "Declaring Variables",
      },
      {
        id: "d4743ecc-f767-11eb-9a03-0242ac130003",
        name: "Comparison Operator",
      },
      {
        id: "d4743fe4-f767-11eb-9a03-0242ac130003",
        name: "Functions",
      },
      {
        id: "d47440d4-f767-11eb-9a03-0242ac130003",
        name: "Object",
      },
      {
        id: "d474434a-f767-11eb-9a03-0242ac130003",
        name: "DOM Manipulations",
      },
      {
        id: "d474443a-f767-11eb-9a03-0242ac130003",
        name: "Loops",
      },
      {
        id: "d4744516-f767-11eb-9a03-0242ac130003",
        name: "Local Storage",
      },
    ],
  },
  {
    id: "d6c4b3a5-7b1d-4906-aca8-823f44129004",
    categoryId: "PROJECT",
    title: "27 JULY 2021",
    projectTitle: "Todos Application",
    description:
      "This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png",
    duration: "3 hrs",
    projectUrl: "https://todolist1032.ccbp.tech/",
    githubUrl:"https://github.com/Swathikrishna-0/To-Dos-Application"
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Rock Paper Scissors",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://swathi-rock-paper-scissors.netlify.app/",
    githubUrl: "https://github.com/Swathikrishna-0/Rock-Paper-Scissors"
  },
  {
    id: "0a35abbe-22ca-40a1-81da-613f656b7702",
    categoryId: "PROJECT",
    title: "29 JULY 2021",
    projectTitle: "Emoji Game",
    description:
      "Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png",
    duration: "4 hrs",
    projectUrl: "https://swathis-emoji-game.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Emoji-Game-Reactjs"
  },
  {
    id: "d80781c3-980e-4ab9-96ca-9ad1a9cdf93d",
    categoryId: "COURSE",
    title: "10 AUGUST 2021",
    courseTitle: "RWD using Flexbox",
    description:
      "Learn to develop responsive layouts using CSS Flexbox and CSS Media Queries.",
    duration: "7 days",
    tagsList: [
      {
        id: "34e6b208-f768-11eb-9a03-0242ac130003",
        name: "Sizing Elements",
      },
      {
        id: "34e6b460-f768-11eb-9a03-0242ac130003",
        name: "Flexbox Layout",
      },
      {
        id: "34e6b76c-f768-11eb-9a03-0242ac130003",
        name: "Min & Max sizes",
      },
      {
        id: "34e6b83e-f768-11eb-9a03-0242ac130003",
        name: "Media Query Syntax",
      },
      {
        id: "34e6b8fc-f768-11eb-9a03-0242ac130003",
        name: "Logical Operators",
      },
      {
        id: "34e6ba28-f768-11eb-9a03-0242ac130003",
        name: "CSS box-sizing property",
      },
      {
        id: "34e6baf0-f768-11eb-9a03-0242ac130003",
        name: "Media Features",
      },
    ],
  },
  {
    id: "7bc3f006-f0f1-4574-924b-17c480556727",
    categoryId: "PROJECT",
    title: "15 AUGUST 2021",
    projectTitle: "Covid-19 Tracker",
    description:
      "The landing page of Move Messenger gives you a brief intro of Move Messenger. The landing page is responsive enabling to view it across various devices.",
    imageUrl:
      "https://assets.ccbp.in/frontend/intermediate-rwd/move-messenger-img.png",
    duration: "5 hr",
    projectUrl: "https://covid-19-tracker-232.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Covid_Tracker_React_App"
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Github Popular Repos",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://github-popular-repos-swathi.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Github-Popular-Repos"
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Digital Timer App",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://swathi-digital-timer-app.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Digital-Timer "
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Money Manager",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://swathi-money-manager.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Money-Manager"
  },
  {
    id: "e681e826-260c-4540-9ee5-f53d0e6ecba0",
    categoryId: "COURSE",
    title: "17 AUGUST 2021",
    courseTitle: "React JS - Getting Started",
    description:
      "Learn how to build dynamic web applications with the React JS library. When you finish this course, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.",
    duration: "18 days",
    tagsList: [
      {
        id: "94947ad2-f768-11eb-9a03-0242ac130003",
        name: "Components",
      },
      {
        id: "94947d52-f768-11eb-9a03-0242ac130003",
        name: "Lists",
      },
      {
        id: "94947e4c-f768-11eb-9a03-0242ac130003",
        name: "Conditional Rendering",
      },
      {
        id: "94947f14-f768-11eb-9a03-0242ac130003",
        name: "setState()",
      },
      {
        id: "94948270-f768-11eb-9a03-0242ac130003",
        name: "Updating Phase",
      },
      {
        id: "94948342-f768-11eb-9a03-0242ac130003",
        name: "Routing",
      },
      {
        id: "94948400-f768-11eb-9a03-0242ac130003",
        name: "API Calls",
      },
    ],
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Weather Forecast App",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://weatherforecastlive.vercel.app/",
    githubUrl:"https://github.com/Swathikrishna-0/weather-forecast-app-react "
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Crypto Currency Tracker",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://crypto-currency-tracker-swathi.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Crypto-Currency-Tracker"
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Prime Video Clone",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://swathi-prime-video-clone.netlify.app/",
    githubUrl:" https://github.com/Swathikrishna-0/Prime-Video-Clone"
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Jobby App",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://swathi-jobby-app.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Jobby-App"
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Tasty Kitchen",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://tasty-kitchen-app-swathi.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Tasty-Kitchen-App"
  },

  {
    id: "123",
    categoryId: "COURSE",
    title: "13 SEPTEMBER 2021",
    courseTitle: "Node JS - Getting Started",
    description:
      "Learn Node.js, a powerful JavaScript runtime, to build scalable and efficient server-side applications. Explore asynchronous programming, event-driven architecture, and the Node.js ecosystem for creating robust and high-performance web applications.",
    duration: "18 days",
    tagsList: [
      {
        id: "94947ad2-f768-11eb-9a03-0242ac130003",
        name: "NodeJS",
      },
      {
        id: "94947d52-f768-11eb-9a03-0242ac130003",
        name: "JavaScript",
      },
      {
        id: "94947e4c-f768-11eb-9a03-0242ac130003",
        name: "Server-Side JavaScript",
      },
      {
        id: "94947f14-f768-11eb-9a03-0242ac130003",
        name: "Node.js Ecosystem",
      },
      {
        id: "94948270-f768-11eb-9a03-0242ac130003",
        name: "Backend Development",
      },
      {
        id: "94948400-f768-11eb-9a03-0242ac130003",
        name: "API Calls",
      },
    ],
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Portfolio Website",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://swathipriya-portfolio.netlify.app/ ",
    githubUrl:"https://github.com/Swathikrishna-0/My-Portfolio"
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "NXT Watch",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://nxtwatch-app-react.vercel.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Nxtwatch-App"
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Nxt Trendz",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://nxt-trendzz-app.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/NxtTrendz-App"
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Netflix/Movie app",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://cinemate-app-reactjs.vercel.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Movies-website"
  },
  {
    id: "e093c08a-a2ae-413a-814b-e7c83f5f2ac3",
    categoryId: "PROJECT",
    title: "10 SEPTEMBER 2021",
    projectTitle: "Book Hub",
    description:
      "Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png",
    duration: "6 hrs",
    projectUrl: "https://book-hub-swathi.netlify.app/",
    githubUrl:"https://github.com/Swathikrishna-0/Book-Hub"
  },
];

const App = () => <TimelineView timelineItemsList={timelineItemsList} />;

export default App;
