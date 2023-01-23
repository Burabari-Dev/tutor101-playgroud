import type { NextPage } from 'next';
import styles from '../styles/Playground.module.css';

const Playground: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>Top-Bar content comes here</div>
      <div className={styles.main}>
        <div className={styles.sideBar}></div>
        <div className={styles.content}>This is the playground</div>
      </div>
    </div>
  );
}

export default Playground;
