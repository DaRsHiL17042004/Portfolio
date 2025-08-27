import { useEffect, useRef } from "react";
import { textanimation } from "../../js_animation/Rolling";

const ScrollSVG = () => {
  const textRef = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    textanimation(textRef, body);
  }, []);
  return (
    <>
      <div 
      ref={body}
      className="page">
        <h6
          ref={textRef}
          className="font-sans text-[40vw] text-cyan-300 whitespace-nowrap  "
        >
          EXPERIANCE THE FRONTEND
        </h6>
      </div>
    </>
  );
};

export default ScrollSVG;
