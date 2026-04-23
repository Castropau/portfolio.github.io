// 'use client';

// import { useEffect, useState } from 'react';
// import {
//   BarChart3,
//   FileText,
//   MessageCircle,
//   Mail,
//   ShoppingCart,
//   Users,
//   Settings,
//   LogOut,
//   FileTextIcon,
//   Zap,
// } from 'lucide-react';

// const MAIN_MENU = [
//   { icon: BarChart3, label: 'Home', id: 'home' },
// ];

// const APPS_MENU = [
//   { icon: FileText, label: 'About', id: 'about'},
//   { icon: MessageCircle, label: 'Skills', id: 'skills' },
//   { icon: Mail, label: 'Resume', id: 'resume' },
//   { icon: ShoppingCart, label: 'Projects', id: 'projects' },
//   { icon: Users, label: 'Contacts', id: 'contacts' },
//   { icon: FileTextIcon, label: 'Certificates', id: 'certificates' },
// ];

// // const OTHER_MENU = [
// //   { icon: Zap, label: 'Pages', href: '#' },
// // ];

// export default function Sidebar() {
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//   const handleScroll = () => {
//   const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contacts', 'certificates'];
  
//   // 1. Check if user is at the bottom of the page
//   const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;

//   if (isAtBottom) {
//     setActiveSection('certificates');
//     return;
//   }

//   // 2. Otherwise use your existing logic
//   for (const section of sections) {
//     const element = document.getElementById(section);
//     if (element) {
//       const rect = element.getBoundingClientRect();
//       if (rect.top <= 150 && rect.bottom > 150) {
//         setActiveSection(section);
//         return;
//       }
//     }
//   }
// };

//     // Listen on the window scroll
//     window.addEventListener('scroll', handleScroll, true);
    
//     // Initial check
//     handleScroll();
    
//     return () => window.removeEventListener('scroll', handleScroll, true);
//   }, []);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };


//   const renderMenu = (items: any[]) => (
//     <div className="space-y-1">
//       {items.map((item, idx) => (
//         <button
//           key={idx}
//           onClick={() => scrollToSection(item.id)}
//           className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
//             activeSection === item.id
//               ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-medium'
//               : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'
//           }`}
//         >
//           <div className="flex items-center gap-3">
//             <item.icon className="w-5 h-5" />
//             <span className="text-sm">{item.label}</span>
//           </div>
//           {item.badge && (
//             <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-800 px-2 py-1 rounded-full">
//               {item.badge}
//             </span>
//           )}
//         </button>
//       ))}
//     </div>
//   );

//   return (
//     <div className="w-64 bg-white dark:bg-slate-900 shadow-sm border-r border-gray-200 dark:border-slate-700 flex flex-col h-screen transition-colors">
//       {/* Logo */}
//      <div className="p-6 border-b border-gray-200 dark:border-slate-700">
//   <div className="flex items-center gap-3">
//     <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
//       <span className="text-white font-bold">P</span>
//     </div>
//     <span className="text-gray-900 dark:text-white font-medium">
//       Profile
//     </span>
//   </div>
// </div>

//       {/* Menu */}
//       <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
//         {/* Main */}
//         <div>
//           <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-2 mb-3">Main</p>
//           {renderMenu(MAIN_MENU)}
//         </div>

//         {/* Apps */}
//         <div>
//           <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-2 mb-3">Apps</p>
//           {renderMenu(APPS_MENU)}
//         </div>

//         {/* Other */}
//         {/* <div>
//           <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-2 mb-3">Other</p>
//           {renderMenu(OTHER_MENU)}
//         </div> */}
//       </nav>

//       {/* Footer */}
//       {/* <div className="border-t border-gray-200 dark:border-slate-700 p-4 space-y-2">
//         <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 text-sm text-gray-700 dark:text-gray-300 transition-colors">
//           <Settings className="w-5 h-5" />
//           <span>Settings</span>
//         </button>
//         <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-950 text-sm text-red-600 dark:text-red-400 transition-colors">
//           <LogOut className="w-5 h-5" />
//           <span>Logout</span>
//         </button>
//       </div> */}
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import {
  BarChart3,
  FileText,
  MessageCircle,
  Mail,
  ShoppingCart,
  Users,
  FileTextIcon,
  Home,
  User,
  Award,
  Code2,
  Folder,
} from 'lucide-react';

// Custom SVG components para sa Brand Icons (dahil wala na sa Lucide)
const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const MAIN_MENU = [{ icon: Home, label: 'Home', id: 'home' }];

const APPS_MENU = [
//  { icon: Home, label: 'Home', id: 'home' },
  { icon: User, label: 'About', id: 'about' },
  { icon: Code2, label: 'Skills', id: 'skills' },
  { icon: FileText, label: 'Resume', id: 'resume' },
  { icon: Folder, label: 'Projects', id: 'projects' },
  { icon: Mail, label: 'Contacts', id: 'contacts' },
  { icon: Award, label: 'Certificates', id: 'certificates' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'resume', 'contacts', 'certificates'];
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (isAtBottom) { setActiveSection('certificates'); return; }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            setActiveSection(section);
            return;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, true);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  };

  return (
    <div className="w-64 bg-white dark:bg-slate-900 shadow-sm border-r border-gray-200 dark:border-slate-700 flex flex-col h-screen transition-colors">
      
      {/* Profile Section */}
      <div className="p-8 border-b border-gray-200 dark:border-slate-700 flex flex-col items-center text-center">
        <img 
          src="/assets/img/paulo.jpg" 
          alt="Paulo Castro" 
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 dark:border-slate-800 shadow-md"
        />
        <h1 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">Paulo Castro</h1>

        {/* Social Icons gamit ang SVGs */}
     {/* Social Icons Section */}
<div className="flex gap-2 mt-4 justify-center">
  {[
    { icon: <TwitterIcon size={16} />, href: "https://twitter.com/SYV_LaVie", label: "Twitter" },
    { icon: <FacebookIcon size={16} />, href: "https://www.facebook.com/hunteeeeer", label: "Facebook" },
    { icon: <InstagramIcon size={16} />, href: "https://www.instagram.com/syv_lavie/", label: "Instagram" },
    { icon: <LinkedinIcon size={16} />, href: "https://www.linkedin.com/in/paulo-castro-12ab1826a/", label: "LinkedIn" },
    { icon: <Mail size={16} />, href: "mailto:castro.paulo5.00@gmail.com", label: "Gmail" }
  ].map((social, idx) => (
    // <a
    //   key={idx}
    //   href={social.href}
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   title={social.label}
    //   className="group relative p-2.5 bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 rounded-full 
    //              transition-all duration-300 ease-in-out
    //              dark:hover:bg-blue-600 hover:text-white 
    //              hover:bg-blue-600 hover:text-white 
    //              hover:scale-125 hover:-translate-y-1.5 
    //              hover:rotate-[8deg]
    //              hover:shadow-lg hover:shadow-blue-400/50 dark:hover:shadow-blue-900/40"
    // >
    //   {social.icon}
      
    //   <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded 
    //                    opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
    //     {social.label}
    //   </span>
    // </a>
    <a
  key={idx}
  href={social.href}
  target="_blank"
  rel="noopener noreferrer"
  title={social.label}
  className="group relative p-2.5 rounded-full
             bg-gray-100 dark:bg-slate-800
             text-gray-600 dark:text-gray-400
             transition-all duration-300 ease-out
             dark:hover:bg-blue-600 hover:bg-blue-600
             hover:bg-blue-600 hover:text-white
             hover:scale-110 hover:-translate-y-1
             
             hover:shadow-md hover:shadow-blue-500/30
             focus:outline-none focus:ring-2 focus:ring-blue-500/50"
>
  {social.icon}

  {/* Tooltip */}
  <span className="absolute -top-9 left-1/2 -translate-x-1/2
                   whitespace-nowrap
                   bg-gray-900 text-white text-xs
                   px-2 py-1 rounded-md
                   opacity-0 translate-y-1
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-200
                   pointer-events-none">
    {social.label}
  </span>
</a>
  ))}
</div>
      </div>

      {/* Menu Section */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <div>
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-2 mb-3">Main</p>
          {MAIN_MENU.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeSection === item.id ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'}`}>
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase px-2 mb-3">Navigation</p>
          {APPS_MENU.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeSection === item.id ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'}`}>
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}