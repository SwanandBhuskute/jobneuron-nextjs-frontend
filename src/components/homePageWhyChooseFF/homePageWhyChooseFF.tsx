"use client";

import styles from "./homePageWhyChooseFF.module.css";
import {
  PiLightningDuotone,
  PiFileTextDuotone,
  PiChartBarDuotone,
  PiRadioButtonDuotone,
  PiUsersDuotone,
  PiMagicWandDuotone,
} from "react-icons/pi";

export default function HomePageWhyChooseFF() {
  return (
    <section id="feature" className={styles.whySection}>
      {/* Header */}
      <header className={styles.header}>
        <h2 className={styles.title}>Why JobNeuron Works Better</h2>
        <p className={styles.subtitle}>
          JobNeuron uses <span className={styles.highlightAI}>adaptive AI</span>{" "}
          +
          <span className={styles.highlightHuman}>
            {" "}
            proven hiring psychology
          </span>
          to position your profile where recruiters actually look.
        </p>
      </header>

      {/* Feature Grid */}
      <div className={styles.featureGrid}>
        <article className={`${styles.featureCard} ${styles.featureCardWide}`}>
          <div className={styles.iconWrapper}>
            <PiLightningDuotone />
          </div>
          <h3>Rapid Application System</h3>
          <p>
            Identifies high-quality openings and applies instantly — ensuring
            you never miss time-sensitive, high-conversion job posts.
          </p>
        </article>

        <article
          className={`${styles.featureCard} ${styles.featureCardMedium}`}
        >
          <div className={styles.iconWrapper}>
            <PiFileTextDuotone />
          </div>
          <h3>Smart Resume Positioning</h3>
          <p>
            Your resume is rewritten for U.S. recruiter searches and ATS systems
            with targeted keyword mapping and measurable relevance boosts.
          </p>
        </article>

        <article className={`${styles.featureCard} ${styles.featureCardSmall}`}>
          <div className={styles.iconWrapper}>
            <PiRadioButtonDuotone />
          </div>
          <h3>Context-Aware Job Matching</h3>
          <p>
            Every job is analyzed for visa needs, seniority fit, and skills —
            ensuring only high-value, high-match applications go out.
          </p>
        </article>

        <article className={`${styles.featureCard} ${styles.featureCardSmall}`}>
          <div className={styles.iconWrapper}>
            <PiChartBarDuotone />
          </div>
          <h3>Performance Dashboard</h3>
          <p>
            Track conversion rates, recruiter responses, and momentum — all in
            one clean, real-time analytics dashboard.
          </p>
        </article>

        <article
          className={`${styles.featureCard} ${styles.featureCardMedium}`}
        >
          <div className={styles.iconWrapper}>
            <PiUsersDuotone />
          </div>
          <h3>Human-Verified Refinements</h3>
          <p>
            Experts review and refine your resume, LinkedIn, and job strategy
            with insights drawn from real U.S. hiring processes.
          </p>
        </article>

        <article className={`${styles.featureCard} ${styles.featureCardWide}`}>
          <div className={styles.iconWrapper}>
            <PiMagicWandDuotone />
          </div>
          <h3>Adaptive AI Learning</h3>
          <p>
            JobNeuron evolves from recruiter activity, improving future
            applications automatically so your chances increase every week.
          </p>
        </article>
      </div>
    </section>
  );
}

// import styles from "./homePageWhyChooseFF.module.css";
// // import Image from "next/image";

// export default function HomePageWhyChooseFF() {
//   return (
//     <section id="feature" className={styles.whySection}>
//       {/* === Header === */}
//       <header className={styles.header}>
//         <h2 className={styles.title}>Why Choose Jobneuron?</h2>
//         <p className={styles.subtitle}>
//           We don’t just apply, we <strong>make you get noticed.</strong>{" "}
//           Jobneuron combines{" "}
//           <span className={styles.highlightAI}>AI precision</span> with{" "}
//           <span className={styles.highlightHuman}>human insight</span> to get
//           you interviews that actually convert.
//         </p>
//       </header>

//       {/* === Feature Grid === */}
//       <div className={styles.featureGrid}>
//         <article className={`${styles.featureCard} ${styles.featureCard1}`}>
//           <h3>Lightning Fast Applications</h3>
//           <p>
//             A dedicated team of 4–5 people handles your job hunt, applying to
//             1200+ roles in 6–7 weeks. We’ll keep you posted with every update in
//             a WhatsApp group made just for you.
//           </p>
//         </article>

//         <article className={`${styles.featureCard} ${styles.featureCard2}`}>
//           <h3>Dynamic Resume Optimization</h3>
//           <p>
//             We build your base resume from scratch and tailor it for each job,
//             making it ATS-friendly and recruiter-visible.
//           </p>
//         </article>

//         <article className={`${styles.featureCard} ${styles.featureCard3}`}>
//           <h3>LinkedIn Profile Optimization</h3>
//           <p>
//             We professionally optimize your LinkedIn profile to boost recruiter
//             visibility and align with your job search goals.
//           </p>
//         </article>

//         <article className={`${styles.featureCard} ${styles.featureCard4}`}>
//           <h3>Dashboard & Analytics</h3>
//           <p>
//             Access a personalized dashboard to track applications, monitor
//             success rates, and get real-time insights to improve your job search
//             strategy.
//           </p>
//         </article>

//         <article className={`${styles.featureCard} ${styles.featureCard5}`}>
//           <h3>Precision Targeting</h3>
//           <p>
//             We only apply to jobs that fit your pay, location, company size, and
//             career goals — and only to jobs posted in the last 24–48 hours.
//           </p>
//         </article>

//         <article className={`${styles.featureCard} ${styles.featureCard6}`}>
//           <h3>AI-Powered Matching</h3>
//           <p>
//             For each and every application, your base resume is automatically
//             optimized to the job description with ATS-friendly keywords and
//             skills.
//           </p>
//         </article>
//       </div>
//     </section>
//   );
// }
