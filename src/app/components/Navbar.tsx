import { motion } from "motion/react";
import { useLanguage } from "../../contexts/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";

interface NavbarProps {
  currentPage: "home" | "feedback";
  onNavigate: (page: "home" | "feedback") => void;
  feedbackCount: number;
}

export function Navbar({ currentPage, onNavigate, feedbackCount }: NavbarProps) {
  const { t } = useLanguage();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="text-primary text-xl sm:text-2xl">
            ✱
          </span>
          <span className="font-semibold text-sm sm:text-base font-en">
            <span className="hidden sm:inline">{t.home.name}</span>
            <span className="sm:hidden">HeeS Kim</span>
          </span>
        </button>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <button
            onClick={() => onNavigate("home")}
            className={`text-sm sm:text-base transition-colors hidden sm:block cursor-pointer ${
              currentPage === "home"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => onNavigate("feedback")}
            className={`flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base transition-colors cursor-pointer ${
              currentPage === "feedback"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.nav.feedback}
            <span className="px-1.5 sm:px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm">
              {feedbackCount}
            </span>
          </button>
          <LanguageSelector />
        </div>
      </div>
    </motion.nav>
  );
}