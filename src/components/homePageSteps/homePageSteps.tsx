"use client";

import styles from "./homePageSteps.module.css";
import {
  PiCompassDuotone,
  PiNotebookDuotone,
  PiCursorClickDuotone,
  PiStairsDuotone,
} from "react-icons/pi";

export default function HomePageSteps() {
  return (
    <section className={styles.stepsContainer}>
      {/* === Header === */}
      <div className={styles.stepsHeader}>
        <h2 className={styles.stepsTitle}>
          Your job search becomes effortless — in just 4 guided steps.
        </h2>
        <p className={styles.stepsSubtitle}>
          We simplify your job hunt with a structured, intelligent workflow.{" "}
          <span className={styles.highlight}>
            No confusion. No burnout. Only progress.
          </span>
        </p>
      </div>

      {/* === Steps === */}
      <div className={styles.stepsGrid}>
        {/* STEP 1 */}
        <div className={styles.stepCard}>
          <div className={styles.stepText}>
            <h3 className={styles.stepNumber}>\\ STEP 1</h3>
            <h4 className={styles.stepHeading}>Define your direction.</h4>
            <p className={styles.stepDescription}>
              Share your ideal role, experience, background and preferred
              locations. We build a personalized search path around your goals.
            </p>
          </div>
          <div className={styles.stepIcon}>
            <PiCompassDuotone />
          </div>
        </div>

        {/* STEP 2 */}
        <div className={styles.stepCard}>
          <div className={styles.stepText}>
            <h3 className={styles.stepNumber}>\\ STEP 2</h3>
            <h4 className={styles.stepHeading}>We upgrade your profile.</h4>
            <p className={styles.stepDescription}>
              Your résumé, LinkedIn and skill positioning are restructured using
              proven U.S. hiring patterns for maximum recruiter visibility.
            </p>
          </div>
          <div className={styles.stepIcon}>
            <PiNotebookDuotone />
          </div>
        </div>

        {/* STEP 3 */}
        <div className={styles.stepCard}>
          <div className={styles.stepText}>
            <h3 className={styles.stepNumber}>\\ STEP 3</h3>
            <h4 className={styles.stepHeading}>AI applies with precision.</h4>
            <p className={styles.stepDescription}>
              We scan, filter and apply to curated job opportunities that match
              your profile. Zero spam — each application is customized.
            </p>
          </div>
          <div className={styles.stepIcon}>
            <PiCursorClickDuotone />
          </div>
        </div>

        {/* STEP 4 */}
        <div className={styles.stepCard}>
          <div className={styles.stepText}>
            <h3 className={styles.stepNumber}>\\ STEP 4</h3>
            <h4 className={styles.stepHeading}>You get interview traction.</h4>
            <p className={styles.stepDescription}>
              As responses roll in, we track follow-ups, refine applications,
              and keep your momentum strong until offers start coming.
            </p>
          </div>
          <div className={styles.stepIcon}>
            <PiStairsDuotone />
          </div>
        </div>
      </div>
    </section>
  );
}

// import styles from "./homePageSteps.module.css";
// import {
//   PiTargetDuotone,
//   PiTrophyDuotone,
//   PiRocketDuotone,
//   PiHandshakeDuotone,
// } from "react-icons/pi";

// export default function HomePageSteps() {
//   return (
//     <section className={styles.stepsContainer}>
//       {/* === Header === */}
//       <div className={styles.stepsHeader}>
//         <h2 className={styles.stepsTitle}>
//           From searching to interviewing, just 4 simple steps.
//         </h2>
//         <p className={styles.stepsSubtitle}>
//           We turn your endless job hunt into a smooth, automated path to
//           interview calls.{" "}
//           <span className={styles.highlight}>
//             You set the goal, JobNeuron takes care of the journey.
//           </span>
//         </p>
//       </div>

//       {/* === Steps Grid === */}
//       <div className={styles.stepsGrid}>
//         {/* STEP 1 */}
//         <div className={styles.stepCard}>
//           <div className={styles.stepText}>
//             <h3 className={styles.stepNumber}>\\ STEP 1</h3>
//             <h4 className={styles.stepHeading}>You share your goals.</h4>
//             <p className={styles.stepDescription}>
//               Tell us what you are aiming for, your dream role, location, and
//               experience. We learn your story so we can find the right
//               opportunities for you.
//             </p>
//           </div>
//           <div className={styles.stepIcon}>
//             <PiTargetDuotone />
//           </div>
//         </div>

//         {/* STEP 2 */}
//         <div className={styles.stepCard}>
//           <div className={styles.stepText}>
//             <h3 className={styles.stepNumber}>\\ STEP 2</h3>
//             <h4 className={styles.stepHeading}>
//               We build your winning profile.
//             </h4>
//             <p className={styles.stepDescription}>
//               Our AI rewrites your resume and LinkedIn to match top U.S.
//               recruiter searches. Your profile starts showing up where it
//               matters, on the right screens.
//             </p>
//           </div>
//           <div className={styles.stepIcon}>
//             <PiTrophyDuotone />
//           </div>
//         </div>

//         {/* STEP 3 */}
//         <div className={styles.stepCard}>
//           <div className={styles.stepText}>
//             <h3 className={styles.stepNumber}>\\ STEP 3</h3>
//             <h4 className={styles.stepHeading}>
//               Jobneuron AI applies for you.
//             </h4>
//             <p className={styles.stepDescription}>
//               We apply to 1000+ curated roles for you, based on your goals and
//               visa needs. No spam, no mass blasts, only smart, targeted
//               applications.
//             </p>
//           </div>
//           <div className={styles.stepIcon}>
//             <PiRocketDuotone />
//           </div>
//         </div>

//         {/* STEP 4 */}
//         <div className={styles.stepCard}>
//           <div className={styles.stepText}>
//             <h3 className={styles.stepNumber}>\\ STEP 4</h3>
//             <h4 className={styles.stepHeading}>
//               You start getting interview calls.
//             </h4>
//             <p className={styles.stepDescription}>
//               As applications go out, you start getting real calls from real
//               recruiters. We track, follow up, and optimize every step so you
//               can focus on preparing.
//             </p>
//           </div>
//           <div className={styles.stepIcon}>
//             <PiHandshakeDuotone />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
