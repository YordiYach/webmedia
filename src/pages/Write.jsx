import React, { useState } from 'react'
import styles from './Write.module.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.add}>
      <div className={styles.content}>
        <input type="text" placeholder='Title' className={styles.inputTitle} />
        <div className={styles.editorContainer}>
          <ReactQuill className={styles.editor} theme='snow' value={value} onChange={setValue} />
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.item}>
          <h1>Publis</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{ display: "none" }} type="file" id='file' />
          <label className={styles.file} htmlFor="file">Upload Image</label>
          <div className={styles.buttons}>
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className={styles.item}>
          <h1 className={styles.category}>Category</h1>

          <div className={styles.cat}>
            <input type="radio" name='cat' value="art" id='art' />
            <label htmlFor="art">Art</label>
          </div>

          <div className={styles.cat}>
            <input type="radio" name='cat' value="science" id='science' />
            <label htmlFor="science">Science</label>
          </div>
    
          <div className={styles.cat}>
            <input type="radio" name='cat' value="technology" id='technology' />
            <label htmlFor="technology">Technology</label>
          </div>



          <div className={styles.cat}>
            <input type="radio" name='cat' value="cinema" id='cinema' />
            <label htmlFor="cinema">Cinema</label>
          </div>

          <div className={styles.cat}>
            <input type="radio" name='cat' value="design" id='design' />
            <label htmlFor="design">Design</label>
          </div>

          <div className={styles.cat}>
            <input type="radio" name='cat' value="food" id='food' />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write