import React from 'react'
import styles from './Single.module.css'
import Delete from '../imgs/delete.png'
import Edit from '../imgs/edit.png'
import { Link } from 'react-router-dom'
import Menu from '../Components/Menu'

const Single = () => {
  return (
    <div className={styles.single}>
      <div className={styles.content}>
        <img src="https://allmusicspain.com/wp-content/uploads/2023/02/Cn8wY6p_ZtU.jpg" className={styles.img} alt="" />
        <div className={styles.user}>
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" className={styles.userimg} alt="" />

          <div className="info">
            <span className={styles.span}>Jhon</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className={styles.edit}>
            <img className={styles.icons} src={Delete} alt="delete" />
            <Link to={'/write?edit=2'}>
              <img className={styles.icons} src={Edit} alt="edit" />
            </Link>
          </div>
        </div>
        <h1 className={styles.h1}>
          Skrillex - Quest for Fire
        </h1>
        <p className={styles.p}>
          Skrillex is what tech folks would call a disruptor. For decades, there was only dance music: a patchy network of underground nodes and connections that made sporadic incursions into the mainstream. Then, sometime in 2010, yet seemingly overnight, there was Electronic Dance Music. It was as if Steve Jobs had clicked his little clicker and shown us the future.
        </p>
        <p className={styles.p}>
          Thousands of people used the word “dubstep” for the first time because of Skrillex. To this day, n00bs are still getting flamed on r/skrillex for not knowing who Benga and Coki are. (They are “the Croydon dub guys that started this,” as thanked by Skrillex after winning three Grammys in 2012.) Sonny Moore changed the definition of a genre, and the heads hated him for it. Here was an emo kid from Los Angeles with half a haircut, making $15 million a year from a corpulent mutation of real soundsystem culture so that raging frat dudes and lidded suburban teens could run amok on giant racetracks while a few industry suits cashed in.
        </p>
        <p className={styles.p}>
          The snobby response wasn’t just about the money, the perceived inauthenticity, or that EDM was such a straight, white, and male phenomenon. It was very much also about the music: the fairground drops, the skrrr-eechy synth leads, the idiotic samples, all the ways a bassline can be compared to an unwell digestive system. But Skrillex was the master of brostep, a technical wizard, and the most imaginative of the new breed of festival behemoths. Before EDM’s billion-dollar bubble burst, he’d hopped to safety in pop’s upper tier.
        </p>
      </div>
      <div className={styles.menu}><Menu /></div>
    </div>
  )
}

export default Single