import { motion } from "motion/react";

interface Feedback {
  name: string;
  role: string;
  company: string;
  feedback: string;
  date: string;
}

interface FeedbackCardProps {
  feedback: Feedback;
  index: number;
}

export function FeedbackCard({ feedback, index }: FeedbackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="mb-1">{feedback.name}</h3>
          {feedback.role && (
            <p className="text-muted-foreground">
              {feedback.role}
              {feedback.company && ` · ${feedback.company}`}
            </p>
          )}
        </div>
        <span className="text-sm text-muted-foreground">{feedback.date}</span>
      </div>
      <p className="text-foreground/80 leading-relaxed">{feedback.feedback}</p>
    </motion.div>
  );
}