import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Stagger = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".box", {
        y: -100,
        opacity: 0,
        scale: 0.3,
        stagger: {
          each: 0.2,
          from: "center",
        },
      });
    },
    {
      scope: container,
    }
  );

  return (
    <div>
      <div
        ref={container}
        className="min-h-screen bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center p-8"
      >
        <div className="flex gap-8">
          <div className="box w-20 h-20 bg-red-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
            1
          </div>
          <div className="box w-20 h-20 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
            2
          </div>
          <div className="box w-20 h-20 bg-green-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
            3
          </div>
          <div className="box w-20 h-20 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stagger;
