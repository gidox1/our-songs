import React, { Fragment, useState } from 'react';
import styles from './queue.module.css';
import moment from 'moment';
const dayFormat = 'Do MMMM YYYY';

export default function Queue() {
  const [data, setData] = useState([1,2,3,4,5]);
  return (
    <Fragment>
      <div className={styles.container}>
        <h3 className={styles.topHeader}>All Tracks :</h3>
        {
          data.length > 1 ? Array.isArray(data) && data.map((info, key) => (
            <div className={styles.songSection}>
              <div style={{display: "flex", flexFlow: "row"}}>
                <p style={{color: "white"}}>{info})</p>
                <p style={{marginLeft: '10px', color: "white"}}>I love you by - <label style={{color: "yellow"}}>Marc Anthony</label></p>
              </div>
              <label style={{marginLeft: '6%', color: "white"}}>Uploaded by - 
                <label style={{color: "yellow"}}> Lord Vic </label>
                <span style={{marginLeft: '20%'}}>
                  {moment().format(dayFormat)}
                </span>
              </label>
            </div>
          ))
          : (
            <div className={styles.songSection}>
              <p style={{color: "white"}}>No Songs available</p>
            </div>
          )
        }
      </div>
    </Fragment>
  )
}