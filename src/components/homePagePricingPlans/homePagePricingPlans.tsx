import styles from "./homePagePricingPlans.module.css";
import PricingCard from "./pricingCard";

export default function HomePagePricingPlans() {
  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.header}>
        <h2>Choose Your Career Acceleration Plan</h2>
        <p>
          All plans include our AI-powered job matching and application
          automation.
          <strong> Save 150+ hours monthly</strong> while we work for you 24/7.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        <PricingCard
          title="IGNITE"
          subTitle="250 Applications"
          description="Perfect for entry-level professionals"
          price="$199"
          oldPrice="$299"
          features={[
            "No Time Constraint",
            "AI-powered job matching",
            "Resume Optimization",
            "Basic Analytical Dashboard",
          ]}
          addOn={true}
          highlight={false}
        />

        <PricingCard
          title="PROFESSIONAL"
          tag="ECONOMICAL"
          subTitle="500 Applications"
          description="Most popular for mid-level professionals"
          price="$349"
          oldPrice="$449"
          features={[
            "Everything in Ignite",
            "Priority job matching",
            "Advance analytics & insights",
            "LinkedIn profile optimization",
            "Interview preparation tips",
          ]}
          addOn={true}
          highlight={false}
        />

        <PricingCard
          title="EXECUTIVE"
          tag="MOST POPULAR"
          subTitle="1200 Applications"
          description="For senior professionals & executive"
          price="$599"
          oldPrice="$699"
          features={[
            "Everything in Professional",
            "Executive-level job targeting",
            "Portfolio development",
            "Cover Letters",
            "Network introduction requests",
            "Emailing Recruiters",
          ]}
          addOn={true}
          highlight={true}
        />
      </div>

      {/* === Risk-Free Section === */}
      <div className={styles.guaranteeBox}>
        <div className={styles.guaranteeText}>
          <h3>100% Risk Free</h3>
          <p>
            If you didn’t land interviews, we’ll send{" "}
            <span className={styles.highlight}>
              150–200 more applications, free of charge.
            </span>{" "}
            <br />
            Because at Jobneuron, you only pay for progress.
          </p>
        </div>
        <div className={styles.guaranteeLogo}>
          <span className={styles.guaranteeIcon}>🔥</span>
          <p>Jobneuron Guarantee</p>
        </div>
      </div>
    </section>
  );
}
