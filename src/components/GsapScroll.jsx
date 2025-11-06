import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const GsapScroll = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".fade-box", {
        opacity: 0,
        y: 100,

        scrollTrigger: {
          trigger: ".fade-box",
          start: "top 80%",
          end: "bottom 50%",
          scrub: true,
          //   markers: true,
          toggleActions: "play none none reverse",
        },
      });
      gsap.to(".scrub-box", {
        x: 500,
        rotation: 360,
        scale: 4,
        backgroundColor: "#ef4444",
        scrollTrigger: {
          trigger: ".scrub-section",
          start: "top center",
          end: "bottom center",
          scrub: 4,
          //   markers: true,
        },
      });
      gsap.to(".pin-box", {
        rotation: 180,
        scale: 2,
        backgroundColor: "#8b5cf6",
        scrollTrigger: {
          trigger: ".pin-section",
          start: "top top",
          end: "+=700",
          scrub: 1,
          pin: true,
          //   markers: true,
        },
      });
      gsap.to(".horizontal-item", {
        xPercent:
          -100 * (document.querySelectorAll(".horizontal-item").length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".horizontal-section",
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
          //   markers: true,
        },
      });
      gsap.from(".zoom-image", {
        scale: 0.5,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".zoom-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });
    },
    {
      scope: container,
    }
  );

  return (
    <div ref={container}>
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-white mb-6">
            📜 ScrollTrigger Magic
          </h1>
          <p className="text-2xl text-purple-200 mb-8">
            Scroll down to see animations in action!
          </p>
          <div className="text-6xl animate-bounce">👇</div>
        </div>
      </div>
      {/* Example 1: Basic Fade In */}
      <div className="min-h-screen flex items-center justify-center bg-slate-900 p-8">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            1️⃣ Basic Fade In Animation
          </h2>
          <div className="fade-box bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              I fade in when you scroll! ✨
            </h3>
            <p className="text-white text-lg">
              This uses{" "}
              <code className="bg-black/30 px-2 py-1 rounded">opacity: 0</code>{" "}
              and <code className="bg-black/30 px-2 py-1 rounded">y: 100</code>{" "}
              with ScrollTrigger
            </p>
          </div>
        </div>
      </div>
      {/* Example 2: Scrub Animation */}
      <div className="scrub-section min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 p-8">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            2️⃣ Scrub Animation (Tied to Scroll)
          </h2>
          <p className="text-purple-200 text-center mb-8 text-lg">
            This box moves with your scroll position! Try scrolling up and down.
          </p>
          <div className="scrub-box w-24 h-24 bg-blue-500 rounded-2xl flex items-center justify-center text-4xl">
            🚀
          </div>
        </div>
      </div>
      {/* Example 3: Pin Section */}
      <div className="pin-section min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-pink-900 p-8">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            3️⃣ Pin Animation (Stays Fixed)
          </h2>
          <p className="text-purple-200 mb-8 text-lg">
            This section is PINNED while the box animates!
          </p>
          <div className="pin-box w-32 h-32 bg-yellow-500 rounded-3xl mx-auto flex items-center justify-center text-5xl">
            📌
          </div>
          <div className="mt-8 bg-black/30 p-4 rounded-xl inline-block">
            <code className="text-green-300 text-sm block text-left">
              scrollTrigger: {"{"}
              <br />
              &nbsp;&nbsp;pin: true, ← Pins the element!
              <br />
              &nbsp;&nbsp;scrub: 1<br />
              {"}"}
            </code>
          </div>
        </div>
      </div>
      {/* Example 4: Horizontal Scroll */}
      <div className="horizontal-section min-h-screen bg-gradient-to-r from-indigo-900 to-purple-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            4️⃣ Horizontal Scroll Gallery
          </h2>
          <p className="text-purple-200 text-center mb-8 text-lg">
            Scroll vertically to move horizontally! 🎢
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-8 w-max">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className="horizontal-item w-80 h-96 bg-gradient-to-br from-pink-500 to-orange-500 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-2xl"
                >
                  <span className="text-white text-8xl font-bold">{num}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Example 10: Image Zoom */}
      <div className="zoom-section min-h-screen flex items-center justify-center bg-slate-900 p-8">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            🔟 Image Zoom Reveal
          </h2>
          <div className="zoom-image w-full h-96 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <span className="text-white text-9xl">🎨</span>
          </div>
        </div>
      </div>
      <div className="min-h-dvh bg-gradient-to-r from-indigo-900 to-purple-900"></div>
    </div>
  );
};

export default GsapScroll;
