import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CursorProvider, DualText } from './components/HonestMask';
import { Projects, Skills, Experience, Academics } from './components/ProjectSkills';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', backgroundColor: '#991b1b', color: 'white', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: 'bold' }}>Application Crashed</h1>
          <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: 'rgba(0,0,0,0.5)', padding: '20px', borderRadius: '8px' }}>
            {this.state.error?.stack || this.state.error?.toString()}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const Splash = ({ onComplete }) => {
  const scripts = [
    "Initializing AI modules...",
    "Loading Neural Engine...",
    "Compiling Portfolio...",
    "Syncing Dual Reality...",
    "Ready."
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px)",
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
      }}
      className="fixed inset-0 bg-[#0D0D0D] text-[#B7AB98] z-[10000] flex flex-col items-center justify-center p-8 font-mono overflow-hidden"
    >
      {/* Background Glitch Effect */}
      <motion.div 
        animate={{ 
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_#EB5E2811_0%,_transparent_70%)]"
      />

      <div className="w-full max-w-lg relative z-10">
        {scripts.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: i * 0.3,
              duration: 0.5,
              ease: "easeOut"
            }}
            className="text-[#555555] text-sm mb-1 flex items-center gap-3"
          >
            <span className="text-[#EB5E28] font-bold opacity-50">0{i + 1}</span>
            <span className="flex-1">{`> ${text}`}</span>
            {i === scripts.length - 1 && (
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="w-2 h-4 bg-[#EB5E28]"
              />
            )}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="mt-16 flex flex-col items-center gap-10 relative z-[200]"
      >
        <div className="relative w-40 h-40 flex items-center justify-center group">
          <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
            <circle cx="80" cy="80" r="76" stroke="currentColor" strokeWidth="1" fill="transparent" className="text-[#555555]/30" />
            <motion.circle
              cx="80" cy="80" r="76"
              stroke="currentColor" strokeWidth="3" fill="transparent"
              strokeDasharray="477"
              initial={{ strokeDashoffset: 477 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              className="text-[#EB5E28]"
            />
          </svg>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl font-black text-[#EB5E28] tracking-tighter">100</span>
            <span className="text-[10px] text-[#555555] tracking-[0.4em] uppercase mt-[-4px]">Percent</span>
          </motion.div>
        </div>

        <motion.div 
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8, type: "spring" }}
        >
          {/* Corner Brackets */}
          <motion.div 
            animate={isHovered ? { scale: 1.1, opacity: 1 } : { scale: 1, opacity: 0.5 }}
            className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-[#EB5E28] transition-all duration-300"
          />
          <motion.div 
            animate={isHovered ? { scale: 1.1, opacity: 1 } : { scale: 1, opacity: 0.5 }}
            className="absolute -top-4 -right-4 w-6 h-6 border-t-2 border-r-2 border-[#EB5E28] transition-all duration-300"
          />
          <motion.div 
            animate={isHovered ? { scale: 1.1, opacity: 1 } : { scale: 1, opacity: 0.5 }}
            className="absolute -bottom-4 -left-4 w-6 h-6 border-b-2 border-l-2 border-[#EB5E28] transition-all duration-300"
          />
          <motion.div 
            animate={isHovered ? { scale: 1.1, opacity: 1 } : { scale: 1, opacity: 0.5 }}
            className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-[#EB5E28] transition-all duration-300"
          />

          <motion.button
            onClick={onComplete}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(235, 94, 40, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-20 py-6 bg-transparent border border-[#EB5E28]/40 text-[#EB5E28] font-syne font-bold uppercase tracking-[0.5em] overflow-hidden group shadow-[0_0_20px_rgba(235,94,40,0.1)]"
          >
            {/* Background Fill */}
            <motion.div 
              initial={false}
              animate={isHovered ? { x: "0%" } : { x: "-100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="absolute inset-0 bg-[#EB5E28]"
            />

            {/* Top Scanning Edge */}
            <motion.div 
              animate={{ left: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-1/2 h-[1px] bg-white opacity-50 z-20"
            />

            {/* Scanning Bar inside button */}
            <motion.div 
              animate={{ left: ["-10%", "110%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[2px] bg-white/40 skew-x-12 z-20 pointer-events-none"
            />

            {/* Text Glitch Effect */}
             <span className="relative z-10 mix-blend-difference group-hover:text-white transition-colors duration-300 flex items-center gap-4">
                <span className="text-[10px] opacity-70 font-mono">SECURE_INIT:</span>
                <motion.span
                  animate={isHovered ? {
                    x: [0, -2, 2, -1, 0],
                    filter: ["none", "hue-rotate(90deg)", "none", "hue-rotate(-90deg)", "none"],
                  } : {}}
                  transition={{ repeat: Infinity, duration: 0.2 }}
                >
                  Enter
                </motion.span>
              </span>

            {/* Decorative dots */}
            <div className="absolute top-2 right-2 flex gap-1.5">
              <div className="w-1.5 h-1.5 bg-[#EB5E28] group-hover:bg-white rounded-full animate-pulse shadow-[0_0_5px_currentColor]" />
              <div className="w-1.5 h-1.5 bg-[#EB5E28] group-hover:bg-white rounded-full animate-pulse delay-150 shadow-[0_0_5px_currentColor]" />
              <div className="w-1.5 h-1.5 bg-[#EB5E28] group-hover:bg-white rounded-full animate-pulse delay-300 shadow-[0_0_5px_currentColor]" />
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#EB5E28]/10 group-hover:bg-white/20 transition-colors" />
          </motion.button>

          {/* Subtitle */}
          <motion.p 
            animate={isHovered ? { opacity: 1, y: 10 } : { opacity: 0, y: 0 }}
            className="absolute left-0 right-0 text-center text-[10px] text-[#EB5E28] tracking-[0.2em] uppercase font-mono mt-2 pointer-events-none"
          >
            Accessing Neural Network...
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Background Scanning Lines */}
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[2px] bg-[#EB5E2811] blur-[1px] pointer-events-none"
      />
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1.5 }}
        className="absolute inset-x-0 h-[1px] bg-[#EB5E2822] pointer-events-none"
      />

      {/* Scanning Line */}
      <motion.div 
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#EB5E2844] to-transparent pointer-events-none"
      />
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative w-full overflow-hidden shrink-0">
      <h1 className="font-syne text-[clamp(1.5rem,5vw,6rem)] font-black leading-[0.8] tracking-tighter text-center uppercase w-full">
        <DualText
          professional="SHISHIR KATAKAM"
          honest="STILL FIGURING IT OUT"
        />
      </h1>

      <div className="mt-8 md:mt-12 text-center w-full max-w-4xl px-4">
        <p className="text-[#555555] text-sm md:text-lg tracking-[0.2em] md:tracking-[0.4em] uppercase">
          <DualText
            professional="Building the Future with AI & Innovation"
            honest="Hating every line of code that doesn't work"
          />
        </p>
      </div>
    </section>
  );
};

const Navbar = () => {
  const links = ['HOME', 'WORK', 'SKILLS', 'CONTACT'];
  return (
    <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 md:gap-12 z-50 hidden md:flex">
      {links.map(link => (
        <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#555555] hover:text-[#EB5E28] transition-colors [writing-mode:vertical-rl]">
          {link}
        </a>
      ))}
    </nav>
  );
};

const Sidebar = () => {
  const links = [
    { name: 'GitHub', url: 'https://github.com/shishir-katakam' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shishir-katakam/' }
  ];
  return (
    <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-8 md:gap-12 z-50 hidden md:flex">
      {links.map(link => (
        <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#555555] hover:text-[#EB5E28] transition-colors [writing-mode:vertical-rl] rotate-180">
          {link.name}
        </a>
      ))}
    </div>
  );
};

function PortfolioContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <CursorProvider isLoaded={isLoaded}>
      <div className="bg-[#0D0D0D] text-[#B7AB98] min-h-screen font-mono w-full overflow-x-hidden">
        <AnimatePresence>
          {!isLoaded && <Splash onComplete={() => setIsLoaded(true)} />}
        </AnimatePresence>

        <main className={`w-full overflow-x-hidden transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Navbar />
          <Sidebar />
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Academics />

          <section id="contact" className="py-32 md:py-64 flex flex-col items-center justify-center px-4 text-center w-full">
            <h2 className="font-syne text-[clamp(1.5rem,5vw,6rem)] font-black text-outline hover:text-[#EB5E28] transition-all duration-700 uppercase px-4">
              <DualText professional="GET IN TOUCH" honest="50% CHANCE I REPLY" />
            </h2>
          </section>

          <footer className="p-8 text-center text-[8px] md:text-[10px] tracking-widest text-[#555555] uppercase pb-24 md:pb-8">
            © 2025 Shishir Katakam / Designed with Brutalism
          </footer>
        </main>
      </div>
    </CursorProvider>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <PortfolioContent />
    </ErrorBoundary>
  );
}

export default App;
