import Image from "next/image";
import styles from "./homePagePTNote.module.css";
import { FaWhatsapp } from "react-icons/fa";

export default function HomePagePTNote() {
  return (
    <section className={styles.ptNoteSection}>
      <div className={styles.container}>
        {/* === LEFT: Quote Card === */}
        <div className={styles.quoteCard}>
          <p className={styles.tagline}>HELPING 100+ JOB SEEKERS</p>

          <blockquote className={styles.quote}>
            “Every line of code we write is to help someone hear back -
            finally.”
          </blockquote>

          <div className={styles.authorRow}>
            <div className={styles.authorInfo}>
              <p className={styles.authorName}>Pranjal Tripathi</p>
              <p className={styles.authorRole}>CTO </p>
            </div>
            <p className={styles.pipe}>|</p>
            <div className={styles.brandLogo}>
              <Image
                src="/images/jobneuron-logo-white.png"
                alt="Jobneuron Logo"
                width={20}
                height={20}
                className={styles.brandLogoImg}
              />
            </div>
            <div className={styles.brandLogoText}>Jobneuron</div>
          </div>

          <div className={styles.authorImage}>
            <Image
              src="/images/pranjal-tripathi.png"
              alt="Pranjal Tripathi"
              width={160}
              height={160}
              className={styles.profileImage}
            />
          </div>
        </div>

        {/* === RIGHT: WhatsApp CTA === */}
        <div className={styles.whatsappCard}>
          <h3>
            Not sure where to start? <br />
            Let’s talk.
          </h3>
          <p>Message us on WhatsApp and we’ll guide you step-by-step.</p>

          <button className={styles.whatsappButton}>
            <FaWhatsapp className={styles.whatsappIcon} />
            Connect on WhatsApp
          </button>

          <div className={styles.bgIcon}>💬</div>
        </div>
      </div>
    </section>
  );
}
