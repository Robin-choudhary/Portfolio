"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const MianPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font w-full bg-[#f9f9ff]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="lg:text-6xl font-bold tracking-wider bg-gradient-to-r from-[#8490ff] to-[#62bdfc] bg-clip-text text-transparent">
              Robin Singh Choudhary
            </h1>
            <p className="mt-4 lg:text-3xl text-slate-700 capitalize tracking-wide">
              Front-End Developer
            </p>
            <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
              turning ideas into interactive reality
            </p>

            <div className="flex items-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
              </svg>
              <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
                <a href="tel:+8847263059"> +91-8847263059</a>
              </p>
            </div>
            <div className="flex items-center">
              Email :{" "}
              <p className=" text-lg text-slate-700 capitalize tracking-wide">
                {" "}
                choudharyrobin882@gmail.com
              </p>
            </div>
            <div className="flex gap-x-4 mt-4">
              <a href="#">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="h-8 w-8 text-slate-500 hover:text-black duration-300"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ahmad-bakhtiyar-b20487114/">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 448 512"
                  className="h-8 w-8 text-slate-500 hover:text-black duration-300"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </div>
          </div>

          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded w-full"
              // lg:h-[520px] h-[260px]
              style={{mixBlendMode:"color-burn"}}
              alt="hero"
              sizes="(max-width:768px) 100vw, (max-width:120px) 50vw, 33vw"
              loading="lazy"
              src="./images/hero-01dff752.svg"
              //src="./images/robin.jpeg"
              width={100}
              height={100}
            />
          </div> */}
        </div>
      </section>

      <section className="text-gray-600 body-font w-full" id="skills">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <small> MY SPECIALTY</small>
            <h2 className="sm:text-3xl text-2xl font-medium title-font mb-2 bg-gradient-to-r from-[#8490ff] to-[#62bdfc] bg-clip-text text-transparent">
              MY SKILLS
            </h2>
            <p className=" lg:text-center w-full leading-relaxed text-gray-500">
              As a front-end developer, I excel in crafting dynamic and
              responsive web experiences. My skills encompass a range of
              technologies including HTML, Bootstrap, Tailwind CSS, React.js,
              and jQuery. I specialize in translating creative concepts into
              engaging and interactive interfaces. With expertise in modern
              front-end frameworks and libraries, I am passionate about building
              intuitive and user-friendly applications that bring ideas to life
              on the web.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/2 p-4">
              <div className="progress-wrap">
                <h3>HTML</h3>
                <ProgressBar
                  completed={85}
                  bgColor="linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="progress-wrap">
                <h3>CSS</h3>
                <ProgressBar
                  bgColor="linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)"
                  completed={80}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <div className="progress-wrap">
                <h3>Bootstrap</h3>
                <ProgressBar
                  bgColor="linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)"
                  completed={70}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="progress-wrap">
                <h3>TailwindCss</h3>
                <ProgressBar
                  bgColor="linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)"
                  completed={70}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="progress-wrap">
                <h3>Reactjs</h3>
                <ProgressBar
                  bgColor="linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)"
                  completed={75}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="progress-wrap">
                <h3>Nextjs</h3>
                <ProgressBar
                  bgColor="linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)"
                  completed={60}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="progress-wrap">
                <h3>Jquery</h3>
                <ProgressBar
                  bgColor="linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)"
                  completed={60}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="progress-wrap">
                <h3>Javascript</h3>
                <ProgressBar
                  bgColor="linear-gradient(0deg, #8490ff 0%, #62bdfc 100%)"
                  completed={60}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font" id="experience">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-center items-center sm:text-3xl text-2xl  font-medium title-font mb-2 bg-gradient-to-r from-[#8490ff] to-[#62bdfc] bg-clip-text text-transparent">
            EXPERIENCE WORK EXPERIENCE
          </h2>
          <div className="flex flex-wrap w-full">
            <div className="w-full md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-custom-gradient inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font  text-gray-900 mb-1 tracking-wider">
                    Full Stack Developer
                  </h2>
                  <small className="text-sm">2022-Present</small>
                  <p className="leading-relaxed">
                    Full Stack Developer with 2 years of experience in the IT
                    sector is a versatile professional capable of contributing
                    to all stages of the software development life cycle, from
                    conceptualization and design to implementation, testing, and
                    maintenance of web applications. They play a crucial role in
                    driving innovation and delivering high-quality software
                    solutions that meet business objectives.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-custom-gradient inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font  text-gray-900 mb-1 tracking-wider">
                    Front End Developer at Lovely Professional University (LPU)
                  </h2>
                  <small className="text-sm">2022-Present</small>
                  <p className="leading-relaxed">
                    Front End Developer at Lovely Professional University (LPU),
                    you play a key role in designing and implementing
                    user-facing features for web applications and platforms.
                    Leveraging your expertise in front-end technologies and
                    design principles, you contribute to creating engaging and
                    responsive digital experiences for students, faculty, and
                    stakeholders.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-custom-gradient inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx={12} cy={5} r={3} />
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font  text-gray-900 mb-1 tracking-wider">
                    Creative Designer
                  </h2>
                  <small className="text-sm">2022-2022 Nov</small>
                  <p className="leading-relaxed">
                    Creative Designer, you are instrumental in conceptualizing
                    and producing visually captivating designs across various
                    mediums, ranging from digital platforms to print materials.
                    Your role involves translating ideas into compelling visual
                    representations that resonate with target audiences and
                    convey brand messages effectively.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-custom-gradient inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font  text-gray-900 mb-1 tracking-wider">
                    WEB Designer Internship at webcooks
                  </h2>
                  <small className="text-sm">2021</small>
                  <p className="leading-relaxed">
                    As a Web Designer Intern at Webcooks, you will work closely
                    with our experienced design team to bring concepts to life
                    and contribute to the development of engaging and responsive
                    websites. This internship offers valuable insights into the
                    design process, from initial ideation to final
                    implementation. <br/>
                   <strong> Key Responsibilities: </strong>
                    <br/>
                    <ul>
                      <li> Collaborate with the design team to create wireframes, prototypes, and visual designs.</li>
                    </ul>
               <li>Assist in front-end development tasks using HTML, CSS, and JavaScript.</li>
               <li>Optimize web assets for performance and responsiveness.</li>
               <li>Contribute to brainstorming sessions and offer creative ideas for web projects.</li>
               <li>Support the design team in maintaining and updating existing websites.</li>
            
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-custom-gradient inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font  text-gray-900 mb-1 tracking-wider">
                    FINISH
                  </h2>
                  <p className="leading-relaxed">
                    Pitchfork ugh tattooed scenester echo park gastropub
                    whatever cold-pressed retro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="text-gray-600 body-font w-full bg-[#f9f9ff]"
        id="education"
      >
        <div className="container px-5 py-24 mx-auto">
          <h2 className="text-center sm:text-3xl text-2xl font-medium title-font mb-2 bg-gradient-to-r from-[#8490ff] to-[#62bdfc] bg-clip-text text-transparent">
            EDUCATION
          </h2>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <Accordion className="w-full">
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Master OF COMPUTER APPLICATION
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Master of Computer Application (MCA) at Lovely Professional
                    University (LPU) in Punjab, India, is a comprehensive
                    program designed to equip students with advanced knowledge
                    and skills in the field of computer science and
                    applications.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    BACHELOR OF COMPUTER APPLICATION
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The BCA program at Guru Nanak Dev University emphasizes core
                    concepts of computer programming, software development, web
                    technologies, database management, and computer networks.
                    Students engage in practical learning experiences, including
                    hands-on projects, workshops, and internships, to develop
                    technical skills and problem-solving abilities.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    High School Secondary Education
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    High School Secondary Education from DAV (Dayanand Anglo
                    Vedic) schools in Punjab, India, represents a crucial phase
                    in a student s academic journey, providing a strong
                    educational foundation and holistic development. DAV schools
                    are renowned for their commitment to academic excellence and
                    character-building. The High School Secondary Education
                    curriculum at DAV emphasizes a well-rounded education,
                    encompassing subjects such as mathematics, science, social
                    studies, languages, and more. Students are encouraged to
                    participate in extracurricular activities, sports, and
                    community service to foster personal growth and leadership
                    skills.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font" id="about">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              width={100}
              height={100}
              className="object-cover object-center rounded w-full h-auto"
              alt="hero"
              src="./images/about-03f57d6e.svg"
              sizes="(max-width:768px) 100vw, (max-width:120px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h6>ABOUT US</h6>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium bg-gradient-to-r from-[#8490ff] to-[#62bdfc] bg-clip-text text-transparent">
              WHO AM I?
            </h1>
            <p>
              I m Robin Singh Choudhary, a dedicated front-end developer
              passionate about creating engaging and user-friendly web
              experiences. I specialize in crafting intuitive interfaces using
              HTML, CSS (including frameworks like Bootstrap and Tailwind CSS),
              and JavaScript libraries such as React.js and jQuery. With a keen
              eye for design and a focus on interactivity, I transform ideas
              into functional and visually appealing websites. My goal is to
              leverage technology to enhance user interactions and deliver
              impactful digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-[#f9f9ff]" id="project">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                RECENT WORK
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              have not heard of them man bun deep jianbing selfies heirloom
              prism food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                  width={100}
                  height={100}
                  sizes="(max-width:768px) 100vw, (max-width:120px) 50vw, 33vw"
                  loading="lazy"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/721x401"
                  alt="content"
                  width={100}
                  height={100}
                  sizes="(max-width:768px) 100vw, (max-width:120px) 50vw, 33vw"
                  loading="lazy"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/722x402"
                  alt="content"
                  width={100}
                  height={100}
                  sizes="(max-width:768px) 100vw, (max-width:120px) 50vw, 33vw"
                  loading="lazy"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/723x403"
                  alt="content"
                  width={200}
                  height={200}
                  sizes="(max-width:768px) 100vw, (max-width:120px) 50vw, 33vw"
                  loading="lazy"
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MianPage;
