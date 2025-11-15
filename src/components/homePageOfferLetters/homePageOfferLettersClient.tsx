"use client";

import { useEffect, useRef } from "react";
import styles from "./homePageOfferLetters.module.css";
import Image from "next/image";

export default function HomePageOfferLettersClient() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // simple marquee scroll
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    let scrollPos = 0;
    const scroll = () => {
      scrollPos += 1;
      if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
      el.scrollLeft = scrollPos;
      requestAnimationFrame(scroll);
    };
    scroll();
  }, []);

  return (
    <section className={styles.offerSection}>
      <h2 className={styles.offerHeading}>500+ students got offer letters</h2>

      <div className={styles.offerMarqueeWrapper}>
        <div ref={marqueeRef} className={styles.offerMarquee}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className={styles.offerCard}>
              {/* Replace this block image later */}
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/heroResultImage.png"
                  alt={`Offer Letter ${i}`}
                  width={300}
                  height={400}
                  className={styles.offerImage}
                />
              </div>

              {/* Profile Overlay */}
              <div className={styles.offerOverlay}>
                <div className={styles.profileInfo}>
                  <div className={styles.avatar}></div>
                  <div>
                    <p className={styles.name}>Robert Dwayne</p>
                    <p className={styles.company}>Blackrock</p>
                  </div>
                </div>
                <div className={styles.linkedinIcon}>GH</div>
              </div>
            </div>
          ))}

          {/* duplicate for infinite loop */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={`dup-${i}`} className={styles.offerCard}>
              <div className={styles.imagePlaceholder}>
                <Image
                  src="/images/heroResultImage.png"
                  alt={`Offer Letter ${i}`}
                  width={300}
                  height={400}
                  className={styles.offerImage}
                />
              </div>

              <div className={styles.offerOverlay}>
                <div className={styles.profileInfo}>
                  <div className={styles.avatar}></div>
                  <div>
                    <p className={styles.name}>Robert Dwayne</p>
                    <p className={styles.company}>Blackrock</p>
                  </div>
                </div>
                <div className={styles.linkedinIcon}>in</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
