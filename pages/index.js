import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import Form from '../containers/form';
import Player from '../containers/player';
import Queue from '../containers/queue';

export default function Home() {
  const [showUpload, setShowUpload] = useState(false);
  const [clear, setClear] = useState(true)
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <button 
          className={styles.uploadBtn}
          onClick={() => {
            setShowUpload(!showUpload);
            setClear(!clear);
          }}
        >
          {!showUpload ? "Upload" : "Cancel"}
        </button>
      </div>
      <div className={styles.sec}>
        <div className={(showUpload) ? styles.upload : styles.dontShow}>
          <Form clear={clear}/>
        </div>
        <Player/>
        <Queue/>
      </div>
    </div>
  )
}
