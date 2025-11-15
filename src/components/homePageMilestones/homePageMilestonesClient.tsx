"use client";

import styles from "./homePageMilestones.module.css";
import {
  FaMicrosoft,
  FaAmazon,
  FaGoogle,
  FaApple,
  FaFacebook,
} from "react-icons/fa";
import { SiNetflix, SiTesla } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";

export default function HomePageMilestonesClient() {
  const footerCompanies = [
    { name: "Microsoft", icon: <FaMicrosoft color="#0078D4" /> },
    { name: "Amazon", icon: <FaAmazon color="#FF9900" /> },
    { name: "Google", icon: <FaGoogle color="#4285F4" /> },
    { name: "Apple", icon: <FaApple color="#555555" /> },
    { name: "Meta", icon: <FaFacebook color="#1877F2" /> },
    { name: "Netflix", icon: <SiNetflix color="#E50914" /> },
    { name: "Tesla", icon: <SiTesla color="#CC0000" /> },
    { name: "Twitter (X)", icon: <RiTwitterXLine color="#000000" /> },
  ];

  const testimonials = [
    {
      company: "Google",
      text: "JobNeuron guided me through my entire application process — I landed interviews at Google and Meta within 10 days!",
      user: "Arjun Sharma",
      role: "SWE Intern",
    },
    {
      company: "Amazon",
      text: "The resume booster and job tracker saved me hours daily. Got an Amazon offer in just 3 weeks!",
      user: "Sophia Patel",
      role: "Software Engineer",
    },
    {
      company: "Microsoft",
      text: "From job search chaos to clarity — I received 4 interview calls in my first week using JobNeuron!",
      user: "Ravi Kumar",
      role: "Full Stack Developer",
    },
    {
      company: "Netflix",
      text: "Loved how the AI personalizes my applications — landed at Netflix as a Product Analyst!",
      user: "Nisha Jain",
      role: "Product Analyst",
    },
    {
      company: "Tesla",
      text: "JobNeuron made everything structured and automated — helped me secure Tesla interviews easily!",
      user: "Karan Mehta",
      role: "Mechanical Engineer",
    },
  ];

  return (
    <section className={styles.milestoneContainer}>
      {/* === Section Heading === */}
      <h4 className={styles.sectionHeading}>INTERVIEWS CRACKED BY OUR USERS</h4>

      {/* === Continuous Marquee Testimonials === */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {[...testimonials, ...testimonials].map((t, i) => {
            const company = footerCompanies.find((c) => c.name === t.company);
            return (
              <div key={i} className={styles.marqueeCard}>
                <div className={styles.companyHeader}>
                  <div className={styles.companyLogoIcon}>{company?.icon}</div>
                  <p className={styles.companyName}>{t.company}</p>
                </div>
                <p className={styles.testimonialText}>{t.text}</p>
                <div className={styles.userInfo}>
                  <div className={styles.userAvatar}></div>
                  <div>
                    <p className={styles.userName}>{t.user}</p>
                    <p className={styles.userCompany}>{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* === Top Stats Cards === */}
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>💼</div>
          <h3>
            <span className={styles.highlight}>200x</span> Return on Investment
          </h3>
          <p>
            Clients see 200x ROI with higher salaries, faster offers, and
            lasting growth.
          </p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>📄</div>
          <h3>
            <span className={styles.highlight}>300k+</span> Applications Sent
            Smartly
          </h3>
          <p>
            Over 300k applications optimized with ATS-friendly resumes and
            custom cover letters.
          </p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>⏰</div>
          <h3>
            <span className={styles.highlight}>1 Week</span> to Your First
            Interview
          </h3>
          <p>
            JobNeuron users report getting interview calls within their first 7
            days of usage.
          </p>
        </div>
      </div>

      {/* === Footer Logos === */}
      <div className={styles.footerLogos}>
        {footerCompanies.map((company, i) => (
          <span key={i}>
            <span className={styles.footerIcon}>{company.icon}</span>
            {company.name}
          </span>
        ))}
      </div>
    </section>
  );
}
