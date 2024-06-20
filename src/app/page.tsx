import Image from 'next/image'
import { Logo } from './_components/Logo'
import { Tanzaku } from './_components/Tanzaku'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image
          src="/sasawTz.webp"
          width={1000}
          height={1000}
          alt="sasa"
          className={styles.sasa}
        />
        <Logo
          logoColor="#fff"
          style={{
            position: 'absolute',
            width: '20%',
            top: '10vh',
            left: '50px',
          }}
        />
      </div>
      <div className={styles.tanzakuIntro}>
        <h2>ピックアップ短冊</h2>
        <div className={styles.tanzakuContainer}>
          <p className={styles.tanzakuMoji}>経済学部も都心移転させよう</p>
          <p className={styles.tanzakuName}>みずさわなの</p>
          <Tanzaku
            tanzakuBg="#f8f8f8"
            style={{ width: '30vw', height: '100%', zIndex: 1 }}
            className={styles.tanzakuImg}
          />
        </div>
      </div>
    </main>
  )
}
