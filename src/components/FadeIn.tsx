"use client";
import { useEffect, useRef, useState } from "react";

type Variant = "up" | "left" | "right" | "scale";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: Variant;
}

function getInitialTransform(v: Variant) {
  switch (v) {
    case "left":  return "translateX(-36px)";
    case "right": return "translateX(36px)";
    case "scale": return "scale(0.92)";
    default:      return "translateY(24px)";
  }
}

export default function FadeIn({ children, delay = 0, className = "", variant = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? (variant === "scale" ? "scale(1)" : "none") : getInitialTransform(variant),
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
