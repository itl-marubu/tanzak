import { Logo } from './_components/Logo'
import { QrCode } from './_components/qrcode'
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
            width: '30%',
            top: '10vh',
            right: '50px',
          }}
        />
        <div style={{ position: 'absolute', bottom: '20px', right: '600px' }}>
          <h2>短冊の投稿はこちらから</h2>
          <QrCode
            url={`${process.env.NEXT_PUBLIC_POSTSITE_BASEURL}/${process.env.NEXT_PUBLIC_EVENTID}`}
          />
        </div>
      </div>
    </main>
  )
}
