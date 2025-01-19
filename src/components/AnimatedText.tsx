import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function AnimatedText({animatedtext}: {animatedtext : string}) {
  const text = animatedtext.split(" ");
  const text2 =  text.shift()
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "0px 0px -100px 0px" });

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="hidden lg:block w-full">
      <motion.div
        ref={containerRef}
        className="text-4xl font-bold text-gray-800 leading-relaxed flex-col"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div>
        {text2?.split("").map((letter, index) => (
            <motion.span
            key={index}
            style={{
              display: "inline-block",
            }}
            variants={child}
          >
            {letter}
          </motion.span>
        ))}

        </div>
        <div>
        {text.map((word, index) => (
              <motion.span
                key={index}
                style={{
                  display: "inline-block",
                }}
                variants={child}
              >
                {word}{" "}
              </motion.span>
            ))
        }
        </div>
      </motion.div>
    </div>
  );
}
