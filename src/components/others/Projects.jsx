import React from "react";
import ScrollFloat from "../Bits/TextAnimations/ScrollFloat/ScrollFloat";
import FlowingMenu from "../Bits/Components/FlowingMenu/FlowingMenu";

const Projects = () => {
  const demoItems = [
    {
      link: "#",
      text: "Hello",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      link: "#",
      text: "Sonoma",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      link: "#",
      text: "Monterey",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      link: "#",
      text: "Sequoia",
      image: "https://picsum.photos/600/400?random=4",
    },
  ];
  return (
    <>
      <ScrollFloat
        scrollContainerRef={null}
        containerClassName=""
        textClassName=""
        charClassName="mx-2"
      >
        Projects
      </ScrollFloat>

      <div className="h-[900px] mt-10">
        <FlowingMenu items={demoItems} />
      </div>
    </>
  );
};

export default Projects;
