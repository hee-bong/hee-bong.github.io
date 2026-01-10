import { useState } from "react";
import { motion } from "motion/react";
import { FeedbackCard } from "./components/FeedbackCard";
import { AsteriskDecoration } from "./components/AsteriskDecoration";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/Footer";

const feedbackData = [
  {
    id: 1,
    name: "Anonymous",
    role: "익명",
    company: "",
    feedback:
      "어려운 업무에도 항상 긍정적인 생각으로 임하는 모습이 좋아요. 희성님의 밝음이 있기에 성과를 함께 만들어 나가는 과정이 즐거웠습니다.",
    date: "2025",
  },
  {
    id: 2,
    name: "Anonymous",
    role: "익명",
    company: "",
    feedback:
      "프로젝트 관리, 이슈 관리부터 시작하여 실무 성과에까지 가장 많은 영향을 끼칩니다. 성과 영향에 가장 핵심적인 인물이면서, 본인의 책임을 끝까지 다하는 모습이 인상적입니다.",
    date: "2025",
  },
  {
    id: 3,
    name: "Anonymous",
    role: "익명",
    company: "",
    feedback:
      "팀의 다양한 업무 영역에서 모두 활약하고 있으며 동료들의 어려움을 같이 고민하고 있음. 팀 목표에 잘 정렬되어 주도적으로 일하고 있음.",
    date: "2025",
  },
  {
    id: 4,
    name: "Anonymous",
    role: "익명",
    company: "",
    feedback: "필요한 부분들에 대해서 빠르게 캐치하고 업무를 꼼꼼히 주도적으로 잘 진행합니다.",
    date: "2025",
  },
  {
    id: 5,
    name: "Anonymous",
    role: "익명",
    company: "",
    feedback:
      "진행하고 있는 과제들에 마케팅적인 역량을 활용하여 다양한 성과 중심적 결론을 도출해냄. 과제를 진행함에 있어 본인의 역할을 스스로 찾아내고 잘 대응함. 소통 과정에서 긍정적인 자세와 상대방의 의견을 집중하고 자신의 결과를 만들어 낼 수 있도록 지원함. 폭넓은 시각으로 과제를 바라보고 문제 해결에서 역할을 수행함. 의사결정을 위해 객관적으로 판단하려고 노력하고 근거를 가지고 소통함.",
    date: "2024",
  },
  {
    id: 6,
    name: "Anonymous",
    role: "익명",
    company: "",
    feedback:
      "성실함을 기반으로 맡은 업무를 철저히 수행하며, 매사에 밝고 긍정적인 태도로 팀 분위기를 활기차게 만들어 주십니다. 친화력이 뛰어나 다양한 팀원과 원활히 소통하며, 협업의 중심 역할을 하고 계세요. 긍정적인 에너지는 회의나 프로젝트 진행 중에도 자연스럽게 퍼져, 모두가 동기를 잃지 않고 목표를 향해 나아가게 합니다. 또한 상대방의 의견을 존중하며 서로 다른 관점을 조화롭게 수렴하는 능력을 발휘해, 복잡한 프로젝트에서도 구성원 간의 화합을 이끌어내시는 것 같아요.",
    date: "2024",
  },
  {
    id: 7,
    name: "Anonymous",
    role: "익명",
    company: "",
    feedback:
      "성실한 노력과 밝은 성격이 만나, 기획 과정의 효율성과 즐거움을 동시에 추구하는 본받고 싶은 기획자입니다.",
    date: "2024",
  },
  {
    id: 8,
    name: "Anonymous",
    role: "익명",
    company: "",
    feedback:
      "맡은 일에 대해 모두 수긍하면서 완벽하게 해내려고 노력하는 모습이 귀감이 되었습니다. 기획 뿐만 아니라 스프린트 일정을 관리한다거나, 이전 팀에서 맡은 업무를 불만 없이 책임감으로 지금도 열심히 해내는 모습이 긍정적이었습니다. 또한, 기획 내용에 자신의 목적성이 들어가 있어 설득력 있는 기획을 하는 전문적인 모습까지 정말 좋았습니다.",
    date: "2024",
  },
];

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
              key={feedback.id}
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