import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../heebong";

const languages: { code: Language; label: string; shortLabel: string }[] = [
  { code: "ko", label: "한국어", shortLabel: "KO" },
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "fr", label: "Français", shortLabel: "FR" },
];

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = languages.find((lang) => lang.code === language);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <>
      {/* 모바일: 드롭다운 */}
      <div className="sm:hidden relative">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground transition-all font-en flex items-center gap-1 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Select language"
        >
          🌐 {currentLang?.shortLabel}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <>
              {/* 배경 오버레이 */}
              <div
                className="fixed inset-0 z-40 cursor-default"
                onClick={() => setIsOpen(false)}
              />
              {/* 드롭다운 메뉴 */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50 min-w-[100px]"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full px-4 py-2 text-left text-sm transition-colors cursor-pointer ${
                      language === lang.code
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* 데스크톱: 모든 언어 버튼 표시 */}
      <div className="hidden sm:flex items-center gap-2">
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
              language === lang.code
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Switch to ${lang.label}`}
          >
            {lang.label}
          </motion.button>
        ))}
      </div>
    </>
  );
}

