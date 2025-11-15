import Image from "next/image";
import styles from "./homePageCareerCTA.module.css";
import { FaBolt } from "react-icons/fa";

export default function HomePageCareerCTA() {
  return (
    <section className={styles.careerSection}>
      <div className={styles.container}>
        {/* === LEFT: Content === */}
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>
            Starting Your Career? We Help You Stand Out Instantly.
          </h2>

          <p className={styles.subtext}>
            Getting your first break shouldn’t feel overwhelming.{" "}
            <strong>
              JobNeuron builds your professional presence, applies to high-fit
              roles, and boosts your visibility from day one.
            </strong>
          </p>

          <ul className={styles.featuresList}>
            <li>
              <FaBolt className={styles.icon} /> A recruiter-friendly resume
              tailored for every application
            </li>
            <li>
              <FaBolt className={styles.icon} /> LinkedIn makeover that brings
              you into search results
            </li>
            <li>
              <FaBolt className={styles.icon} /> Smart job targeting based on
              your background & goals
            </li>
            <li>
              <FaBolt className={styles.icon} /> Weekly performance insights +
              strategy updates
            </li>
          </ul>

          <div className={styles.ctaRow}>
            <button className={styles.ctaButton}>
              Book Your Free Career Session
            </button>
            <div className={styles.userNote}>
              <div className={styles.userAvatars}>
                <Image
                  src="/images/user1.jpg"
                  alt="user1"
                  width={28}
                  height={28}
                  className={styles.avatar}
                />
                <Image
                  src="/images/user2.jpg"
                  alt="user2"
                  width={28}
                  height={28}
                  className={styles.avatar}
                />
                <Image
                  src="/images/user3.jpg"
                  alt="user3"
                  width={28}
                  height={28}
                  className={styles.avatar}
                />
              </div>
              <p>
                Trusted by <span className={styles.highlight}>250+</span>{" "}
                early-career candidates building a strong start.
              </p>
            </div>
          </div>
        </div>

        {/* === RIGHT: Stats Grid === */}
        <div className={styles.rightGrid}>
          <div className={styles.rightGridTop}>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>INTERVIEW BOOST</p>
              <h3 className={styles.statValue}>90%</h3>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>OFFERS SECURED</p>
              <h3 className={styles.statValue}>60+</h3>
            </div>
          </div>
          <div className={styles.rightGridBottom}>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>TIME SAVED</p>
              <h3 className={styles.statValue}>120+</h3>
            </div>
            <div className={styles.statCard}>
              <p className={styles.statLabel}>ON-DEMAND SUPPORT</p>
              <h3 className={styles.statValue}>24/7</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
