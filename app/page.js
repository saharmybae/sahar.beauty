'use client';

import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  /* lecture vidéo ping-pong */
  useEffect(() => {
    const v = document.getElementById('bgVideo');
    if (!v) return;
    let rev = false;
    const loop = () => {
      rev = !rev;
      v.playbackRate = rev ? -0.8 : 0.8;
      v.currentTime  = rev ? v.duration - 0.01 : 0.01;
      v.play();
    };
    v.addEventListener('ended', loop);
    return () => v.removeEventListener('ended', loop);
  }, []);

  return (
    <>
      {/* HERO */}
      <div className={styles.hero}>
        <video id="bgVideo" autoPlay muted playsInline className={styles.video}>
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Sahâr Beauty Lounge</h1>
          <p className={styles.subtitle}>
            Élégance&nbsp;·&nbsp;Précision&nbsp;·&nbsp;Raffinement
          </p>
          <a href="#services" className={styles.button}>
            Découvrir nos prestations
          </a>
        </div>
      </div>

      {/* PRESTATIONS */}
      <section id="services" className={styles.section}>
        <h2>Nos Prestations</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Nail Art</h3>
            <p>Strass, marbre, dessins exclusifs.</p>
          </div>
          <div className={styles.card}>
            <h3>Gel Permanent</h3>
            <p>Brillance ou matte chic, tenue parfaite.</p>
          </div>
          <div className={styles.card}>
            <h3>Pose Chablon</h3>
            <p>Sculpture sans capsule, effet naturel.</p>
          </div>
          <div className={styles.card}>
            <h3>Pack Signature</h3>
            <p>Chablon + gel + déco minimal chic (-15 %).</p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section id="gallery" className={styles.section}>
        <h2>Galerie</h2>
        <div className={styles.grid}>
          <img src="/gallery1.jpg" alt="Pose 1" className={styles.galleryImg} />
          <img src="/gallery2.jpg" alt="Pose 2" className={styles.galleryImg} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <form
          action="https://formspree.io/f/xyyylobk"
          method="POST"
          className={styles.form}
        >
          <input type="text" name="name" placeholder="Nom" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Votre message…" required />
          <button type="submit">Envoyer</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        Rue de la Poste, Khezema, Sousse — Mardi&nbsp;→&nbsp;Dimanche 10h-20h<br />
        Instagram | TikTok | Facebook
      </footer>
    </>
  );
}
