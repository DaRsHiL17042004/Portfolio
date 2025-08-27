// SvgString.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";


const SvgString = () => {
  const stringRef = useRef(null);
  const pathRef = useRef(null);

  const initialPath = "M 10 100 Q 500 100 1890 100";

  useEffect(() => {
    const stringEl = stringRef.current;
    const pathEl = pathRef.current;

    const handleMouseMove = (e) => {
      const { left, top } = stringEl.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      const newPath = `M 10 100 Q ${x} ${y} 1890 100`;

      gsap.to(pathEl, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathEl, {
        attr: { d: initialPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)",
      });
    };

    stringEl.addEventListener("mousemove", handleMouseMove);
    stringEl.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      stringEl.removeEventListener("mousemove", handleMouseMove);
      stringEl.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div id="string" ref={stringRef} className=" bg-gray-100 p-2 w-full ">
      <motion.svg height="200" className=" bg-gray-500 w-full ">
        <path
          ref={pathRef}
          d="M 10 100 Q 500 100 1890 100"
          stroke="white"
          strokeWidth="4"
          fill="transparent"
        />
      </motion.svg>
    </motion.div>
  );
};

export default SvgString;
