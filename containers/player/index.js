import React, { Fragment, useState } from 'react';
import styles from './player.module.css';
import data from './data';

export default function Player() {
  const currentIndex = Math.floor(Math.random()* 6);
  const image = data[currentIndex];
  const [imageIndex, setImageIndex] = useState(1);
  const [rotate, setRotate] = useState(false);

  const played = () => {
    setRotate(true);
  }
  const paused = () => {
    setRotate(false);
  }

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header_}>
            <p className={styles.headerText}>These are our Songs!</p>
          </div>
          <div className={styles.imageSec}>
            <div className={(rotate) ? styles.rotate : styles.circle}>
              <img className={
                  styles.image_
                } 
                style={{
                  width: '100%', 
                  height:'100%',
                  borderRadius: '50%'
                }} 
                src={data[imageIndex]}
              />
            </div>
          </div>
          <div className={styles.playSection}>
            <div className={styles.media}>
              <audio onPlay={played} onPause={paused} controls style={{width: '90%'}}>
                <source src="https://res.cloudinary.com/passionpolisapi/video/upload/v1629369007/James-Arthur-Ft-Emeli-Sande-Roses-via-Naijafinix.com__yqjycl.mp3" type="audio/mpeg"/>
                  Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}