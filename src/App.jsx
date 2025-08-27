import Projects from "./components/others/Projects";
import Contact from "./components/others/Contact";
import Hobbies from "./components/others/Hobbies";
import ScrollSVG from "./components/others/ScrollSVG";
import Threads from "./components/Bits/Background/Threads/Threads";
import MagnetLines from "./components/Bits/Animations/MagnetLines/MagnetLines";
import CurvedLoop from "./components/Bits/TextAnimations/CurvedLoop/CurvedLoop";
import SvgString from "./components/others/SvgString";

const App = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="page1 h-screen relative flex flex-col">
        <div className="absolute top-2 w-full">
          <CurvedLoop
            marqueeText="Be ✦ Creative ✦"
            speed={5}
            curveAmount={100}
            direction="right"
            interactive={true}
            className=""
          />
        </div>
      </div>

      {/* <Hobbies /> */}

      <div className="relative flex flex-col">
        <div className="h-[20%] absolute top-0 w-[100%]">
          <Threads amplitude={2} distance={0.3} enableMouseInteraction={true} />
        </div>
        <Projects />
      </div>

      <div className="relative flex flex-col">
        <div className="h-[20%] absolute top-0 w-[100%]">
          <MagnetLines
            className="absolute top-0 scale-220 bg-transparent"
            rows={3}
            columns={5}
            containerSize="50vmin"
            lineColor="#BBF527"
            lineWidth="0.3vmin"
            lineHeight="9vmin"
            baseAngle={0}
            style={{ margin: "10rem auto" }}
          />
        </div>
        <Contact />
      </div>
    </>
  );
};

export default App;
