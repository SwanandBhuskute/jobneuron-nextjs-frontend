import styles from "./homePagePricingPlans.module.css";
import PricingCard from "./pricingCard";

export default function HomePagePricingPlans() {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.header}>
        <h2>Find the Plan That Matches Your Ambition</h2>
        <p>
          Every plan includes AI-driven role discovery, personalized resume
          alignment, and automated application delivery —
          <strong> saving you 100+ hours every month.</strong>
        </p>
      </div>

      <div className={styles.cardsContainer}>
        <PricingCard
          title="LAUNCH"
          subTitle="250 Applications"
          description="Great for fresh graduates & early-career professionals"
          price="$99"
          oldPrice="$199"
          features={[
            "Flexible pace of application delivery",
            "AI-screened role recommendations",
            "ATS-compliant resume refinement",
            "Starter insights dashboard",
          ]}
          addOn={true}
          highlight={false}
        />

        <PricingCard
          title="ACCELERATOR"
          tag="BEST VALUE"
          subTitle="500 Applications"
          description="Ideal for professionals transitioning or leveling up"
          price="$249"
          oldPrice="$349"
          features={[
            "Everything in Launch",
            "Priority-weighted job targeting",
            "Growth analytics & progress tracking",
            "LinkedIn profile enhancement",
            "Role-specific prep guides",
          ]}
          addOn={true}
          highlight={false}
        />

        <PricingCard
          title="VELOCITY"
          tag="MOST POPULAR"
          subTitle="1200 Applications"
          description="Perfect for senior, specialized, or leadership roles"
          price="$499"
          oldPrice="$599"
          features={[
            "Everything in Accelerator",
            "Executive-level opportunity targeting",
            "Portfolio & project presentation revamp",
            "Custom cover letter creation",
            "Direct recruiter outreach support",
            "Personalized communication templates",
          ]}
          addOn={true}
          highlight={true}
        />
      </div>

      {/* === Risk-Free Section === */}
      <div className={styles.guaranteeBox}>
        <div className={styles.guaranteeText}>
          <h3>A Completely Safe Investment</h3>
          <p>
            If your interview response rate doesn’t improve, we’ll send{" "}
            <span className={styles.highlight}>
              an additional 150–200 targeted applications at no cost.
            </span>{" "}
            <br />
            Because JobNeuron believes in measurable outcomes — not empty
            promises.
          </p>
        </div>
        <div className={styles.guaranteeLogo}>
          <span className={styles.guaranteeIcon}>🔥</span>
          <p>JobNeuron Assurance</p>
        </div>
      </div>
    </section>
  );
}
