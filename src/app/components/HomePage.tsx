import { motion } from "motion/react";
import { AsteriskDecoration } from "./AsteriskDecoration";
import { Footer } from "./Footer";

interface HomePageProps {
  onNavigateToFeedback: () => void;
  feedbackCount: number;
}

export function HomePage({ onNavigateToFeedback, feedbackCount }: HomePageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Asterisk Decorations */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <AsteriskDecoration
          variant="simple"
          size="xl"
          className="absolute top-20 left-10"
        />
        <AsteriskDecoration
          variant="outlined"
          size="lg"
          className="absolute top-40 right-20"
        />
        <AsteriskDecoration
          variant="filled"
          size="md"
          className="absolute bottom-40 left-1/4"
        />
        <AsteriskDecoration
          variant="eight"
          size="xl"
          className="absolute bottom-20 right-1/3"
        />
        <AsteriskDecoration
          variant="outlined"
          size="lg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <AsteriskDecoration
          variant="simple"
          size="md"
          className="absolute top-1/4 left-3/4"
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <AsteriskDecoration variant="filled" size="md" animate={false} />
            <span className="text-primary px-4 py-2 bg-secondary/50 rounded-full font-en">
              Product Manager
            </span>
            <AsteriskDecoration variant="outlined" size="md" animate={false} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4 font-en"
            style={{ fontSize: "4rem", fontWeight: 700, lineHeight: 1.2 }}
          >
            Hee Sung Kim
          </motion.h1>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}