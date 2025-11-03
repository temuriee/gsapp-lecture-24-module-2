import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

const GsapFrom = () => {
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const container = useRef();

  const timeline = useRef();

  const tl5 = useRef();

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    tl5.current.timeScale(speed);
  };

  const handlePlay = () => tl5.current.play();

  const handlePause = () => tl5.current.pause();

  const handleReverse = () => tl5.current.reverse();

  const handleReset = () => tl5.current.restart();

  // EXAMPLE 3: Interactive Controllable Timeline
  useGSAP(
    () => {
      tl5.current = gsap.timeline({ paused: true, yoyo: true, repeat: -1 });

      tl5.current
        .to(".ctrl-box1", {
          x: 100,
          rotation: 180,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(
          ".ctrl-box2",
          { x: 100, scale: 1.3, duration: 1, ease: "back.out(1.7)" },
          "-=0.5"
        )
        .to(
          ".ctrl-box3",
          { x: 100, duration: 1, ease: "elastic.out(1, 0.3)" },
          "-=0.5"
        )
        .to(".ctrl-box1, .ctrl-box2, .ctrl-box3", {
          backgroundColor: "#22c55e",
          duration: 0.5,
        });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      timeline.current = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
        yoyo: true,
        ease: "power1.easeOutx",
      });

      timeline.current
        .to(".seq-box1", {
          x: 200,
          duration: 1,
          backgroundColor: "#ef4444",
        })
        .to(
          ".seq-box2",
          {
            x: 200,
            backgroundColor: "#f59e0b",
            duration: 4,
          },
          "<"
        )
        .to(
          ".seq-box3",
          {
            x: 200,
            backgroundColor: "#10b981",
            duration: 1,
          },
          "-=2"
        )
        .to(".seq-box4", {
          x: 200,
          backgroundColor: "#10b981",
          duration: 1,
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
        {/* {animation 2} */}
        {/* Example 1: Sequential */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-2">
            1️⃣ Sequential Timeline
          </h2>
          <p className="text-purple-200 mb-6">
            Animations play <strong>one after another</strong> (default
            behavior)
          </p>
          <div className="bg-slate-800/50 rounded-2xl p-6 h-42 space-y-3">
            <div className="seq-box1 w-20 h-6 bg-blue-500 rounded-lg"></div>
            <div className="seq-box2 w-20 h-6 bg-blue-500 rounded-lg"></div>
            <div className="seq-box3 w-20 h-6 bg-blue-500 rounded-lg"></div>
            <div className="seq-box4 w-20 h-6 bg-blue-500 rounded-lg"></div>
          </div>
          <div className="mt-4 bg-slate-800/30 p-4 rounded-xl">
            <code className="text-sm text-green-300 block">
              tl.to(".box1", {"{ x: 200 }"})
              <br />
              &nbsp;&nbsp;.to(".box2", {"{ x: 200 }"}) // Starts AFTER box1
              <br />
              &nbsp;&nbsp;.to(".box3", {"{ x: 200 }"}); // Starts AFTER box2
            </code>
          </div>
        </div>

        {/* {animation 3} */}
        <div className="bg-linear-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-2 border-green-400/50">
          <h2 className="text-3xl font-bold text-white mb-2">
            5️⃣ Interactive Timeline Control
          </h2>
          <p className="text-purple-200 mb-6">
            Control the timeline with buttons and speed!
          </p>

          {/* Animation Area */}
          <div className="bg-slate-800/50 rounded-2xl p-6 h-32 space-y-3 mb-6">
            <div className="ctrl-box1 w-20 h-6 bg-orange-500 rounded-lg"></div>
            <div className="ctrl-box2 w-20 h-6 bg-orange-500 rounded-lg"></div>
            <div className="ctrl-box3 w-20 h-6 bg-orange-500 rounded-lg"></div>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <button
              onClick={handlePlay}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all"
            >
              ▶️ Play
            </button>
            <button
              onClick={handlePause}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl transition-all"
            >
              ⏸️ Pause
            </button>
            <button
              onClick={handleReverse}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all"
            >
              ⏪ Reverse
            </button>
            <button
              onClick={handleReset}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all"
            >
              🔄 Restart
            </button>
          </div>

          {/* Speed Control */}
          <div className="bg-slate-800/30 p-4 rounded-xl">
            <h3 className="text-white font-bold mb-3">Speed Control:</h3>
            <div className="flex gap-2">
              {[0.25, 0.5, 1, 2, 3].map((speed) => (
                <button
                  key={speed}
                  onClick={() => handleSpeedChange(speed)}
                  className={`px-4 py-2 rounded-lg font-bold transition-all ${
                    playbackSpeed === speed
                      ? "bg-blue-500 text-white"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GsapFrom;
