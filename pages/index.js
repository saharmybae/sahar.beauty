import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  /* Lecture vidéo « ping-pong » */
  useEffect(() => {
    const v = document.getElementById('bgVideo');
    if (!v) return;
    let reverse = false;

    const loop = () => {
      reverse = !reverse;
      v.playbackRate = reverse ? -0.8 : 0.8;      // ralenti chic
      v.currentTime  = reverse ? v.duration - 0.01 : 0.01;
      v.play();
    };

    v.addEventListener('ended', loop);
    return () => v.removeEventListener('ended', loop);
  }, []);

  return (
    <>
      <Head>
        <title>Sahâr Beauty Lounge</title>
        <meta name="description" content="Luxe & élégance à Sousse – Onglerie haut de gamme" />
      </Head>

      {/* HERO avec vidéo de fond */}
      <div className={styles.hero}>
        <video
          id="bgVideo"
          autoPlay
          muted
          playsInline
          className={styles.video}
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        <div className={styles.overlay}>
          <h1 className={styles.title}>Sahâr Beauty Lounge</h1>
          <p className={styles.subtitle}>Élégance&nbsp;&nbsp;·&nbsp;&nbsp;Précision&nbsp;&nbsp;·&nbsp;&nbsp;Raffinement</p>
          <a href="#services" className={styles.button}>Découvrir nos prestations</a>
        </div>
      </div>

      {/* PRESTATIONS */}
      <section id="services" className={styles.section}>
        <h2>Nos Prestations</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Nail&nbsp;Art</h3>
            <p>Strass, marbre, dessins exclusifs – créations 100 % personnalisées.</p>
          </div>
          <div className={styles.card}>
            <h3>Gel&nbsp;Permanent</h3>
            <p>Brillance parfaite ou matte chic, tenue longue durée.</p>
          </div>
          <div className={styles.card}>
            <h3>Pose&nbsp;Chablon</h3>
            <p>Sculpture sans capsule : solidité &amp; élégance naturelle.</p>
          </div>
          <div className={styles.card}>
            <h3>Pack&nbsp;Signature</h3>
            <p>Chablon&nbsp;+&nbsp;gel&nbsp;+ nail art minimal chic.<br />–15 % lancement.</p>
          </div>
        </div>
      </section>

      {/* GALERIE – remplace les src par tes photos */}
      <section id="gallery" className={styles.section}>
        <h2>Galerie</h2>
        <div className={styles.grid}>
          <img src="/gallery1.jpg" alt="Pose 1" className={styles.galleryImg} />
          <img src="/gallery2.jpg" alt="Pose 2" className={styles.galleryImg} />
          {/* Ajoute autant d’images que tu veux */}
        </div>
      </section>

      {/* CONTACT – formulaire Formspree */}
      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <form
          action="https://formspree.io/f/xyyylobk"  /* remplace par ton ID Formspree */
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
        Instagram&nbsp;|&nbsp;TikTok&nbsp;|&nbsp;Facebook
      </footer>
    </>
  );
}
