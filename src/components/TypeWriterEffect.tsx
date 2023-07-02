import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypeWriterEffect = ({ text }: { text: string }) => {
  const [typedText, setTypedText] = useState("");
  const displayText = {
    display: typedText.length === text.length - 1 ? "none" : "block",
  };

  useEffect(() => {
    if (displayText.display === "none") return;
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex === text.length - 1) {
        clearInterval(intervalId);
      } else {
        setTypedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      }
    }, 150);

    return () => {
      clearInterval(intervalId);
    };
  }, [text, displayText.display]);

  return (
    <motion.div
      style={displayText}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.8 }}
    >
      <p className="text-accent italic text-6xl font-mono tracking-wide leading-loose pt-5">
        {typedText}
      </p>
    </motion.div>
  );
};
export default TypeWriterEffect;
