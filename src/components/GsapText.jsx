import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

const GsapText = () => {
  const container = useRef();

  //   useGSAP(
  //     () => {
  //       const split = new SplitText(".text1", { type: "chars" });

  //       gsap.from(split.chars, {
  //         opacity: 0,
  //         y: 50,
  //         stagger: 0.1,
  //         yoyo: true,
  //         repeat: -1,
  //       });
  //     },
  //     { scope: container }
  //   );
  //   useGSAP(
  //     () => {
  //       const split = new SplitText(".text3", { type: "words" });

  //       gsap.from(split.words, {
  //         opacity: 0,
  //         x: -100,
  //         stagger: 0.2,
  //         yoyo: true,
  //         repeat: -1,
  //       });
  //     },
  //     { scope: container }
  //   );
  useGSAP(
    () => {
      const split = new SplitText(".text4", { type: "chars" });

      gsap.from(split.chars, {
        opacity: 0,
        x: () => gsap.utils.random(-200, 200),
        y: () => gsap.utils.random(-200, 200),
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            SplitText Magic! ✨
          </h1>
          <p className="text-white text-2xl">Watch letters come to life!</p>
        </div>

        {/* Animation 1 */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="mb-6">
            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-bold">
              1️⃣ Split by LETTERS
            </span>
          </div>
          <h2 className="text1 text-6xl font-bold text-gray-800">
            HELLO WORLD
          </h2>
          <div className="mt-6 bg-purple-50 p-4 rounded-lg">
            <code className="text-sm text-gray-700">
              type: 'chars' → Splits into individual letters
              <br />
              stagger: 0.1 → 0.1s delay between each
            </code>
          </div>
        </div>

        {/* Animation 3 */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">
              3️⃣ Split by WORDS
            </span>
          </div>
          <h2 className="text3 text-5xl font-bold text-gray-800">
            One Word At A Time Appears
          </h2>
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <code className="text-sm text-gray-700">
              type: 'words' → Splits into words
              <br />
              Each WORD slides in separately!
            </code>
          </div>
        </div>

        {/* Animation 4 */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="mb-6">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
              4️⃣ Random Chaos!
            </span>
          </div>
          <h2 className="text4 text-6xl font-bold text-green-600">
            RANDOM FUN
          </h2>
          <div className="mt-6 bg-green-50 p-4 rounded-lg">
            <code className="text-sm text-gray-700">
              x: random(-200, 200)
              <br />
              Each letter flies in from random spot!
            </code>
          </div>
        </div>

        {/* Animation 5 */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="mb-6">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold">
              5️⃣ Color Wave (Infinite!)
            </span>
          </div>
          <h2 className="text5 text-7xl font-bold">WAVE</h2>
          <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
            <code className="text-sm text-gray-700">
              repeat: -1, yoyo: true
              <br />
              Color changes and bounces forever!
            </code>
          </div>
        </div>

        {/* Animation 6 */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="mb-6">
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold">
              6️⃣ 3D Flip Effect
            </span>
          </div>
          <h2 className="text6 text-6xl font-bold text-red-600">FLIP IT!</h2>
          <div className="mt-6 bg-red-50 p-4 rounded-lg">
            <code className="text-sm text-gray-700">
              rotationY: 90
              <br />
              Letters flip in 3D like cards!
            </code>
          </div>
        </div>

        {/* Animation 7 */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl">
          <div className="mb-6">
            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-bold">
              7️⃣ Split by LINES
            </span>
          </div>
          <p className="text7 text-3xl font-bold text-gray-800 leading-relaxed">
            This is line one with some text
            <br />
            This is line two with more words
            <br />
            And here is the final line!
          </p>
          <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
            <code className="text-sm text-gray-700">
              type: 'lines' → Each LINE animates
              <br />
              Perfect for paragraphs!
            </code>
          </div>
        </div>

        {/* Explanation Card */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl text-white">
          <h2 className="text-4xl font-bold mb-6">🎓 How It Works:</h2>

          <div className="space-y-6 text-lg">
            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">
                Step 1: Create SplitText
              </h3>
              <code className="text-yellow-200 block">
                const split = new SplitText('.text', &#123; type: 'chars'
                &#125;);
              </code>
              <p className="mt-2">This breaks your text into pieces!</p>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">
                Step 2: Animate the Pieces
              </h3>
              <code className="text-yellow-200 block">
                gsap.from(split.chars, &#123; opacity: 0, stagger: 0.1 &#125;);
              </code>
              <p className="mt-2">Animate each piece with stagger!</p>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">Three Types:</h3>
              <ul className="space-y-2 mt-2">
                <li>
                  • <strong>chars</strong> = individual letters (H, E, L, L, O)
                </li>
                <li>
                  • <strong>words</strong> = whole words (HELLO, WORLD)
                </li>
                <li>
                  • <strong>lines</strong> = text lines (for paragraphs)
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-3">
                ⭐ The Secret: STAGGER
              </h3>
              <p className="text-yellow-200 text-xl">
                stagger: 0.1 means "wait 0.1 seconds between each piece"
              </p>
              <p className="mt-2">
                That's what makes them animate one after another!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GsapText;
