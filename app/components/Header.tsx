// // 'use client';

// // import { Bell, Search, User, Moon, Sun } from 'lucide-react';
// // import { useTheme } from '@/app/providers/ThemeProvider';
// // import { useEffect, useState } from 'react';

// // export default function Header() {
// //   const [mounted, setMounted] = useState(false);
// //   const { theme, toggleTheme } = useTheme();

// //   useEffect(() => {
// //     setMounted(true);
// //   }, []);

// //   return (
// //     <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between transition-colors">
// //       <div className="flex items-center gap-4 flex-1">
// //         <div className="relative flex-1 max-w-md">
// //           <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
// //           <input
// //             type="text"
// //             placeholder="Search here..."
// //             className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
// //           />
// //         </div>
// //       </div>

// //       <div className="flex items-center gap-6">
// //         {mounted && (
// //           <button
// //             onClick={toggleTheme}
// //             className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
// //             aria-label="Toggle dark mode"
// //           >
// //             {theme === 'light' ? (
// //               <Moon className="w-5 h-5" />
// //             ) : (
// //               <Sun className="w-5 h-5" />
// //             )}
// //           </button>
// //         )}

// //         <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
// //           <Bell className="w-5 h-5" />
// //           <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
// //         </button>
        
// //         <div className="flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-slate-700">
// //           <img
// //             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
// //             alt="User"
// //             className="w-8 h-8 rounded-full"
// //           />
// //           <div className="text-sm">
// //             <p className="font-medium text-gray-900 dark:text-gray-100">Mathew Anderson</p>
// //             <p className="text-gray-500 dark:text-gray-400">Admin</p>
// //           </div>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { Bell, Moon, Search, Sun } from 'lucide-react';
// import { useTheme } from '../providers/ThemeProvider';
// import { ThemeToggleButton } from './themebutton';


// interface Action {
//   label:    string;
//   variant:  'primary' | 'secondary';
//   href:     string;
//   onClick?: () => void;
// }

// interface TopbarProps {
//   title:    string;
//   subtitle?: string;
//   actions?: Action[];
// }

// export default function Header() {
//   const [isDark, setIsDark] = useState(true);
//   const [mounted, setMounted] = useState(false);
//   const { theme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);
//   useEffect(() => {
//     const savedTheme = window.localStorage.getItem('acctai-theme');
//     const nextIsDark = savedTheme !== 'light';
//     setIsDark(nextIsDark);

//     document.documentElement.classList.toggle('dark', nextIsDark);
//     document.documentElement.classList.toggle('light', !nextIsDark);
//   }, []);

//   const toggleTheme = () => {
//     const nextIsDark = !isDark;
//     setIsDark(nextIsDark);
//     window.localStorage.setItem('acctai-theme', nextIsDark ? 'dark' : 'light');
//     document.documentElement.classList.toggle('dark', nextIsDark);
//     document.documentElement.classList.toggle('light', !nextIsDark);
//   };

//  return (
//     <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between transition-colors">
//       <div className="flex items-center gap-4 flex-1">
//         <div className="relative flex-1 max-w-md">
//           <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search here..."
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
//           />
//         </div>
//       </div>

//       <div className="flex items-center gap-6">
//        <ThemeToggleButton />

//         <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
//           <Bell className="w-5 h-5" />
//           <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//         </button>
        
//         <div className="flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-slate-700">
//           <img
//             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
//             alt="User"
//             className="w-8 h-8 rounded-full"
//           />
//           <div className="text-sm">
//             <p className="font-medium text-gray-900 dark:text-gray-100">Mathew Anderson</p>
//             <p className="text-gray-500 dark:text-gray-400">Admin</p>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bell, Moon, Search, Sun } from 'lucide-react';
import { useTheme } from '../providers/ThemeProvider';
import { ThemeToggleButton } from './themebutton';

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('acctai-theme');
    const nextIsDark = savedTheme !== 'light';
    setIsDark(nextIsDark);

    document.documentElement.classList.toggle('dark', nextIsDark);
    document.documentElement.classList.toggle('light', !nextIsDark);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-64 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between transition-colors">
      <div className="flex items-center gap-4 flex-1">
        {/* <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div> */}
      </div>

      <div className="flex items-center gap-6">
        <ThemeToggleButton />

        {/* <button className="relative p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button> */}
        
        {/* <div className="flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-slate-700">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <p className="font-medium text-gray-900 dark:text-gray-100">Mathew Anderson</p>
            <p className="text-gray-500 dark:text-gray-400">Admin</p>
          </div>
        </div> */}
      </div>
    </header>
  );
}