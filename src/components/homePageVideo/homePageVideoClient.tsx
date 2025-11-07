"use client";
import styles from "./homePageVideo.module.css";

export default function HomePageVideoClient() {
  return (
    <section className={styles.videoContainer}>
      <div className={styles.videoWrapper}>
        <video
          className={styles.videoPlayer}
          controls
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className={styles.videoCaption}>
        See how Flashfire helps you land interviews in days, not weeks.
      </p>
    </section>
  );
}
