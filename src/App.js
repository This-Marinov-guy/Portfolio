import Navigationbar from "./Navbar";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillEnvironment,
} from "react-icons/ai";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <main className="main px-8 md:px-20 lg:px-40">
      <Navigationbar />
      <section
        id="home"
        className="min-h-screen text-center mt-14 flex flex-col justify-center "
      >
        <div className="mx-auto from-teal-500 rounded-full w-56 h-56 relative overflow-hidden md:h-96 md:w-96 mb-2">
          <img src="/avatar.png" layout="fill" objectFit="cover" />
        </div>
        <h1 className="text-3xl md:text-5xl font-medium text-teal-500">
          VLADISLAV MARINOV
        </h1>
        <h3 className="text-xl md:text-2xl">Full Stack Developer</h3>
        <p className="text-md py-1 text-gray-800 md:text-xl">
          Enthusiastic and motivated self-taught web developer. Focused on
          gaining experience and expanding in the field. Now I am looking to
          start my career.
        </p>
        <div className="text-5xl py-4 flex justify-center gap-16 text-gray-600">
          <a
            className="text-gray-500"
            href="https://www.linkedin.com/in/vladislav-marinov-122455208/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="text-gray-500"
            href="https://github.com/This-Marinov-guy"
            target="_blank"
          >
            <AiFillGithub />
          </a>
        </div>
      </section>

      <section id="bio" className="">
        <h1 className="text-xl font-medium">About me</h1>
        <p className="mt-1 text-md">
          I am a 21 years old university to-be graduate who strives for success
          and is constantly aiming to improve as I learn
        </p>

        <div className="mt-4 flex flex-col md:flex-row gap-8">
          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="profile.png" className="w-48 mb-4" alt="gambar" />
            <h2 className="text-xl">That's me</h2>
            <ul>
              <li>I see, I analyze, I do</li>
              <li> I am a creative SOLO player and a key TEAM player</li>
            </ul>
            <p className="text-xl">
              About me
            </p>
            <ul>
              <li className="mb-2">Born on 11.09.2001</li>
              <li className="flex items-center justify-center flex-row mb-2">Bulgarian Nationality<img className='ml-2 w-8' src='flag.png'></img></li>
              <li className="mb-2">Interests: Web Developement, Business Environment, Corporate World</li>
              <li>Hobbies: Competitive Sailing, Outdoors Activities & Fitness, Cinema</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="bayes.jpg" className="w-48 mb-4" alt="gambar" />
            <h2 className="text-xl">
              BSc Business Management, Bayes BS (London, UK)
            </h2>
            <p className="text-gray-500">September 2020 - May 2023</p>
            <p className="text-xl">Strenghts</p>
            <ul>
              <li>Management</li>
              <li>Economics</li>
              <li>Strategy</li>
            </ul>
            <p className="text-xl">Main Modules</p>
            <ul>
              <li>Stage 1: Management, Crtitical Thinking, Enterprenuership</li>
              <li>Stage 2: Accounting, Finance, Economics</li>
              <li>Stage 3: Strategy, Corporate Governance, Research and Data Analysis</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="udemy.png" className="w-48 mb-4" alt="gambar" />
            <h2 className="text-xl">Full Stack Developer, Udemy</h2>
            <p className="text-xl ">Skills</p>
            <ul>
              <li>Html, Css, Javascript, Python</li>
              <li>React, Node.js, Express.js, MongoDB</li>
              <li>REST API, SQL</li>
            </ul>
            <p className="text-xl">What I do</p>
            <ul>
              <li>Build React UI</li>
              <li>BUild REST API</li>
              <li>Connect A and B</li>
            </ul>
            <p className="text-xl">What I WANT to do</p>
            <ul>
              <li>Gain exprerience in the field</li>
              <li>Evolve my skills while simultanioucly build new ones</li>
              <li>Work in projects with great potential and high value</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="license" className="mt-10">
        <h1 className="text-xl font-medium">Certifications</h1>
        <p className="mt-1 text-md">
          Here are some of the certifications I have.
        </p>

        <div className="flex flex-col md:flex-row gap-8 mt-14">
          <div className="flex md:flex-col w-full md:w-2/6 shadow-md rounded ">
            <img
              className="sm:flex sm:self-center h-48 md:h-56 rounded-t-md"
              src="academind.jpg"
            />
            <div className="p-4">
              <h1 className="text-xl font-medium">MERN Fullstack Guide</h1>
              <p className="">MongoDB, Express.js, React.js, Node.js </p>
              <p className="text-sm text-gray-500">November 2022</p>
            </div>
          </div>

          <div className="flex md:flex-col w-full md:w-2/6 shadow-md rounded ">
            <img
              className="sm:flex sm:self-center h-48 md:h-56 rounded-t-md"
              src="academind.jpg"
            />
            <div className="p-4">
              <h1 className="text-xl font-medium">
                React - The Complete Guide{" "}
              </h1>
              <p className="">Hooks, Routes, Next.js, Redux</p>
              <p className="text-sm text-gray-500">June 2022</p>
            </div>
          </div>

          <div className="flex md:flex-col w-full md:w-2/6 shadow-md rounded ">
            <img
              className="sm:flex sm:self-center h-48 md:h-56 rounded-t-md"
              src="academind.jpg"
            />
            <div className="p-4">
              <h1 className="text-xl font-medium">
                NodeJS - The Complete Guide{" "}
              </h1>
              <p className="">Express.js, MongoDB, REST API, SQL</p>
              <p className="text-sm text-gray-500">November 2022</p>
            </div>
          </div>
          <div className="flex md:flex-col w-full md:w-2/6 shadow-md rounded ">
            <img
              className="sm:flex sm:self-center h-48 md:h-56 rounded-t-md"
              src="app_brewery.png"
            />
            <div className="p-4">
              <h1 className="text-xl font-medium">
                The Complete 2022 Web Developer Bootcamp
              </h1>
              <p className="">Html, Css, JS, EJS, Bootstrap, Tailwind</p>
              <p className="text-sm text-gray-500">April 2022</p>
            </div>
          </div>
          <div className="flex md:flex-col w-full md:w-2/6 shadow-md rounded ">
            <img
              className="sm:flex sm:self-center h-48 md:h-56 rounded-t-md"
              src="ztm.png"
            />
            <div className="p-4">
              <h1 className="text-xl font-medium">
                Complete Python Developer in 2022
              </h1>
              <p className="">Python, Beautiful Soup, Pygames</p>
              <p className="text-sm text-gray-500">January 2022</p>
            </div>
          </div>
        </div>
      </section>

      <section id="service" className="">
        <h1 className="text-xl font-medium">My Projects</h1>
        <p className="mt-1 text-md">
          I have experience in building an application and creating cloud
          architecture as an integration to provide business and consumer
          solutions. I offer a wide of service, including Frontend & Backend
          Development, Cloud & IT Solutions Architect, DevOps Architect
        </p>

        <div className="mt-4 flex flex-col md:flex-row gap-8">
          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
          <video src='alien.mp4' className='w-100' autoPlay loop muted />
            <h2 className="text-xl  mt-4">Alien Invader Game</h2>
            <p className="text-gray-500">
              A fun 'Rick & Morty' adaptation of an OG game where you shoot aliens before they come to hit your ship
            </p>
            <p className="text-xl ">Tools I Use</p>
            <ul>
              <li>Python</li>
              <li>PyGames</li>
            </ul>
            <Button
              className="self-center"
              href="https://food-order-cf412.web.app/"
              target="_blank"
              variant="info"
            >
              Show me
            </Button>
          </div>

          <div className="gradient-border w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="project_organizer.png" className="w-48" alt="gambar" />
            <h2 className="text-xl mt-4">Project Organiser</h2>
            <p className="text-gray-500">
              My biggest portfolio project. This is a project management app where you can make projects with tasks and participants. Everyone can see, add or edit tasks as well as every admin can add or remove participants. Each project also has a chat option.
            </p>
            <p className="text-xl">Tools I Use</p>
            <ul>
              <li>MERN stack</li>
              <li>Authentication and Authorization</li>
              <li>Real-time Database</li>
              <li>Bootstrap, Formik and Yup</li>
            </ul>
            <Button
              className="self-center"
              href="https://food-order-cf412.web.app/"
              target="_blank"
              variant="warning"
            >
              Show me
            </Button>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="food_order.png" className="w-100" alt="gambar" />
            <h2 className="text-xl  mt-4">Food Order App</h2>
            <p className="text-gray-500">
             My first basic project. This is a Dummy app to order food and checkout your cart ... that's more or less all
            </p>
            <p className="text-xl ">Tools I Use</p>
            <ul>
              <li>React</li>
              <li>React hooks</li>
              <li>Firebase Database</li>
            </ul>
            <Button
              className="self-center"
              href="https://food-order-cf412.web.app/"
              target="_blank"
              variant="info"
            >
              Show me
            </Button>
          </div>
        </div>
      </section>
      <section id="footer" className="mt-5 rounded bg-black py-8 px-8">
        <div className="text-white md:text-center">
          <h1 className="font-medium text-lg">
            Contact me anytime about anything
          </h1>
          <br />

          <ul className="md:flex justify-center items-center gap-4">
            <li className="flex gap-2">
              <AiFillLinkedin />
              <p>Vladislav Marinov</p>
            </li>
            <li className="flex gap-2">
              <AiFillGithub />
              <p>This-Marinov-Guy</p>
            </li>
            <li className="flex gap-2">
              <AiFillEnvironment />
              <p>London, UK | Burgas, BG</p>{" "}
            </li>
          </ul>
          <hr className="my-2 border-white-200 sm:mx-auto dark:border-white-700 lg:my-8" />

          <p className="text-center text-sm text-gray-300 sm:text-center">
            © 2023
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
