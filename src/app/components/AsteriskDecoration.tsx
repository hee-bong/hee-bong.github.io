import { motion } from "motion/react";

interface AsteriskDecorationProps {
  variant?: "simple" | "outlined" | "filled" | "eight";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
}

export function AsteriskDecoration({
  variant = "simple",
  size = "md",
  className = "",
  animate = true,
}: AsteriskDecorationProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-20 h-20",
  };

  const variants = {
    simple: "*",
    outlined: "✳",
    filled: "✱",
    eight: "✲",
  };

  const animationProps = animate
    ? {
        animate: {
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        },
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        },
      }
    : {};

  return (
    <motion.div
      className={`${sizeClasses[size]} flex items-center justify-center ${className}`}
      style={{
        color: "var(--primary)",
        opacity: 0.6,
      }}
      {...animationProps}
    >
      <span className="text-[2em]">{variants[variant]}</span>
    </motion.div>
  );
}
