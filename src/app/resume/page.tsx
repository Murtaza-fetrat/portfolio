import React from 'react';
import {FaGoogleScholar, FaWandMagicSparkles} from 'react-icons/fa6';
import {IoBriefcaseOutline} from 'react-icons/io5';
import DetailCard from '../../components/detailCard';
import {RiNextjsFill} from 'react-icons/ri';
import {VscVscodeInsiders} from 'react-icons/vsc';
import {GrReactjs} from 'react-icons/gr';
import {BsDatabase} from 'react-icons/bs';
import {TbBrandCSharp} from 'react-icons/tb';
import {BiLogoPostgresql} from 'react-icons/bi';
import {DiGithub} from 'react-icons/di';
import {
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiGit,
  SiPython,
} from 'react-icons/si';
import KnowledgeCard from '../../components/knowledgeCard';
function Resume() {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 m-5 mt-10 rounded-[18px] items-start p-5 ">
      <div className="flex flex-row  m-4 mt-10 items-center ">
        <h1 className="font-bold text-3xl font-robotoslab dark:text-white">
          Resume
        </h1>
        <div className="bg-gradient-to-r to-pink-500 from-rose-500 dark:to-pink-300 dark:from-rose-300 w-[10rem] h-[0.2rem] rounded-lg ml-6" />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full flex flex-col lg:flex-row lg:items-start lg:p-4 lg:m-2">
          <div className="flex flex-col w-full">
            {/* Experience Header */}
            <div className="flex justify-center items-center m-4 mt-5 mb-7 lg:mt-0">
              <IoBriefcaseOutline className="text-3xl text-rose-500" />
              <p className="ml-3 text-2xl font-poppins font-semibold dark:text-gray-200">
                Experience
              </p>
            </div>

            {/* Experience Cards */}
            <div className="grid md:grid-cols-2 gap-6 lg:px-6">
              <DetailCard
                classes="bg-rose-50 dark:bg-gray-700 border-l-4 border-rose-400 p-4 rounded-xl shadow-sm"
                header="Dec 2024 – Present"
                title="Freelance Web Developer"
                description="Led custom web development projects, collaborated with UI/UX designers, optimized performance, and delivered scalable, user-friendly solutions tailored to client needs."
              />
              <DetailCard
                classes="bg-sky-100 dark:bg-gray-700 border-l-4 border-sky-400 p-4 rounded-xl shadow-sm"
                header="May 2023 – Dec 2024"
                title="System Designer & Analyst | Fara Rayaneh"
                description="Designed and managed relational databases, built responsive and secure web applications, and provided long-term support and maintenance for production systems."
              />
              <DetailCard
                classes="bg-sky-50 dark:bg-gray-700 border-l-4 border-sky-300 p-4 rounded-xl shadow-sm"
                header="Aug 2021 – Jan 2023"
                title="Web Developer | Hosh Zareen"
                description="Worked on business websites and portals, wrote maintainable code, and ensured high-quality output through testing and UX validation."
              />
              <DetailCard
                classes="bg-rose-50 dark:bg-gray-700 border-l-4 border-rose-300 p-4 rounded-xl shadow-sm"
                header="Dec 2020 – Aug 2021"
                title="IT Engineer | Indira Gandhi Institute of Child Health"
                description="Tested, debugged, and deployed internal web systems; managed data entry workflows and improved efficiency across IT operations."
              />
              <DetailCard
                classes="bg-sky-50 dark:bg-gray-700 border-l-4 border-sky-300 p-4 rounded-xl shadow-sm"
                header="Jan 2016 – Dec 2017"
                title="IT Technician | Jahanbazar"
                description="Diagnosed and resolved technical issues, maintained hardware and software infrastructure, and provided user support in a high-demand environment."
              />
            </div>

            {/* Education Header */}
            <div className="flex justify-center items-center m-4 mt-10 mb-7">
              <FaGoogleScholar className="text-3xl text-rose-500" />
              <p className="ml-3 text-2xl font-poppins font-semibold dark:text-gray-200">
                Education
              </p>
            </div>

            {/* Education Cards */}
            <div className="grid md:grid-cols-2 gap-6 lg:px-6">
              <DetailCard
                classes="bg-rose-50 dark:bg-gray-700 border-l-4 border-rose-400 p-4 rounded-xl shadow-sm"
                header="Mar 2014 – Dec 2018"
                title="Bachelor of Computer Science"
                description="Kabul Polytechnic University, Kabul, Afghanistan"
              />
              <DetailCard
                classes="bg-sky-100 dark:bg-gray-700 border-l-4 border-sky-400 p-4 rounded-xl shadow-sm"
                header="2012"
                title="High School Graduate"
                description="Abdul Rahim Shahid High School, Kabul, Afghanistan"
              />
            </div>
          </div>
        </div>

        <hr className="h-px self-center w-[90%] bg-rose-300 border-0 mb-10" />
        <div className="w-full flex flex-col items-center lg:flex-row lg:items-start lg:mt-5  mb-10">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex justify-center items-center m-4 mb-7 mt-6 lg:mt-5">
              <FaWandMagicSparkles className="text-3xl text-red-400" />
              <p className="ml-3 text-2xl font-poppins font-medium dark:text-gray-400">
                Knowledge and Expertise
              </p>
            </div>
            <div className="m-3 ml-5 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5  w-[90%] justify-around ">
              <div className="flex flex-col">
                <KnowledgeCard
                  name=".NET"
                  icon={
                    <VscVscodeInsiders className="text-purple-600 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Nextjs"
                  icon={
                    <RiNextjsFill className="text-white-600 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="React"
                  icon={
                    <GrReactjs className="text-blue-400 text-3xl lg:text-xl" />
                  }
                />
              </div>
              <div className="flex flex-col ml-2">
                <KnowledgeCard
                  name="JavaScript"
                  icon={
                    <SiJavascript className="text-yellow-300 text-3xl lg:text-xl" />
                  }
                />

                <KnowledgeCard
                  name="TypeScript"
                  icon={
                    <SiTypescript className="text-sky-700 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Jquery"
                  icon={
                    <SiJquery className="text-red-500 text-3xl lg:text-xl" />
                  }
                />
              </div>
              <div className="flex flex-col ml-2">
                <KnowledgeCard
                  name="Tailwind"
                  icon={
                    <SiTailwindcss className="text-green-500 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Bootstrap"
                  icon={
                    <SiBootstrap className="text-dark-600 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Sass"
                  icon={<SiSass className="text-red-500 text-3xl lg:text-xl" />}
                />
              </div>

              <div className="flex flex-col ml-2">
                <KnowledgeCard
                  name="Git"
                  icon={<SiGit className="text-red-500 text-3xl lg:text-xl" />}
                />
                <KnowledgeCard
                  name="Sql Server"
                  icon={
                    <BsDatabase className="text-black-400 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="PostgreSQL"
                  icon={
                    <BiLogoPostgresql className="text-blue-500 text-3xl lg:text-xl" />
                  }
                />
              </div>
              <div className="flex flex-col ml-2">
                <KnowledgeCard
                  name="C#"
                  icon={
                    <TbBrandCSharp className="text-purple-600 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Github"
                  icon={
                    <DiGithub className="text-black-400 text-3xl lg:text-xl" />
                  }
                />
                <KnowledgeCard
                  name="Python"
                  icon={
                    <SiPython className="text-yellow-400 text-3xl lg:text-xl" />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
