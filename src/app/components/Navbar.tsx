import { motion } from "motion/react";

interface NavbarProps {
  currentPage: "home" | "feedback";
  onNavigate: (page: "home" | "feedback") => void;
  feedbackCount: number;
}

export function Navbar({ currentPage, onNavigate, feedbackCount }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span className="text-primary" style={{ fontSize: "1.5rem" }}>
            ✱
          </span>
          <span style={{ fontWeight: 600 }} className="font-en">Hee Sung Kim</span>
        </button>

        <div className="flex items-center gap-6">
          <button
            onClick={() => onNavigate("feedback")}
            className={`font-en flex items-center gap-2 transition-colors ${
              currentPage === "feedback"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Feedback
            <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-sm">
              {feedbackCount}
            </span>
          </button>
          {/* Add more navigation items here as needed */}
        </div>
      </div>
    </motion.nav>
  );
}