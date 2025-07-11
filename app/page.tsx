"use client";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { TextAnimate } from "@/components/magicui/text-animate";
import { HyperText } from "@/components/magicui/hyper-text";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Ripple } from "@/components/magicui/ripple";
import { Sun,Moon, Home, Settings, Search,Github, Linkedin, Mail, Phone, FileText,MessageCircleMore, Info, Code, Folder, MessageCircle} from "lucide-react";
import { Pointer } from "@/components/magicui/pointer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { File } from "lucide-react";
import { WarpBackground } from "@/components/magicui/warp-background";
import { Marquee } from "@/components/magicui/marquee";
import { MagicCard } from "@/components/magicui/magic-card";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { useState,useEffect } from "react";

export default function Main() {

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth"});
  };
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { icon: <Home size={25} />, label: "Home", id: "home" },
    { icon: <Info size={25} />, label: "About Me", id: "about" },
    { icon: <Code size={25} />, label: "Tech Stack", id: "tech" },
    { icon: <Folder size={25} />, label: "Projects", id: "projects" },
    { icon: <MessageCircle size={25} />, label: "Contact Me", id: "contact" }
  ];

  const socialItems = [
    { icon: <Github size={25} />, label: "GitHub", url: "https://github.com/Dhxnushh" },
    { icon: <Linkedin size={25} />, label: "LinkedIn", url: "https://www.linkedin.com/in/dhanush-s-04868128b/" },
    
  ];
  return (
    <>
      <ScrollProgress className="top-[77px] z-50"/>
      <Pointer>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" className="fill-black" />
          <circle cx="12" cy="12" r="5" className="fill-white" />
        </svg>
      </Pointer>

      {/* Top Navigation */}
      <header className="fixed rounded-b-4xl left-1/2 z-50 justify-between -translate-x-1/2 p-2 w-full border-none backdrop-blur-md border border-black/20  flex items-center gap-3">
      <div className="flex flex-row justify-around items-center">
      {[...navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => scrollTo(item.id)}
          className="group flex flex-col items-center justify-center p-2  border-black rounded-2xl  hover:text-black transition duration-300 ease-in-out"
        >
          {item.icon}
          <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
            {item.label}
          </span>
        </button>
      ))]}
      </div>
      <div className="flex flex-row justify-around items-center">
      {[...socialItems.map((item) => (
        <a
          key={item.label}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col right-0 items-center justify-center p-2  border-black rounded-full  hover:text-black transition duration-300 ease-in-out"
        >
          {item.icon}
          <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
            {item.label}
          </span>
        </a>
        
      ))]}
      <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group flex flex-col right-0 items-center justify-center p-2  border-black rounded-full  hover:text-black transition duration-300 ease-in-out"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      <span className="text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
            Theme
          </span>
    </button>
      </div>
      
      
      <Meteors/>
    </header>

      {/* Hero Section */}
      <main id="home" className="flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <HyperText className="z-10 font-black text-5xl opacity-100">
          Dhxnush
        </HyperText>

        <div className="mt-6 w-[90%] md:w-[60%] text-center">
          <TextAnimate duration={3} className="z-50 font-black">
            I’m Dhanush, a full-stack web developer crafting modern, responsive
            websites and apps with Next.js and Tailwind CSS.
          </TextAnimate>
        </div>

        <RetroGrid
          cellSize={90}
          angle={70}
          opacity={1}
          className=""
          lightLineColor="black"
          darkLineColor="black"
        />
      </main>

      {/* About Section */}
      <section id="about" className="relative min-h-screen w-full flex flex-col overflow-hidden border text-black">
        {/* Background Layer */}
        

        {/* About Content */}
        <div className="z-10 flex-col w-full justify-between mt-0 top-0">
          <VelocityScroll className="font-bebas text-4xl font-black mt-0 top-0">
            About me⠀
          </VelocityScroll>

          <div className="font-orbitron mx-auto max-w-4xl text-lg font-medium leading-relaxed mt-[7%]">
            <TextAnimate duration={3} className="text-black font-extrabold">
              I'm Dhanush, a passionate full-stack web developer with a strong
              focus on building modern, fast, and responsive websites and
              applications. I specialize in working with technologies like
              Next.js, Tailwind CSS, Node.js, and MongoDB to create clean,
              scalable, and user-friendly digital experiences.
              

              Whether it's a landing page, an eCommerce platform, or a
              full-stack web app, I enjoy turning ideas into real-world
              solutions with code. I’m always learning and exploring new tools
              to improve my workflow and deliver better results.
             
              When I’m not coding, I love diving into new tech trends, building
              side projects, and refining my craft.
            </TextAnimate>
            <div className="absolute inset-0 -z-20 pointer-events-none">
          <Particles quantity={300} color="#000000" className="w-full h-[100vh]" />
          <Ripple className="w-full" />
        </div>
          </div>
          
        </div>
      </section>
      <section id="tech" className=" relative min-h-screen w-full flex  overflow-hidden border text-black">
      <div className="z-10 flex-col w-full justify-between">
      <VelocityScroll className="font-bebas text-4xl font-black mt-0 top-0">
            Tech Stacks⠀
          </VelocityScroll>
        <div className="relative flex justify-center items-center overflow-hidden h-[500px] w-full">
          <OrbitingCircles>
              <File />
              <Settings />
              <File />
          </OrbitingCircles>
          <OrbitingCircles radius={100} reverse>
              <File />
              <Settings />
              <File />
              <Search />
          </OrbitingCircles>
        </div>
      </div>
      
        <DotPattern/>
      </section>
      <WarpBackground>
      <section id="projects" className=" relative min-h-screen w-full flex  overflow-hidden border text-black">
      <div className="z-10 flex-col w-full justify-between">
          <VelocityScroll className="text-4xl font-black mt-0 top-0">
            Projects⠀
          </VelocityScroll>
          <div className="w-full py-16 bg-transparent text-black">
      {/* Marquee Row 1 */}
      <Marquee className="z-30 mb-8 bg-transparent">
        {[...Array(4)].map((_, i) => (
          <MagicCard key={`row1-${i}`} className="mx-4 border-white">
            <div className="w-[300px] h-[360px] bg-black rounded-3xl shadow-lg text-white p-4 flex flex-col justify-between">
              {/* Replace below img with your Image component */}
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-background">
                {/* Example placeholder — replace src */}
                {/* <Image src="/your-image.jpg" alt="example" fill className="object-cover" /> */}
                <img
                  src="https://via.placeholder.com/300x160"
                  alt="placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Title Goes Here</h3>
              <p className="text-sm text-gray-300">
                Short description or tag line. Looks neat in minimal style.
              </p>
              <span className="mt-2 text-xs text-white/60">Hover me</span>
            </div>
          </MagicCard>
        ))}
      </Marquee>

      {/* Marquee Row 2 - Reversed */}
      <Marquee className="z-30 border-none" reverse>
        {[...Array(4)].map((_, i) => (
          <MagicCard key={`row2-${i}`} className="mx-4 border-none">
            <div className="w-[300px] h-[360px] bg-black rounded-3xl shadow-lg text-white p-4 flex flex-col justify-between">
              {/* Replace below img with your Image component */}
              <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 bg-background">
                {/* Example placeholder — replace src */}
                {/* <Image src="/your-image.jpg" alt="example" fill className="object-cover" /> */}
                <img
                  src="https://via.placeholder.com/300x160"
                  alt="placeholder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Title Goes Here</h3>
              <p className="text-sm text-gray-300">
                Short description or tag line. Looks neat in minimal style.
              </p>
              <span className="mt-2 text-xs text-white/60">Hover me</span>
            </div>
          </MagicCard>
        ))}
      </Marquee>
    </div>
        </div>
      
      </section>
      </WarpBackground>
      <section id="contact" className=" relative min-h-screen w-full flex  overflow-hidden border text-black">
      <div className="z-10 flex-col w-full justify-between">
      <VelocityScroll className="text-4xl font-black mt-0 top-0">
            Contact Me⠀
          </VelocityScroll>
          <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6"></h2>
        <TextAnimate className="font-black p-3">
          Feel free to connect through any of the platforms below. I'm open to work, collaboration, or even a quick chat!
        </TextAnimate>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 md:grid-cols-3 gap-6 justify-items-center">
          {/* GitHub */}
          <MagicCard className="w-full max-w-[260px] p-6 rounded-2xl bg-background/10 backdrop-blur-md">
            <a
              href="https://github.com/Dhxnushh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <Github className="w-8 h-8 mb-3" />
              <span className="font-semibold">GitHub</span>
              <p className="text-sm text-gray-300 mt-1">/Dhxnushh</p>
            </a>
          </MagicCard>

          {/* LinkedIn */}
          <MagicCard className="w-full max-w-[260px] p-6 rounded-2xl bg-background/10 backdrop-blur-md">
            <a
              href="https://www.linkedin.com/in/dhanush-s-04868128b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <Linkedin className="w-8 h-8 mb-3" />
              <span className="font-semibold">LinkedIn</span>
              <p className="text-sm text-gray-300 mt-1">/Dhanush</p>
            </a>
          </MagicCard>

          {/* Gmail */}
          <MagicCard className="w-full max-w-[260px] p-6 rounded-2xl bg-background/10 backdrop-blur-md">
            <a href="mailto:dhanush2675@gmail.com" className="flex flex-col items-center">
              <Mail className="w-8 h-8 mb-3" />
              <span className="font-semibold">Email</span>
              <p className="text-sm text-gray-300 mt-1">dhanush2675@gmail.com</p>
            </a>
          </MagicCard>

          {/* Phone */}
          <MagicCard className="w-full max-w-[260px] p-6 rounded-2xl bg-background/10 backdrop-blur-md">
            <a href="tel:+918637624541" className="flex flex-col items-center">
              <Phone className="w-8 h-8 mb-3" />
              <span className="font-semibold">Phone</span>
              <p className="text-sm text-gray-300 mt-1">+91 8637624541</p>
            </a>
          </MagicCard>

          {/* Resume */}
          <MagicCard className="w-full max-w-[260px] p-6 rounded-2xl bg-background/10 backdrop-blur-md">
            <a href="/resume.pdf" target="_blank" className="flex flex-col items-center">
              <FileText className="w-8 h-8 mb-3" />
              <span className="font-semibold">Resume</span>
              <p className="text-sm text-gray-300 mt-1">View PDF</p>
            </a>
          </MagicCard>

          {/* Discord */}
          <MagicCard className="w-full max-w-[260px] p-6 rounded-2xl bg-background/10 backdrop-blur-md">
            <a
              href="https://discord.com/users/yourdiscordid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <MessageCircleMore className="w-8 h-8 mb-3" />
              <span className="font-semibold">Discord</span>
              <p className="text-sm text-gray-300 mt-1">@yourtag</p>
            </a>
          </MagicCard>
        </div>
      </div>
          </div>
          <Particles quantity={300} color="#000000" className="z-20"/>
          <DotPattern/>
      </section>
      <footer className="w-full bg-black text-white py-6 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Dhanush S. All rights reserved.</p>

        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yourmail@gmail.com"
            className="text-gray-400 hover:text-white transition"
          >
            Gmail
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
      
    </>
  );
}
