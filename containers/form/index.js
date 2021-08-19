import React, { Fragment, useState } from 'react';
import styles from './form.module.css'

export default function Form(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState(null);

  if(props.clear && selectedFile) {
    window.location.href = '/'
  }

  const handleFileChange = (e) => {
    if(e.target.files[0].type !== 'audio/mpeg') {
      return window.alert('only audio files are allowed')
    }
    const reader = new FileReader();
    reader.addEventListener("load", fileLoadedEvent => {
      const image = fileLoadedEvent.target.result;
      setSelectedFile(image)
    })
    reader.readAsDataURL(e.target.files[0]);
    setFileName(e.target.files[0].name);
  }

  return (
    <Fragment>
      <div className={styles.formContainer}>
        <form className={styles.mainForm}>
          <h3 className={styles.join}>Join us to create a Global playlist!</h3>
          <div className={styles.formInput}>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" className={styles.textInput}/>
            <label>Song Title</label>
            <input type="text" placeholder="Enter song title" className={styles.textInput}/>
            <label>Author</label>
            <input type="text" placeholder="Enter author name" className={styles.textInput}/>
          </div>
          <div>
            <div className={styles.fileSection} >
              <label className={styles.fileSelect}>
                <div className={styles.selectButton}>
                  <div className={styles.fileBtn}>{!fileName ? "Select File" : "Upload File"}</div>
                </div>
                <input type="file" onChange={handleFileChange}/>
              </label>
            </div>
            <div>
              {
                fileName && (
                  <div>
                    <b className={styles.miniText}>Selected File</b>: 
                    <span style={{color: "red", marginLeft: "10px"}} className={styles.miniText}>
                      {fileName}
                    </span>
                  </div>
                )
              }
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  )
}