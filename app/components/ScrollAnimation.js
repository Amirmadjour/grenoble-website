"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ScrollAnimation() {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const avenueWrapperRef = useRef(null);
  const bulbbesWrapperRef = useRef(null);
  const cyclingWrapperRef = useRef(null);
  const capitalWrapperRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const capitalTitleRef = useRef(null);
  const endQuoteBgRef = useRef(null);
  const endQuoteTextRef = useRef(null);
  const endQuoteAuthorRef = useRef(null);

  const frameCount = 40;
  
  const getAvenueFrame = (index) =>
    `${basePath}/longest-avenue/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;
    
  const getBulbbesFrame = (index) =>
    `${basePath}/Bulbbes/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;

  const getCyclingFrame = (index) =>
    `${basePath}/cycling/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;

  const getCapitalFrame = (index) =>
    `${basePath}/capitalOfAlpes/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;

  useEffect(() => {
    // 1. Preload Avenue images
    const avenueImages = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = getAvenueFrame(i);
      avenueImages.push(img);
    }

    // 2. Preload Bulbbes (Cable car) images
    const bulbbesImages = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = getBulbbesFrame(i);
      bulbbesImages.push(img);
    }
    
    // 3. Preload Cycling images
    const cyclingImages = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = getCyclingFrame(i);
      cyclingImages.push(img);
    }

    // 4. Preload Capital of Alpes images
    const capitalImages = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = getCapitalFrame(i);
      capitalImages.push(img);
    }

    // 2.5 Intro title and description animation
    const introTl = gsap.timeline();
    introTl.fromTo(
      titleRef.current.children,
      { opacity: 0, y: 100, rotationX: -90 },
      { opacity: 1, y: 0, rotationX: 0, duration: 1.2, stagger: 0.1, ease: "back.out(1.5)" }
    ).fromTo(
      descRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
      "-=0.6"
    );

    // 2.6 Avenue wrapper clip-path animation
    const clipTrigger = gsap.fromTo(
      avenueWrapperRef.current,
      { clipPath: "inset(20% 20% 20% 20%)", borderRadius: "20px" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        borderRadius: "0px",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef1.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );

    // 2.7 Bulbbes wrapper slide animation
    const slideTrigger = gsap.fromTo(
      bulbbesWrapperRef.current,
      { x: "-100%" },
      {
        x: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef2.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );

    // 2.8 Cycling wrapper slide animation
    const slideTrigger2 = gsap.fromTo(
      cyclingWrapperRef.current,
      { x: "-100%" },
      {
        x: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef3.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );

    // 2.9 Capital wrapper slide animation
    const slideTrigger3 = gsap.fromTo(
      capitalWrapperRef.current,
      { x: "-100%" },
      {
        x: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef4.current,
          start: "top bottom",
          end: "top top",
          scrub: 1,
        },
      }
    );

    // 3. Setup trigger for Avenue section images
    const trigger1 = ScrollTrigger.create({
      trigger: containerRef1.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const frameIndex = Math.min(frameCount - 1, Math.floor(self.progress * frameCount));
        if (imgRef1.current && avenueImages[frameIndex]) {
          imgRef1.current.src = avenueImages[frameIndex].src;
        }
      },
    });

    // 4. Setup trigger for Bulbbes section
    const trigger2 = ScrollTrigger.create({
      trigger: containerRef2.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const frameIndex = Math.min(frameCount - 1, Math.floor(self.progress * frameCount));
        if (imgRef2.current && bulbbesImages[frameIndex]) {
          imgRef2.current.src = bulbbesImages[frameIndex].src;
        }
      },
    });

    // 5. Setup trigger for Cycling section
    const trigger3 = ScrollTrigger.create({
      trigger: containerRef3.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const frameIndex = Math.min(frameCount - 1, Math.floor(self.progress * frameCount));
        if (imgRef3.current && cyclingImages[frameIndex]) {
          imgRef3.current.src = cyclingImages[frameIndex].src;
        }
      },
    });

    // 6. Setup trigger for Capital section
    const trigger4 = ScrollTrigger.create({
      trigger: containerRef4.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const frameIndex = Math.min(frameCount - 1, Math.floor(self.progress * frameCount));
        if (imgRef4.current && capitalImages[frameIndex]) {
          imgRef4.current.src = capitalImages[frameIndex].src;
        }
        
        // Handle Capital Title fade out
        if (capitalTitleRef.current) {
          if (self.progress < 0.3) {
            capitalTitleRef.current.style.opacity = 1;
            capitalTitleRef.current.style.transform = `translateY(0px)`;
          } else {
            const easeP = Math.max(0, 1 - (self.progress - 0.3) * 5); // 0.3 to 0.5
            capitalTitleRef.current.style.opacity = easeP;
            capitalTitleRef.current.style.transform = `translateY(-${(1 - easeP) * 50}px)`;
          }
        }
        
        // At the very end of frame sequence, reveal the quote and author
        if (endQuoteBgRef.current && endQuoteTextRef.current && endQuoteAuthorRef.current) {
          if (self.progress > 0.5) {
            const p = Math.min(1, (self.progress - 0.5) * 3.33); // 0.5 to 0.8 becomes 0 to 1
            const p2 = Math.min(1, Math.max(0, (self.progress - 0.65) * 3.33)); // 0.65 to 0.95
            
            endQuoteBgRef.current.style.opacity = p;
            
            endQuoteTextRef.current.style.opacity = p;
            endQuoteTextRef.current.style.transform = `translateY(${(1 - p) * 40}px)`;
            
            endQuoteAuthorRef.current.style.opacity = p2;
            endQuoteAuthorRef.current.style.transform = `translateY(${(1 - p2) * 30}px)`;
          } else {
            endQuoteBgRef.current.style.opacity = 0;
            endQuoteTextRef.current.style.opacity = 0;
            endQuoteAuthorRef.current.style.opacity = 0;
          }
        }
      },
    });

    return () => {
      trigger1.kill();
      trigger2.kill();
      trigger3.kill();
      trigger4.kill();
      clipTrigger.scrollTrigger?.kill();
      slideTrigger.scrollTrigger?.kill();
      slideTrigger2.scrollTrigger?.kill();
      slideTrigger3.scrollTrigger?.kill();
    };
  }, []);

  return (
    <div className="w-full bg-[#f5f0e8]">
      {/* Intro Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center px-4 bg-[#f5f0e8] z-10">
        <h1
          ref={titleRef}
          className="text-6xl md:text-9xl font-bold font-playfair text-black uppercase tracking-[8px] flex overflow-hidden py-4"
          style={{ perspective: "400px" }}
        >
          {"GRENOBLE".split("").map((char, index) => (
            <span key={index} className="inline-block origin-bottom">{char}</span>
          ))}
        </h1>
        <p
          ref={descRef}
          className="mt-6 text-xl md:text-2xl font-inter text-black max-w-3xl text-center"
        >
          And what makes it special
        </p>
      </div>

      {/* SECTION 1: The Avenue */}
      <div ref={containerRef1} className="relative w-full h-[800vh] md:h-[500vh]">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
          <div ref={avenueWrapperRef} className="relative w-full h-full overflow-hidden flex items-center justify-center bg-[#f5f0e8]">
            <img
              ref={imgRef1}
              src={getAvenueFrame(1)}
              alt="Longest Avenue sequence"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 top-[15vh] flex flex-col items-center justify-start text-black pointer-events-none drop-shadow-lg">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-center text-black">
                The Longest Avenue
              </h1>
              <p className="text-xl md:text-2xl font-inter text-center max-w-2xl px-4 text-black">
                Scroll to ride down the longest straight avenue in France.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Les Bulles */}
      <div ref={containerRef2} className="relative w-full h-[800vh] md:h-[500vh]">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#f5f0e8]">
          <div ref={bulbbesWrapperRef} className="relative w-full h-full overflow-hidden flex items-center justify-center border-l-8 border-[#f5f0e8]">
            <img
              ref={imgRef2}
              src={getBulbbesFrame(1)}
              alt="Bastille Cable Car sequence"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black pointer-events-none drop-shadow-lg">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-center text-black">
                Les Bulles
              </h1>
              <p className="text-xl md:text-2xl font-inter text-center max-w-2xl px-4 text-black">
                Floating gracefully towards the historic Bastille fortress.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Cycling */}
      <div ref={containerRef3} className="relative w-full h-[800vh] md:h-[500vh]">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#f5f0e8]">
          <div ref={cyclingWrapperRef} className="relative w-full h-full overflow-hidden flex items-center justify-center border-l-8 border-[#f5f0e8]">
            <img
              ref={imgRef3}
              src={getCyclingFrame(1)}
              alt="Cycling sequence"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 top-[15vh] flex flex-col items-center justify-start text-black pointer-events-none drop-shadow-lg">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-center text-black">
                Cycling Culture
              </h1>
              <p className="text-xl md:text-2xl font-inter text-center max-w-2xl px-4 text-black">
                A flat and inviting terrain perfect for everyday cycling.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: Capital of Alpes */}
      <div ref={containerRef4} className="relative w-full h-[800vh] md:h-[500vh]">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#f5f0e8]">
          <div ref={capitalWrapperRef} className="relative w-full h-full overflow-hidden flex items-center justify-center border-l-8 border-[#f5f0e8]">
            <img
              ref={imgRef4}
              src={getCapitalFrame(1)}
              alt="Capital of Alpes sequence"
              className="w-full h-full object-cover"
            />
            {/* Section 4 standard title */}
            <div ref={capitalTitleRef} className="absolute inset-x-0 top-[15vh] flex flex-col items-center justify-start text-black pointer-events-none drop-shadow-lg transition-transform duration-75">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair text-center text-black">
                Capital of the Alps
              </h1>
              <p className="text-xl md:text-2xl font-inter text-center max-w-2xl px-4 text-black">
                Surrounded by awe-inspiring peaks on all sides.
              </p>
            </div>

            {/* The Quote that fades in at the very end */}
            <div 
              ref={endQuoteBgRef}
              className="absolute inset-0 flex flex-col items-center justify-center gap-8 md:gap-16 bg-black/60 pointer-events-none drop-shadow-xl opacity-0"
            >
              <h1 ref={endQuoteTextRef} className="text-4xl md:text-7xl font-bold font-playfair text-center text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] opacity-0 transition-transform duration-75">
                "At the end of every street, <br/> a mountain."
              </h1>
              <p ref={endQuoteAuthorRef} className="text-2xl md:text-4xl font-inter text-gray-300 italic opacity-0 transition-transform duration-75">
                — Stendhal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
