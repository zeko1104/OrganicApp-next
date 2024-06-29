// components/TextSlider.js

import React from 'react';
import styles from '@/app/style/style.module.css';

const TextSlider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        <div className={styles.slide}>Locally sourced,sustainably grown.</div>
        <div className={styles.slide}>Eat fresh, live healthy.</div>
        <div className={styles.slide}>Locally sourced,sustainably grown.</div>
        <div className={styles.slide}>Eat fresh, live healthy.</div>
        {/* Repeat slides to ensure smooth scrolling */}
        <div className={styles.slide}>Locally sourced,sustainably grown.</div>
        <div className={styles.slide}>Eat fresh, live healthy.</div>
        <div className={styles.slide}>Locally sourced,sustainably grown.</div>
        <div className={styles.slide}>Eat fresh, live healthy.</div>
      </div>
    </div>
  );
};

export default TextSlider;
