import React from 'react';
import ShowCase from '../../components/showCase';

const works = [
  {
    id: 1,
    title: 'Victor Azmoon (Tolo TV)',
    description: `A custom quiz platform designed for TOLO TV, built using .NET Core and ReactJS. It includes:
- Dynamic quiz creation by admins with categories, questions, and answers
- Real-time team or solo participation with scoring and time limits
- Live control panel for moderators to start/stop quizzes, view results, and enforce rules
- Clean, interactive UI designed for television viewers and participants`,
    img: '/portfolio/images/azmoon.png',
    link: 'https://www.youtube.com/watch?v=kUrJ_Ppjj3s',
  },
  {
    id: 2,
    title: 'Akram Zada Official Website',
    description: `A responsive, bilingual personal brand website developed with ASP.NET Core MVC. Features:
- Full support for both Dari and English languages
- Fully responsive design across mobile, tablet, and desktop
- SEO optimized, fast-loading, and lightweight
- Elegant UI/UX tailored for public figures or content creators
- Clean, interactive UI designed 
`,

    img: '/portfolio/images/azi.jpg',
    link: '/',
  },
  {
    id: 3,
    title: 'Accounting System for Small Enterprises',
    description: `A full-featured accounting system built with ASP.NET Core and SQL Server. Targeted at small manufacturers and traders. Key features:
- Double-entry accounting system with journal entries, ledgers, and financial statements
- Product stock management with support for multiple depots and cost groups
- Role-based permissions, multi-user support, and data security
- Custom reports generation: trial balance, income statement, cash flow, and balance sheet`,
    img: '/portfolio/images/app.webp',
    link: '/',
  },
  {
    id: 4,
    title: 'Web Applications & Business Sites',
    description: `A collection of real-world applications developed using ASP.NET Core, including:
- Hospital Management System: patient tracking, appointments, medical records
- E-commerce platforms with user authentication, shopping cart, and payment gateway integration
- Business websites optimized for speed, SEO, and scalability
All solutions follow best practices in clean architecture, modularity, and maintainability.`,
    img: '/portfolio/images/app.webp',
    link: '/',
  },
];

const Portfolio = () => {
  return (
    <div className="bg-white dark:bg-gray-900 m-5 mt-10 rounded-[18px] p-8 shadow-xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold font-robotoslab text-gray-900 dark:text-white mb-3">
          Portfolio
        </h1>
        <div className="w-40 h-[4px] bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-300 dark:to-pink-300 rounded-full" />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {works.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
          >
            <ShowCase
              title={item.title}
              description={item.description}
              link={item.link}
              url={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
