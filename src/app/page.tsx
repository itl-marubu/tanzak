import { CreateTanzaku } from './_components/createTanzaku'
import { Logo } from './_components/Logo'
import { TanzakuToImage } from './_components/t2i'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.sasa}>
          <TanzakuToImage />
        </div>

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
        <CreateTanzaku
          textLine1="たんざくで"
          textLine2="ざっくざく"
          nameLine="みずさわ"
        />
      </div>
    </main>
  )
}
