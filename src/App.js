import "./App.css";
import Navigationbar from "./Navbar";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
  AiFillEnvironment,
  AiFillPhone,
} from "react-icons/ai";

function App() {
  return (
    <main className="main px-8 md:px-20 lg:px-40">
      <Navigationbar />
      <br />
      <section
        id="home"
        className="min-h-screen text-center mt-4 flex flex-col justify-center "
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
          <AiFillLinkedin />
          <AiFillGithub />
          <AiFillInstagram />
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
            <img src="profile.png" className="w-48" alt="gambar" />
            <h2 className="text-xl">That's me</h2>
            <ul>
              <li>I see, I analyze, I do</li>
              <li> I am a creative SOLO player and a key TEAM player</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="bayes.jpg" className="w-48" alt="gambar" />
            <h2 className="text-xl">
              BSc Business Management, Bayes BS (London, UK)
            </h2>
            <p className="text-gray-500">September 2020 - May 2023</p>
            <p className="text-xl">Skills and Knowledge</p>
            <ul>
              <li>Management, Strategy, Analysis</li>
              <li>Accounting, Finance, Economics</li>
              <li>Enterprenuership, Crtitical Thinking, Mentoring</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="udemy.png" className="w-48" alt="gambar" />
            <h2 className="text-xl">Full Stack Developer, Udemy</h2>
            <p className="text-gray-500">
              Self-taught web developer that constantly wants to learn, gain
              experience and improve
            </p>
            <p className="text-xl ">Skills</p>
            <ul>
              <li>Html, Css, Javascript, Python</li>
              <li>React, Node.js, Express.js, MongoDB</li>
              <li>MERN</li>
            </ul>
          </div>
        </div>
      </section>
      <br />

      <section id="license" className="mt-10">
        <h1 className="text-xl font-medium">Certifications</h1>
        <p className="mt-1 text-md">
          Here are some of the certifications I have.
        </p>

        <div className="flex flex-col md:flex-row gap-8 mt-4">
          <div className="w-full md:w-2/6 shadow-md rounded ">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium">
                Dasar Pemrograman Javascript
              </h1>
              <p className="">Dicoding Indonesia</p>
              <p className="text-sm text-gray-500">May 2023</p>
            </div>
          </div>

          <div className="w-full md:w-2/6 shadow-md rounded ">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium">
                Dasar Pemrograman Javascript
              </h1>
              <p className="">Dicoding Indonesia</p>
              <p className="text-sm text-gray-500">May 2023</p>
            </div>
          </div>

          <div className="w-full md:w-2/6 shadow-md rounded ">
            <div className="h-48 md:h-56 rounded-t-md relative overflow-hidden">
              <img
                src="https://source.unsplash.com/random"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-medium">
                Dasar Pemrograman Javascript
              </h1>
              <p className="">Dicoding Indonesia</p>
              <p className="text-sm text-gray-500">May 2023</p>
            </div>
          </div>
        </div>
      </section>
      <br />
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
            <img src="software.png" className="w-48" alt="gambar" />
            <h2 className="text-xl">Software Development</h2>
            <p className="text-gray-500">
              I can help you solve a problem, build a product or grow existing
              project.
            </p>
            <p className="text-xl ">Tools I Use</p>
            <ul>
              <li>React</li>
              <li>Node JS (Express)</li>
              <li>Python (Flask)</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="cloud.png" className="w-48" alt="gambar" />
            <h2 className="text-xl">Cloud & IT Solutions Architect</h2>
            <p className="text-gray-500">
              I can help you solve a problem, build a product or grow existing
              project.
            </p>
            <p className="text-xl">Tools I Use</p>
            <ul>
              <li>AWS, Azure, Digital Ocean</li>
              <li>Openstack</li>
              <li>Kubernetes & Docker</li>
            </ul>
          </div>

          <div className="w-full shadow-lg rounded-md px-4 py-5 flex flex-col items-center text-center gap-1">
            <img src="ops.png" className="w-48" alt="gambar" />
            <h2 className="text-xl">DevOps Architect</h2>
            <p className="text-gray-500">
              I can help you solve a problem, build a product or grow existing
              project.
            </p>
            <p className="text-xl ">Tools I Use</p>
            <ul>
              <li>Gitlab</li>
              <li>Ansible</li>
              <li></li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section id="footer" className="mt-5 rounded bg-black py-8 px-8">
        <div className="text-white md:text-center">
          <h1 className="font-medium text-lg">
            Contact me anytime about anything
          </h1>

          <div className="flex text-xl text-white gap-4 mt-2 md:justify-center">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillInstagram />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
