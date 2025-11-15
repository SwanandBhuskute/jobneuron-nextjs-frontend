"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./homePageHappyUsers.module.css";

export default function HomePageHappyUsers() {
  const videos = [
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      name: "John Doe",
      company: "Amazon",
      tilt: "-1deg",
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      name: "Danny Bishop",
      company: "Google",
      tilt: "2deg",
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      name: "Richie Rich",
      company: "IBM",
      tilt: "-2deg",
    },
  ];

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
    const videoEl = document.getElementById(
      `userVideo-${index}`,
    ) as HTMLVideoElement;
    if (videoEl) {
      videoEl.play();
    }
  };

  return (
    <section id="testimonials" className={styles.happySection}>
      {/* === Top Orange Section === */}
      <div className={styles.orangeSection}>
        <h2 className={styles.title}>100+ Happy User’s Love!</h2>

        {/* Masonry Layout */}
        <div className={styles.masonryGallery}>
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className={styles.masonryItem}>
              <Image
                src="/images/blogImg.jpg"
                alt="Jobneuron user review"
                width={400}
                height={300}
                className={styles.reviewImage}
              />
            </div>
          ))}
        </div>

        {/* Center Circle */}
        <div className={styles.centerCircle}>
          <div className={styles.logoPlaceholder}>⚡</div>
        </div>
      </div>

      {/* === Bottom White Section === */}
      <div className={styles.whiteSection}>
        <div className={styles.videoRow}>
          {videos.map((video, index) => (
            <div
              key={index}
              className={styles.videoCard}
              style={{
                transform: `rotate(${video.tilt})`,
              }}
            >
              <video
                id={`userVideo-${index}`}
                className={styles.userVideo}
                controls={playingIndex === index}
                muted
                loop
                playsInline
                onPlay={() => setPlayingIndex(index)}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support HTML video.
              </video>

              {/* Play Button Overlay */}
              {playingIndex !== index && (
                <div
                  className={styles.playOverlay}
                  onClick={() => handlePlay(index)}
                >
                  ▶
                </div>
              )}

              {/* User Info (hidden when playing) */}
              {playingIndex !== index && (
                <div className={styles.videoInfo}>
                  <p className={styles.userName}>{video.name}</p>
                  <p className={styles.userCompany}>{video.company}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
