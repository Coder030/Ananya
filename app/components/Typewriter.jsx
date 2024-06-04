"use client";

// components/Typewriter.js
import { useEffect, useState } from "react";

const Typewriter = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delay = 300,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setText(words[wordIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(words[wordIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    }

    if (!isDeleting && charIndex === words[wordIndex].length) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [
    charIndex,
    isDeleting,
    words,
    wordIndex,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return <span>{text}</span>;
};

export default Typewriter;
