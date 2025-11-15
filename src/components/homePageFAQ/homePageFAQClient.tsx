"use client";

import { useState } from "react";
import styles from "./homePageFAQ.module.css";
import { FaPlus, FaTimes } from "react-icons/fa";
import { questionsData } from "@/src/data/questionsData";
import Image from "next/image";

export default function HomePageFAQClient() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.header}>
        <h2>Your Questions, Answered Clearly.</h2>
        <p>
          Job search can feel overwhelming - so we made this FAQ simple, honest,
          and to-the-point.
        </p>
      </div>

      <div className={styles.faqContainer}>
        {questionsData.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              activeIndex === index ? styles.active : ""
            }`}
          >
            <button
              className={styles.faqQuestion}
              onClick={() => handleToggle(index)}
            >
              <span>{faq.question}</span>
              <span className={styles.icon}>
                {activeIndex === index ? <FaTimes /> : <FaPlus />}
              </span>
            </button>

            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* === Book a Demo CTA === */}
      <div className={styles.demoSectionOuter}>
        <div className={styles.demoSection}>
          <h5 className={styles.demoSubheading}>
            STILL UNSURE? WE’RE HERE TO HELP.
          </h5>

          <h2 className={styles.demoHeading}>
            BOOK A DEMO{" "}
            <span className={styles.fireIcon}>
              <Image
                src="/images/jobneuron-logo-white.png"
                alt="JobNeuron logo"
                width={45}
                height={45}
              />
            </span>{" "}
            CALL
          </h2>

          <p className={styles.demoText}>
            Let’s walk you through how JobNeuron works, how we tailor your
            applications, and how we help candidates land interviews faster than
            traditional job hunting.
          </p>

          <button className={styles.demoButton}>Schedule My Demo →</button>

          <p className={styles.demoNote}>
            Calls fill quickly — secure your slot while it’s available.
          </p>
        </div>
      </div>
    </section>
  );
}
