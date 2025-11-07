"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./heroSection.module.css";
import { HeroSectionData } from "@/src/types/heroSectionData";

type Props = {
  data: HeroSectionData;
};

export default function HeroSectionClient({ data }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll university strip
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let scrollPos = 0;
    const animate = () => {
      scrollPos += 1;
      if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
      el.scrollLeft = scrollPos;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <section className={styles.heroContainer}>
      {/* === Top Badges === */}
      <div className={styles.heroBadges}>
        {data.badges.map((badge) => (
          <span key={badge} className={styles.heroBadgeItem}>
            {badge}
          </span>
        ))}
      </div>

      {/* === Headline === */}
      <h1 className={styles.heroHeadline}>
        {data.headlineMain}{" "}
        <span className={styles.heroHighlight}>{data.headlineHighlight}</span>
      </h1>

      {/* === Description === */}
      <p className={styles.heroDescription}>{data.description}</p>

      {/* === CTA === */}
      <Link href={data.cta.href} className={styles.heroCTAButton}>
        {data.cta.label}
      </Link>

      {/* === Trusted by 260+ Users === */}
      <div className={styles.heroUserTrust}>
        <div className={styles.heroUserIcons}>
          <div className={styles.heroUserCircle}></div>
          <div className={styles.heroUserCircle}></div>
          <div className={styles.heroUserCircle}></div>
        </div>
        <p className={styles.heroUserText}>{data.trustText}</p>
      </div>

      {/* === Universities Section === */}
      <div className={styles.heroUniversityContainer}>
        <p className={styles.heroUniversityHeading}>{data.universityHeading}</p>
        <div ref={scrollRef} className={styles.heroUniversityStrip}>
          {data.universities.map((name: string) => (
            <div key={name} className={styles.heroUniversityCard}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
