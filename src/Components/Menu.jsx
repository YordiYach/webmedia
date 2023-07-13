import React from 'react'
import styles from './Menu.module.css'

const Menu = () => {

    const posts = [
        {
            id: 1,
            title: "La Jumpa",
            desc: "Bad Bunny & Arcangel Song",
            img: "https://geo-media.beatsource.com/image_size/500x500/6/d/9/6d9853df-e585-4c44-bfca-a9241a922d1e.jpg"
        },
        {
            id: 2,
            title: "Un Café",
            desc: "Angela Aguilar & Steve FAoki",
            img: "https://images.genius.com/5cffe8f51b8c9c73a4d45909795ff967.1000x1000x1.jpg"
        }
    ]

    return (
        <div className={styles.menu}>
            <h1 className={styles.h1}>Other posts you may like</h1>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <img src={post.img} alt={post.title} className={styles.img} />
                    <h2 className={styles.h2} >{post.title}</h2>
                    <button className={styles.cta}>
                        <span > Read More </span>
                        <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
                            <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Menu