import styles from "./homePageVideo.module.css";

export default function HomePageVideo() {
  return (
    <section id="demo" className={styles.videoContainer}>
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
        <span></span>
      </div>
    </section>
  );
}
