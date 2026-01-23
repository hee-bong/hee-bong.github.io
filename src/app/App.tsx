import { useState } from "react";
import { motion } from "motion/react";
import { FeedbackCard } from "./components/FeedbackCard";
import { AsteriskDecoration } from "./components/AsteriskDecoration";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/Footer";
import { feedbackData } from '../heebong';


function FeedbackPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-24 pb-24">
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
      </div>

      {/* Header Section */}
      <section className="relative px-6 py-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <AsteriskDecoration variant="eight" size="sm" animate={false} />
            <span className="text-primary font-en">Feedback</span>
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 600 }}>
            함께 일한 동료들의 이야기
          </h2>
          <p className="text-muted-foreground mt-4">
            여러 팀과 협업하며 받은 소중한 피드백들입니다
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
            <span className="text-primary">총</span>
            <span className="font-semibold text-primary" style={{ fontSize: "1.25rem" }}>
              {feedbackData.length}
            </span>
            <span className="text-primary">개의 피드백</span>
          </div>
        </motion.div>

        {/* Scrollable Feedback Cards */}
        <div className="space-y-8">
          {feedbackData.map((feedback, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
                delay: index * 0.05
              }}
            >
              <FeedbackCard feedback={feedback} index={index} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "feedback">("home");

  return (
    <>
      <Navbar
        currentPage={currentView}
        onNavigate={setCurrentView}
        feedbackCount={feedbackData.length}
      />
      {currentView === "home" ? (
        <HomePage
          onNavigateToFeedback={() => setCurrentView("feedback")}
          feedbackCount={feedbackData.length}
        />
      ) : (
        <FeedbackPage />
      )}
    </>
  );
}