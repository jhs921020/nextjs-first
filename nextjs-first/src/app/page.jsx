import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Lear More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="https://images.pexels.com/photos/9949421/pexels-photo-9949421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/20350883/pexels-photo-20350883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
};

export default Home;
