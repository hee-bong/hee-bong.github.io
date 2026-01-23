import { motion } from "motion/react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../heebong";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            language === lang.code
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Switch to ${lang.label}`}
        >
          {/* <span className="mr-1">{lang.flag}</span> */}
          <span className="hidden sm:inline">{lang.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

