import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const GsapTo = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".box1", {
        x: 700,
        duration: 2,
        repeat: -1,
        yoyo: true,
        rotation: 360,
        ease: "power1.inOut",
        // ease: "elastic"
        // ease: "bounce",
        // ease: "bounce.out",
        scale: 1.5,
      });
    },
    { container }
  );

  return (
    <div
      ref={container}
      className="min-h-dvh bg-linear-to-br from-blue-400 to-purple-500 p-8 "
    >
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Gsap Animations
          </h1>
          <p className="text-white text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            odit quod veniam quis saepe. Necessitatibus obcaecati alias, omnis
            rem ducimus distinctio! Provident blanditiis magni quibusdam facilis
            ducimus libero, sunt optio.
          </p>
        </div>

        {/* {animation 1} */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Move To The Right 👉
          </h2>
          <div className="bg-gray-100 rounded-xl p-6 h-32 relative">
            <div className="box1 w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              👉
            </div>
          </div>
          <div className="mt-4 bg-blue-500 p-4 rounded-lg">
            <code className="text-sm text-gray-700">
              x:200 ◀️ move 200px to the right 2
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GsapTo;
