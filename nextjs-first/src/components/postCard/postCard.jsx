import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3979243/pexels-photo-3979243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.button}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae
          repellendus sint earum, odit corrupti aspernatur illum beatae ea
          ducimus suscipit magnam veritatis quas quos veniam consectetur nisi
          blanditiis similique officiis!
        </p>
        <Link className={styles.link} href="/blog/post">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
