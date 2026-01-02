import { motion } from "motion/react";
import { AsteriskDecoration } from "./AsteriskDecoration";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <AsteriskDecoration variant="simple" size="sm" animate={false} />
          <AsteriskDecoration variant="outlined" size="sm" animate={false} />
          <AsteriskDecoration variant="filled" size="sm" animate={false} />
        </div>
        <p className="text-muted-foreground font-en">
          © 2025 Hee Sung Kim · More coming soon
        </p>
      </motion.div>
    </footer>
  );
}