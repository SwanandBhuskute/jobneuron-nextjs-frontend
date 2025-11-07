"use client";

import { useState, useEffect, useRef } from "react";
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
    { name: "Microsoft", icon: <FaMicrosoft /> },
    { name: "Amazon", icon: <FaAmazon /> },
    { name: "Google", icon: <FaGoogle /> },
    { name: "Apple", icon: <FaApple /> },
    { name: "Meta", icon: <FaFacebook /> },
    { name: "Netflix", icon: <SiNetflix /> },
    { name: "Tesla", icon: <SiTesla /> },
    { name: "Twitter (X)", icon: <RiTwitterXLine /> },
  ];

  const testimonials = [
    "Flashfire helped me land 3 interviews in under a week. Unbelievable!Flashfire helped me land 3 interviews in under a week. Unbelievable!",
    "The AI resume booster works like magic — recruiters started replying fast!Flashfire helped me land 3 interviews in under a week. Unbelievable!Flashfire helped me land 3 interviews in under a week. Unbelievable!",
    "I cracked my Google interview thanks to the preparation modules. Flashfire helped me land 3 interviews in under a week. Unbelievable!Flashfire helped me land 3 interviews in under a week. Unbelievable!",
    "The dashboard keeps me accountable and saves me hours every day. Flashfire helped me land 3 interviews in under a week. Unbelievable!Flashfire helped me land 3 interviews in under a week. Unbelievable!Flashfire helped me land 3 interviews in under a week. Unbelievable!",
    "It’s the smartest tool for job seekers. Just use it — worth every second.Flashfire helped me land 3 interviews in under a week. Unbelievable!Flashfire helped me land 3 interviews in under a week. Unbelievable!Flashfire helped me land 3 interviews in under a week. Unbelievable!",
  ];

  const [activeIndex, setActiveIndex] = useState(1); // start from first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Create cloned array (last → first clones)
  const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  // Auto-scroll every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle looping jump
  useEffect(() => {
    if (!trackRef.current) return;

    if (activeIndex === extendedTestimonials.length - 1) {
      // reached last (clone of first)
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(1); // jump to first real
      }, 800);
    }

    if (activeIndex === 0) {
      // reached first (clone of last)
      setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(extendedTestimonials.length - 2); // jump to last real
      }, 800);
    }
  }, [activeIndex, extendedTestimonials.length]);

  return (
    <section className={styles.milestoneContainer}>
      {/* === Top Stats Cards === */}
      <div className={styles.statsContainer}>
        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>💼</div>
          <h3>
            <span className={styles.highlight}>200x</span> Return on Investment
          </h3>
          <p>
            Clients see 200x ROI with higher salaries, faster offers, and lasting
            growth.
          </p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>📄</div>
          <h3>
            <span className={styles.highlight}>300k+</span> Application Sent
            Smartly
          </h3>
          <p>
            100k+ applications optimized with ATS resumes for maximum visibility
            and callbacks.
          </p>
        </div>

        <div className={styles.statCard}>
          <div className={styles.iconPlaceholder}>⏰</div>
          <h3>
            <span className={styles.highlight}>1 Week</span> to Your First
            Interview Call
          </h3>
          <p>
            With Flashfire AI Members get their first interview call in just 7
            days.
          </p>
        </div>
      </div>

      {/* === Divider Title === */}
      <h4 className={styles.sectionHeading}>INTERVIEW CRACKED</h4>

      {/* === Infinite Carousel === */}
      <div className={styles.testimonialCarousel}>
        <div
          // ref={trackRef}
          className={styles.carouselTrack}
          // style={{
          //   transform: `translateX(-${activeIndex * 100}%)`,
          //   transition: isTransitioning ? "transform 0.8s ease-in-out" : "none",
          // }}
        >
          {extendedTestimonials.map((text, i) => (
            <div
              key={i}
              className={`${styles.testimonialCard} ${
                i === activeIndex ? styles.testimonialActive : ""
              }`}
            >
              <div className={styles.companyHeader}>
                <div className={styles.companyLogoIcon}>
                  {footerCompanies[i % footerCompanies.length].icon}
                </div>
                <p className={styles.companyName}>
                  {footerCompanies[i % footerCompanies.length].name}
                </p>
              </div>

              <p className={styles.testimonialText}>{text}</p>

              <div className={styles.userInfo}>
                <div className={styles.userAvatar}></div>
                <div>
                  <p className={styles.userName}>Vee</p>
                  <p className={styles.userCompany}>
                    {footerCompanies[i % footerCompanies.length].name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Footer Company Logos === */}
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
