// // 'use client';

// // import Sidebar from './components/Sidebar';
// // import Header from './components/Header';
// // import { Mail, Phone, MapPin, GitBranch, ExternalLink, Share2 } from 'lucide-react';

// // const portfolioData = {
// //   hero: {
// //     title: 'Full Stack Developer',
// //     subtitle: 'Creating modern web experiences with React, Next.js, and Tailwind CSS',
// //   },
// //   about: {
// //     title: 'About Me',
// //     content: 'I\'m a passionate full-stack developer with expertise in building scalable web applications. With over 5 years of experience in modern web technologies, I focus on creating intuitive, performant user interfaces and robust backend solutions.',
// //     info: [
// //       { label: 'Location', value: 'Metro Manila, Philippines' },
// //       { label: 'Experience', value: '5+ Years' },
// //       { label: 'Status', value: 'Available for Freelance' },
// //     ],
// //   },
// //   skills: [
// //     { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
// //     { category: 'Backend', skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL'] },
// //     { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Firebase'] },
// //   ],
// //   projects: [
// //     { name: 'E-Commerce Platform', description: 'Full-stack e-commerce solution with Next.js and Stripe', tech: ['Next.js', 'Stripe', 'PostgreSQL'] },
// //     { name: 'Project Management App', description: 'Real-time collaboration tool built with React and Firebase', tech: ['React', 'Firebase', 'Tailwind'] },
// //     { name: 'Blog Platform', description: 'Headless CMS with Next.js and dynamic content management', tech: ['Next.js', 'Sanity', 'React'] },
// //   ],
// // };

// // export default function Home() {
// //   return (
// //     <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-50 transition-colors">
// //       {/* Sidebar */}
// //       <div className="fixed left-0 top-0 h-screen w-64 z-50">
// //         <Sidebar />
// //       </div>

// //       {/* Main Content */}
// //       <div className="ml-64 min-h-screen overflow-y-auto scroll-smooth">
// //         {/* Header */}
// //         <Header />

// //         {/* Hero Section */}
// //         <section id="home" className="min-h-screen flex items-center px-6 pt-20 pb-12 md:px-12">
// //           <div className="max-w-4xl">
// //             <div className="space-y-6">
// //               <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-950 rounded-full">
// //                 <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">Welcome to my portfolio</span>
// //               </div>
// //               <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
// //                 Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Name</span>
// //               </h1>
// //               <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl">
// //                 {portfolioData.hero.subtitle}
// //               </p>
// //               <div className="flex gap-4 pt-8">
// //                 <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
// //                   View My Work
// //                 </button>
// //                 <button onClick={() => document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors font-medium">
// //                   Get in Touch
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* About Section */}
// //         <section id="about" className="py-60 px-6 md:px-12 bg-gray-50 dark:bg-slate-900 transition-colors">
// //           <div className="max-w-4xl mx-auto">
// //             <div className="space-y-12">
// //               <div>
// //                 <h2 className="text-4xl font-bold mb-4">About Me</h2>
// //                 <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
// //                   {portfolioData.about.content}
// //                 </p>
// //                 <div className="grid md:grid-cols-3 gap-6">
// //                   {portfolioData.about.info.map((item, idx) => (
// //                     <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
// //                       <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{item.label}</p>
// //                       <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">{item.value}</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Skills Section */}
// //         <section id="skills" 
// //         className="py-50 px-6 md:px-12 bg-gray-50 dark:bg-slate-900 transition-colors">
// //           <div className="max-w-4xl mx-auto">
// //             <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
// //             <div className="grid md:grid-cols-3 gap-8">
// //               {portfolioData.skills.map((skillGroup, idx) => (
// //                 <div key={idx}>
// //                   <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{skillGroup.category}</h3>
// //                   <div className="space-y-2">
// //                     {skillGroup.skills.map((skill, i) => (
// //                       <div key={i} className="flex items-center gap-2 p-3 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors">
// //                         <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
// //                         <span>{skill}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Projects Section */}
   

// //         {/* Resume Section */}
// //         <section id="resume" className="py-20 px-6 md:px-12">
// //           <div className="max-w-4xl mx-auto">
// //             <h2 className="text-4xl font-bold mb-12">Education & Experience</h2>
// //             <div className="space-y-12">
// //               <div>
// //                 <h3 className="text-2xl font-bold mb-6">Experience</h3>
// //                 <div className="space-y-6">
// //                   {[1, 2, 3].map((item) => (
// //                     <div key={item} className="border-l-4 border-blue-600 pl-6 py-4">
// //                       <h4 className="text-lg font-semibold">Senior Full Stack Developer</h4>
// //                       <p className="text-gray-600 dark:text-gray-400">Tech Company • 2023 - Present</p>
// //                       <p className="text-gray-700 dark:text-gray-300 mt-2">Leading development of scalable web applications using modern stack</p>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //              <section id="projects"
// //          className="py-50 px-6 md:px-12 bg-gray-50 dark:bg-slate-900 transition-colors">
// //           <div className="max-w-4xl mx-auto">
// //             <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
// //             <div className="grid md:grid-cols-2 gap-8">
// //               {portfolioData.projects.map((project, idx) => (
// //                 <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow">
// //                   <h3 className="text-xl font-bold mb-2">{project.name}</h3>
// //                   <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
// //                   <div className="flex flex-wrap gap-2">
// //                     {project.tech.map((tech, i) => (
// //                       <span key={i} className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full">
// //                         {tech}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Contacts Section - Lakihan natin ang padding dito */}
// //         <section id="contacts" 
// //         className="py-60 px-6 md:px-12 bg-gray-50 dark:bg-slate-900 transition-colors">
// //           <div className="max-w-4xl mx-auto">
// //             <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
// //             <div className="grid md:grid-cols-2 gap-12">
// //               <div className="space-y-6">
// //                 <p className="text-xl text-gray-600 dark:text-gray-400">Have a project in mind? Let's collaborate!</p>
// //                 <div className="space-y-4">
// //                   <a href="mailto:contact@example.com" className="flex items-center gap-4 text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
// //                     <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm"><Mail className="w-6 h-6" /></div>
// //                     contact@example.com
// //                   </a>
// //                   <a href="tel:+1234567890" className="flex items-center gap-4 text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
// //                     <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm"><Phone className="w-6 h-6" /></div>
// //                     +1 (234) 567-890
// //                   </a>
// //                   <div className="flex items-center gap-4 text-lg text-gray-900 dark:text-white">
// //                     <div className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-sm"><MapPin className="w-6 h-6" /></div>
// //                     Metro Manila, Philippines
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="flex flex-col justify-center gap-6">
// //                 <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Social Profiles</p>
// //                 <div className="flex gap-4">
// //                   <a href="#" className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all">
// //                     <GitBranch className="w-8 h-8" />
// //                   </a>
// //                   <a href="#" className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all">
// //                     <ExternalLink className="w-8 h-8" />
// //                   </a>
// //                   <a href="#" className="p-5 bg-white dark:bg-slate-800 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl transition-all">
// //                     <Share2 className="w-8 h-8" />
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Certificates Section */}
// //         <section id="certificates" 
// //          className="py-50 px-6 md:px-12 bg-gray-50 dark:bg-slate-900 transition-colors">
// //           <div className="max-w-4xl mx-auto">
// //             <h2 className="text-4xl font-bold mb-12">Certificates & Achievements</h2>
// //             <div className="grid md:grid-cols-2 gap-6">
// //               {['Web Development', 'Full Stack JavaScript', 'React Advanced', 'Next.js Mastery'].map((cert, idx) => (
// //                 <div key={idx} className="bg-gradient-to-br from-blue-50 dark:from-blue-950 to-purple-50 dark:to-purple-950 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
// //                   <h3 className="font-semibold text-lg mb-2">{cert}</h3>
// //                   <p className="text-gray-600 dark:text-gray-400 text-sm">Completed on 2024</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* Footer */}
// //         {/* <footer className="bg-gray-900 dark:bg-slate-950 text-gray-100 py-8 px-6 text-center">
// //           <p>&copy; 2024 Your Name. All rights reserved. Built with Next.js & Tailwind CSS.</p>
// //         </footer> */}

// //         {/* SPACER: Importante ito para gumana ang Active BG sa huling section */}
// //         <div className="h-[50vh] bg-transparent pointer-events-none" />
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';

// import { useEffect, useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Header from './components/Header';
// import { Mail, Phone, MapPin, GitBranch, ExternalLink, Share2, Database, Globe, Smartphone, Code2, MessageCircle, X } from 'lucide-react';
// import { SiExpress, SiFlutter, SiMysql, SiNextdotjs, SiPostgresql, SiTailwindcss } from 'react-icons/si';
// import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa6';
// import MessageWindow from './components/chatWindow';
// import ChatInput from './components/chatInput';
// import { ChatHistory, Message } from './types';
// import { BsRobot } from 'react-icons/bs';

// const portfolioData = {
//   hero: {
//     name: 'Paulo Castro',
//     roles: ["Web Developer", "Software Engineer", "Programmer", "IT Student"],
//     images: [
//       '/assets/img/ZOFGK.jpg',
//       '/assets/img/1st.jpg',
//       '/assets/img/2nd.jpg',
//       '/assets/img/3rd.jpg'
//     ],
//   },
//   about: {
//     title: 'About Me',
//     content: "Hey, I'm Paulo Castro, an IT student with a passion for web development. I tinker with HTML, CSS, JavaScript, PHP, Bootstrap, Python, and Django to create cool stuff on the web. When I'm not coding, you'll catch me in the gaming world or binge watching movies.",
//     info: [
//       { label: 'Birthday', value: 'October 24, 2001' },
//       { label: 'City', value: 'Quezon City, Philippines' },
//       { label: 'Age', value: '22' },
//       { label: 'Degree', value: 'BS in Information Technology' },
//       { label: 'Work', value: 'Available' },
//     ],
//   },
//  skills: [
//   { name: 'HTML', icon: FaHtml5, color: '#f16529' },
//   { name: 'CSS', icon: FaCss3Alt, color: '#2965f1' },
//   { name: 'JavaScript', icon: FaJs, color: '#f0db4f' },
//   { name: 'PHP', icon: FaPhp, color: '#4f5b93' },
//   { name: 'Python', icon: FaPython, color: '#306998' },
//   { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
//   { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
//   { name: 'Bootstrap', icon: FaBootstrap, color: '#7952b3' },
//   { name: 'React', icon: FaReact, color: '#61dbfb' },
//   { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
//   { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8', isTailwind: true },
//   { name: 'Node.js', icon: FaNodeJs, color: '#3C873A' },
//   { name: 'Express', icon: SiExpress, color: '#444444' },
//     { name: 'MySQL', icon: SiMysql, color: '#444444' },

// ],
//   projects: [
//     { name: 'Skylar Versatile', type: 'Web', description: 'Tech: HTML, Bootstrap, CSS, PHP, MySQL', link: 'https://skylarversatile.000webhostapp.com/', img: '/assets/img/portfolio/project.png' },
//     { name: 'Activities App', type: 'Web', description: 'Next.js with Supabase integration', link: 'https://activities-inky.vercel.app/', img: '/assets/img/portfolio/activities124.png' },
//     { name: 'ERP System', type: 'Web', description: 'ERP System for Engineer using Next.js (TypeScript)', link: '#', img: '/assets/img/portfolio/erp2.png' },
   
//     { name: 'Allies Arena', type: 'App', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/allies_arena.jpg' },
//       { name: 'Cash Registry', type: 'Web', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/cash.png' },
//     { name: 'POS', type: 'App', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/POS.png' },
//     { name: 'Activities App', type: 'Web', description: 'Next.js with Supabase integration', link: 'https://activities-inky.vercel.app/', img: '/assets/img/portfolio/activities124.png' },
//     { name: 'Customer Service', type: 'Web', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/service.png' },
//     { name: 'TS Lines', type: 'Web', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/tsl.png' },
//     { name: 'CRO', type: 'Web', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/cro.png' },

//   ],

//   resume: {
//     education: [
//       { school: 'Quezon City University', date: '2020 - 2024', desc: '1st Year - 4th Year College' },
//       { school: 'Batasan Hills National High School', date: '2014 - 2018', desc: 'High School Graduate' },
//     ],
//     experience: [
//       { company: 'Alcon', role: 'Front-end Developer', date: '2025', tasks: ['Build ERP System using Next.js', 'Build TS Lines landing page', 'Build CRO landing page'] },
//       { company: 'Meta Core Systems Inc.', role: 'OJT', date: '2023 - 2024', tasks: ['Studying Python Django', 'Studying PostgreSQL', 'Studying Flutter'] },
//     ]
//   }
// };

// export default function Home() {
//   const [bgIndex, setBgIndex] = useState(0);
//   const [history, setHistory] = useState<ChatHistory>([]);
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [isTyping, setIsTyping] = useState(false);
//   // Hero Background Slider Logic
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setBgIndex((prev) => (prev + 1) % portfolioData.hero.images.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);
//   const handleSend = async (message: string) => {
//   const newUserMessage: Message = {
//     role: "user",
//     parts: [{ text: message }],
//   };
//   const updatedHistory = [...history, newUserMessage];
//   setHistory(updatedHistory);
//   setIsTyping(true);

//   try {
//    const response = await fetch("/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         userMessage: message,
//         history: updatedHistory,
//         settings: {} // DAGDAGAN ITO: Kahit empty object lang para hindi mag-undefined
//       }),
//     });

//     // CHECK IF RESPONSE IS OK
//     if (!response.ok) {
//       const errorText = await response.text(); // Kunin ang HTML error message
//       console.error("Server Error Raw Response:", errorText);
//       throw new Error(`Server returned ${response.status}: ${response.statusText}`);
//     }

//     const data = await response.json();
    
//     if (data.error) {
//       console.error("AI Error:", data.error);
//       setIsTyping(false);
//       return;
//     }

//     const aiMessage: Message = {
//       role: "model",
//       parts: [{ text: data.response }],
//     };
//     setHistory([...updatedHistory, aiMessage]);
//   } catch (error) {
//     console.error("Request Failed:", error);
//     // Magpakita ng friendly message sa UI
//   } finally {
//     setIsTyping(false);
//   }
// };
//   return (
//     <>

// {isChatOpen && (
//   <div className="fixed bottom-24 right-4 z-50 flex flex-col w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden transition-all animate-in fade-in slide-in-from-bottom-4">
//     {/* Header */}
//     <div className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-sm">
//       <div className="flex items-center gap-2">
//         <BsRobot size={20} />
//         <h2 className="text-sm font-semibold">Assistant BOT</h2>
//       </div>
//       <button
//         className="p-1 hover:bg-blue-700 rounded-full transition-colors cursor-pointer"
//         onClick={() => setIsChatOpen(false)}
//       >
//         <X size={18} />
//       </button>
//     </div>

//     {/* Messages Area */}
//     <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-slate-900">
//       <MessageWindow history={history} isTyping={isTyping} />
//     </div>

//     {/* Input Area */}
//     <div className="p-2 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
//       <ChatInput onSend={handleSend} />
//     </div>
//   </div>
// )}

// {/* Floating Toggle Button */}
// {!isChatOpen && (
//   <div
//     className="fixed right-6 bottom-6 flex items-center gap-3 cursor-pointer z-50 group"
//     onClick={() => setIsChatOpen(true)}
//   >
//     <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg border border-gray-100 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//       <p className="text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
//         Assist to our chatbot!
//       </p>
//     </div>
//     <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 shadow-xl hover:bg-blue-700 hover:scale-110 transition-all duration-300">
//       <MessageCircle size={28} className="text-white" />
//     </div>
//   </div>
// )}
    
//     <div className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-50 transition-colors">
//       <div className="fixed left-0 top-0 h-screen w-64 z-50">
//         <Sidebar />
//       </div>

//       <div className="ml-64 min-h-screen overflow-y-auto scroll-smooth">
//         <Header />

//         {/* Hero Section with Background Slider */}
//         <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//           {portfolioData.hero.images.map((img, idx) => (
//             <div
//               key={idx}
//               className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${bgIndex === idx ? 'opacity-100' : 'opacity-0'}`}
//               style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${img})` }}
//             />
//           ))}
//           <div className="relative z-10 text-center text-white space-y-4">
//             <h1 className="text-6xl font-bold">{portfolioData.hero.name}</h1>
//             <p className="text-2xl font-light">I'm a <span className="font-semibold text-blue-400">Developer</span></p>
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about" className="py-60 px-6 md:px-12 bg-gray-50 dark:bg-slate-900 transition-colors">

//           {/* <div className="max-w-4xl mx-auto"> */}
//             <div className="max-w-4xl mx-auto">
            
            




//             <h2 className="text-4xl font-bold mb-8 border-b-4 border-blue-600 inline-block">About</h2>
//             <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
//               {portfolioData.about.content}
//             </p>
//             <div className="grid md:grid-cols-2 gap-4">
//               {portfolioData.about.info.map((item, idx) => (
//                 <div key={idx} className="flex gap-2">
//                   <span className="font-bold text-blue-600">›</span>
//                   <span className="font-bold">{item.label}:</span>
//                   <span>{item.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Skills Section - HTML Style Grid */}
//        <section id="skills" className="py-32 px-6 md:px-12 bg-gray-50 dark:bg-slate-800/50">
//   <div className="max-w-4xl mx-auto">
//     <h2 className="text-4xl font-bold mb-12">Skills</h2>

//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//       {portfolioData.skills.map((skill, idx) => {
//         const Icon = skill.icon;

//         return (
//           <div
//             key={idx}
//             className="group flex flex-col items-center p-6
//                        bg-white dark:bg-slate-900
//                        rounded-xl shadow-sm
//                        transition-all duration-300
//                        hover:-translate-y-2 hover:shadow-md"
//           >
//             <Icon
//               className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-110"
//               style={{ color: skill.color }}
//             />

//             <span className="font-semibold text-gray-800 dark:text-gray-200">
//               {skill.name}
//             </span>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </section>

//         {/* Resume Section */}
//         <section id="resume" className="py-32 px-6 md:px-12">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold mb-12">Resume</h2>
//             <div className="grid md:grid-cols-2 gap-10">
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Education</h3>
//                 {portfolioData.resume.education.map((edu, idx) => (
//                   <div key={idx} className="relative pl-6 pb-8 border-l-2 border-blue-600">
//                     <div className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full -left-[9px] top-0"></div>
//                     <h4 className="font-bold text-lg uppercase">{edu.school}</h4>
//                     <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-slate-800 text-sm mb-2">{edu.date}</span>
//                     <p className="italic">{edu.desc}</p>
//                   </div>
//                 ))}
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
//                 {portfolioData.resume.experience.map((exp, idx) => (
//                   <div key={idx} className="relative pl-6 pb-8 border-l-2 border-blue-600">
//                     <div className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full -left-[9px] top-0"></div>
//                     <h4 className="font-bold text-lg uppercase">{exp.role}</h4>
//                     <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-slate-800 text-sm mb-2">{exp.date}</span>
//                     <p className="font-semibold italic">{exp.company}</p>
//                     <ul className="list-disc ml-4 mt-2 text-sm space-y-1">
//                       {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//       <section id="projects" className="py-32 px-6 md:px-12 bg-gray-50 dark:bg-slate-900">
//   {/* Changed max-w-4xl to max-w-7xl for a much wider layout */}
//   <div className="max-w-7xl mx-auto"> 
//     <h2 className="text-4xl font-bold mb-12">Projects</h2>
    
//     {/* Grid setup: adjusted columns for the wider container */}
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {portfolioData.projects.map((proj, idx) => (
//         <div key={idx} className="group relative overflow-hidden rounded-lg shadow-lg">
//           {/* 
//               1. Removed h-64 
//               2. Added aspect-video (16:9 ratio) to make the image physically look "wide" 
//           */}
//           <img 
//             src={proj.img} 
//             alt={proj.name} 
//             className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500" 
//           />
          
//           <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4">
//             <h4 className="text-xl font-bold">{proj.name}</h4>
//             <p className="text-sm text-center mb-4">{proj.description}</p>
//             <div className="flex gap-4">
//               <a href={proj.link} target='_blank' rel="noreferrer" className="p-2 bg-white/20 rounded-full hover:bg-white/40">
//                 <ExternalLink size={20} />
//               </a>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//         {/* Contact Section */}
//         <section id="contacts" className="py-60 px-6 md:px-12 bg-white dark:bg-slate-900">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-4xl font-bold mb-12">Contact</h2>
//             <div className="grid md:grid-cols-2 gap-12 text-left">
//               <div className="space-y-8">
//                 <div className="flex items-center gap-4">
//                   <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-full text-blue-600"><Mail /></div>
//                   <div><h4 className="font-bold">Email:</h4><p>castro.paulo5.00@gmail.com</p></div>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <div className="p-4 bg-blue-50 dark:bg-slate-800 rounded-full text-blue-600"><Phone /></div>
//                   <div><h4 className="font-bold">Call:</h4><p>09810851408</p></div>
//                 </div>
//               </div>
//               <div className="flex justify-center items-center gap-6">
//                  {/* Social Icons logic same as HTML */}
//                  <a href="#" className="text-3xl hover:text-blue-600 transition-colors"><GitBranch /></a>
//                  <a href="#" className="text-3xl hover:text-blue-600 transition-colors"><Share2 /></a>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Certificates Section */}
//         <section id="certificates" className="py-32 px-6 md:px-12 bg-gray-50 dark:bg-slate-800/50">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-4xl font-bold mb-12">Certificates</h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {['Web Development', 'PHP', 'CSS', 'JavaScript'].map((cert, idx) => (
//                 <div key={idx} className="overflow-hidden rounded-lg border-2 border-transparent hover:border-blue-600 transition-colors shadow-lg">
//                    <div className="p-4 bg-white dark:bg-slate-900 font-bold">{cert} Certificate</div>
//                    <div className="h-48 bg-gray-200 animate-pulse"></div> {/* Replace with actual certificate img tag */}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <div className="h-[50vh] bg-transparent pointer-events-none" />
//       </div>
//     </div>
//     </>
//   );
// }
'use client';

import { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { 
  Mail, Phone, MapPin, GitBranch, ExternalLink, Share2, 
  Database, Globe, Smartphone, Code2, MessageCircle, X, 
  Eye, GraduationCap, Briefcase, Award, ChevronDown 
} from 'lucide-react';
import { SiExpress, SiFlutter, SiMysql, SiNextdotjs, SiPostgresql, SiTailwindcss } from 'react-icons/si';
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa6';
import MessageWindow from './components/chatWindow';
import ChatInput from './components/chatInput';
import { ChatHistory, Message } from './types';
import { BsRobot } from 'react-icons/bs';
import Typewriter from './components/type';

const portfolioData = {
  hero: {
    name: 'Paulo Castro',
    roles: ["Web Developer", "Software Engineer", "Programmer"],
    images: [
      '/assets/img/ZOFGK.jpg',
      '/assets/img/1st.jpg',
      '/assets/img/2nd.jpg',
      '/assets/img/3rd.jpg'
    ],
  },
  about: {
    title: 'About Me',
    content: "Hey, I'm Paulo Castro, an IT student with a passion for web development. I tinker with HTML, CSS, JavaScript, PHP, Bootstrap, Python, and Django to create cool stuff on the web. When I'm not coding, you'll catch me in the gaming world or binge watching movies.",
    info: [
      { label: 'Birthday', value: 'Oct 24, 2001' },
      { label: 'City', value: 'Quezon City, PH' },
      { label: 'Degree', value: 'BS in IT' },
      { label: 'Work', value: 'Available' },
    ],
  },
  skills: [
    { name: 'HTML', icon: FaHtml5, color: '#f16529' },
    { name: 'CSS', icon: FaCss3Alt, color: '#2965f1' },
    { name: 'JavaScript', icon: FaJs, color: '#f0db4f' },
    { name: 'PHP', icon: FaPhp, color: '#4f5b93' },
    { name: 'Python', icon: FaPython, color: '#306998' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#7952b3' },
    { name: 'React', icon: FaReact, color: '#61dbfb' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#38BDF8' },
    { name: 'Node.js', icon: FaNodeJs, color: '#3C873A' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  ],
  // projects: [
  //   { name: 'Skylar Versatile', type: 'Web', description: 'Tech: HTML, Bootstrap, CSS, PHP, MySQL', link: 'https://skylarversatile.000webhostapp.com/', img: '/assets/img/portfolio/project.png' },
  //   { name: 'Activities App', type: 'Web', description: 'Next.js with Supabase integration', link: 'https://activities-inky.vercel.app/', img: '/assets/img/portfolio/activities124.png' },
  //   { name: 'ERP System', type: 'Web', description: 'ERP System for Engineer using Next.js (TypeScript)', link: '#', img: '/assets/img/portfolio/erp2.png' },
   
  //   { name: 'Allies Arena', type: 'App', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/allies_arena.jpg' },
  //     { name: 'Cash Registry', type: 'Web', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/cash.png' },
  //   { name: 'POS', type: 'App', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/POS.png' },
  //   { name: 'Activities App', type: 'Web', description: 'Next.js with Supabase integration', link: 'https://activities-inky.vercel.app/', img: '/assets/img/portfolio/activities124.png' },
  //   { name: 'Customer Service', type: 'Web', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/service.png' },
  //   { name: 'TS Lines', type: 'Web', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/tsl.png' },
  //   { name: 'CRO', type: 'Web', description: 'Social app built with Flutter, PHP, MySQL', link: '#', img: '/assets/img/portfolio/cro.png' },

  // ],
  projects: [
  {
    name: 'Skylar Versatile',
    type: 'Web',
    description: 'Tech: HTML, Bootstrap, CSS, PHP, MySQL',
    link: 'https://skylarversatile.000webhostapp.com/',
    img: '/assets/img/portfolio/project.png'
  },
  {
    name: 'Activities App',
    type: 'Web',
    description: 'Next.js with Supabase integration',
    link: 'https://activities-inky.vercel.app/',
    img: '/assets/img/portfolio/activities124.png'
  },
  {
    name: 'ERP System',
    type: 'Web',
    description: 'ERP system for engineering workflow using Next.js (TypeScript)',
    link: '#',
    img: '/assets/img/portfolio/erp2.png'
  },
  {
    name: 'Allies Arena',
    type: 'App',
    description: 'Social networking app built with Flutter, PHP, and MySQL',
    link: '#',
    img: '/assets/img/portfolio/allies_arena.jpg'
  },
  {
    name: 'Cash Registry',
    type: 'Web',
    description: 'Cash management and registry system',
    link: '#',
    img: '/assets/img/portfolio/cash.png'
  },
  {
    name: 'POS System',
    type: 'Web',
    description: 'Point of Sale system for small businesses',
    link: '#',
    img: '/assets/img/portfolio/POS.png'
  },
  {
    name: 'Customer Service Portal',
    type: 'Web',
    description: 'Customer support',
    link: '#',
    img: '/assets/img/portfolio/service.png'
  },
  {
    name: 'TS Lines',
    type: 'Web',
    description: 'TS Lines landing page for transportation services',
    link: '#',
    img: '/assets/img/portfolio/tsl.png'
  },
  {
    name: 'CRO',
    type: 'Web',
    description: 'CRO introduction landing page',
    link: '#',
    img: '/assets/img/portfolio/cro.png'
  }
],
  resume: {
    education: [
      { school: 'Quezon City University', date: '2020 - 2024', desc: 'Bachelor of Science in Information Technology' },
      { school: 'Batasan Hills National High School', date: '2014 - 2018', desc: 'High School Graduate' },
    ],
    experience: [
      { company: 'Alcon', role: 'Front-end Developer', date: '2025', tasks: ['Build ERP System using Next.js', 'Build TS Lines landing page', 'Build CRO landing page'] },
      { company: 'Meta Core Systems Inc.', role: 'Intern (OJT)', date: '2023 - 2024', tasks: ['Full-stack development training', 'PostgreSQL database management', 'Flutter UI Development'] },
    ]
  },
   certificates: [
    { name: 'Web Development', img: '/assets/img/portfolio/Web Development_certificate.jpg' },
    { name: 'PHP Specialist', img: '/assets/img/portfolio/PHP_certificate.jpg' },
    { name: 'Modern CSS', img: '/assets/img/portfolio/CSS.jpg' },
    { name: 'JavaScript Algorithms', img: '/assets/img/portfolio/Introduction to JavaScript_certificate.jpg' },
  ]

};

export default function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const [history, setHistory] = useState<ChatHistory>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
const [filter, setFilter] = useState('All');
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % portfolioData.hero.images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSend = async (message: string) => {
    const newUserMessage: Message = { role: "user", parts: [{ text: message }] };
    const updatedHistory = [...history, newUserMessage];
    setHistory(updatedHistory);
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userMessage: message, history: updatedHistory, settings: {} }),
      });

      if (!response.ok) throw new Error("Server communication error");
      const data = await response.json();
      
      const aiMessage: Message = { role: "model", parts: [{ text: data.response || "I'm having trouble thinking right now." }] };
      setHistory([...updatedHistory, aiMessage]);
    } catch (error) {
      console.error("Request Failed:", error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 transition-colors selection:bg-blue-500 selection:text-white">
      
      {/* --- Lightbox Modal --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform">
            <X size={40} />
          </button>
          <img 
            src={selectedImg} 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-in zoom-in-95 duration-300" 
            alt="Preview" 
          />
        </div>
      )}

      {/* --- Sidebar & Layout --- */}
      <div className="fixed left-0 top-0 h-screen w-64 z-40 hidden lg:block">
        <Sidebar />
      </div>

      <main className="lg:ml-64 min-h-screen relative">
        <Header />

        {/* --- Hero Section --- */}
     <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Images Slider */}
          {portfolioData.hero.images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                bgIndex === idx ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${img})` }}
            />
          ))}

          {/* Content */}
          <div className="relative z-10 text-center text-white px-4">
            <div className="animate-in fade-in slide-in-from-top-4 duration-1000">
              {/* <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-blue-600 rounded-full shadow-lg shadow-blue-600/20">
                Available for hire
              </span> */}
              
              <h1 className="text-5xl md:text-8xl font-extrabold mb-6 tracking-tight drop-shadow-2xl">
                {portfolioData.hero.name}
              </h1>

              <p className="text-2xl md:text-3xl font-light text-slate-200 h-12">
                I'm a <Typewriter words={portfolioData.hero.roles} />
              </p>
            </div>

           
          </div>
        </section>

        <section id="about" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-6">About</h2>
              <div className="h-1.5 w-20 bg-blue-600 mb-6" />
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                {portfolioData.about.content}
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl">
              {portfolioData.about.info.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 border-b border-slate-200 dark:border-slate-700 pb-2">
                  <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">{item.label}</span>
                  <span className="text-lg font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-800/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
              <p className="text-slate-500">Technologies I use to bring ideas to life</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {portfolioData.skills.map((skill, idx) => (
                <div key={idx} className="group flex flex-col items-center p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-slate-100 dark:border-slate-800">
                  <skill.icon className="text-4xl mb-3 transition-transform group-hover:scale-110" style={{ color: skill.color }} />
                  <span className="text-sm font-bold uppercase tracking-tight">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Resume Section --- */}
        <section id="resume" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Resume</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="text-blue-600" size={32} />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              {portfolioData.resume.education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 pb-10 border-l-2 border-slate-200 dark:border-slate-700 last:pb-0">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 outline outline-4 outline-white dark:outline-slate-900" />
                  <h4 className="font-bold text-xl">{edu.school}</h4>
                  <div className="inline-block my-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold rounded">{edu.date}</div>
                  <p className="text-slate-600 dark:text-slate-400 italic">{edu.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-blue-600" size={32} />
                <h3 className="text-2xl font-bold">Experience</h3>
              </div>
              {portfolioData.resume.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 pb-10 border-l-2 border-slate-200 dark:border-slate-700 last:pb-0">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 outline outline-4 outline-white dark:outline-slate-900" />
                  <h4 className="font-bold text-xl">{exp.role}</h4>
                  <div className="inline-block my-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-bold rounded">{exp.date}</div>
                  <p className="font-bold text-slate-700 dark:text-slate-300 mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2 font-medium">
                        <span className="text-blue-600">•</span> {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
     {/* --- Projects Section --- */}
<section id="projects" className="py-24 px-6 md:px-12 bg-slate-900 text-white">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div>
        <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
        <div className="h-1.5 w-20 bg-blue-500" />
      </div>

      {/* Filter Buttons */}
      <div className="flex bg-slate-800 p-1.5 rounded-xl border border-slate-700">
        {['All', 'Web', 'App'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
              filter === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                : 'text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>

    {/* Project Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
      {portfolioData.projects
        .filter((proj) => filter === 'All' || proj.type === filter)
        .map((proj, idx) => (
          <div 
            key={`${filter}-${idx}`} // Key change triggers animation on filter
            className="group relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all animate-in fade-in zoom-in-95 duration-500"
          >
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={proj.img} 
                alt={proj.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              
              {/* Overlay with View and Link */}
              <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <button 
                  onClick={() => setSelectedImg(proj.img)}
                  className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                  title="View Image"
                >
                  <Eye size={24} />
                </button>
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-3 bg-white text-slate-900 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest px-2 py-1 bg-blue-400/10 rounded">
                  {proj.type}
                </span>
              </div>
              <h4 className="text-xl font-bold mb-2">{proj.name}</h4>
              <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                {proj.description}
              </p>
            </div>
          </div>
        ))}
    </div>

    {/* Empty State if no projects found (Optional) */}
    {portfolioData.projects.filter((proj) => filter === 'All' || proj.type === filter).length === 0 && (
      <div className="text-center py-20 text-slate-500 italic">
        No projects found in this category.
      </div>
    )}
  </div>
</section>

        {/* --- Contact Section --- */}
        <section id="contacts" className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="bg-blue-600 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
               <h2 className="text-4xl font-bold mb-6">Let's build something together</h2>
               <p className="text-blue-100 mb-10 text-lg">Currently available for freelance work and full-time positions.</p>
               <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                 <a href="mailto:castro.paulo5.00@gmail.com" className="flex items-center justify-center gap-3 bg-white text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                   <Mail size={20} /> Email Me
                 </a>
                 <div className="flex items-center justify-center gap-3 bg-blue-700 py-4 rounded-xl font-bold">
                   <Phone size={20} /> 09929122908
                 </div>
               </div>
               <div className="flex justify-center gap-8 mt-12">
                 <a href="#" className="hover:scale-125 transition-transform"><GitBranch size={28} /></a>
                 <a href="#" className="hover:scale-125 transition-transform"><Share2 size={28} /></a>
               </div>
             </div>
             {/* Decorative Background Circles */}
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50" />
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30" />
          </div>
        </section>
   {/* --- Certificates Section --- */}
<section id="certificates" className="py-24 px-6 md:px-12 bg-slate-50 dark:bg-slate-800/30">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col items-center text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Certifications</h2>
      <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-4" />
      <p className="text-slate-500 max-w-md">Official recognitions of my technical expertise and continuous learning.</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.certificates.map((cert, idx) => (
        <div 
          key={idx} 
          className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300"
        >
          {/* Certificate Image Container */}
          <div className="aspect-[4/3] overflow-hidden relative">
            <img 
              src={cert.img} 
              alt={cert.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
              <button 
                onClick={() => setSelectedImg(cert.img)}
                className="mb-3 p-4 bg-white text-blue-600 rounded-full hover:bg-slate-100 transition-colors shadow-xl"
                title="View Certificate"
              >
                <Eye size={28} />
              </button>
              <span className="text-sm font-bold uppercase tracking-widest">Click to Preview</span>
            </div>
          </div>

          {/* Certificate Info */}
          <div className="p-5 flex items-center justify-between">
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white">{cert.name}</h4>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Verified Achievement</p>
            </div>
            <Award className="text-blue-600/20 group-hover:text-blue-600 transition-colors" size={32} />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* <div className="h-[50vh] bg-transparent pointer-events-none" /> */}

        <footer className="py-12 text-center text-slate-500 text-sm border-t border-slate-100 dark:border-slate-800">
          © {new Date().getFullYear()} Paulo Castro. All rights reserved.
        </footer>
      </main>

      {/* --- Floating Chatbot --- */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex flex-col w-[350px] md:w-[400px] h-[550px] bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all animate-in slide-in-from-bottom-8">
          <div className="flex justify-between items-center p-5 bg-blue-600 text-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg"><BsRobot size={20} /></div>
              <div>
                <h2 className="text-sm font-bold">AI Assistant</h2>
                <span className="text-[10px] text-blue-100 uppercase tracking-widest font-bold">Online</span>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-900/50">
            <MessageWindow history={history} isTyping={isTyping} />
          </div>
          <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
            <ChatInput onSend={handleSend} />
          </div>
        </div>
      )}

      {!isChatOpen && (
        <div className="fixed right-8 bottom-8 flex items-center gap-4 cursor-pointer z-50 group" onClick={() => setIsChatOpen(true)}>
          <div className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-5 py-2 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 font-bold text-sm">
            Chat with me!
          </div>
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 shadow-xl group-hover:bg-blue-700 group-hover:rotate-12 transition-all duration-300">
            <MessageCircle size={32} className="text-white" />
          </div>
        </div>
      )}
    </div>
  );
}