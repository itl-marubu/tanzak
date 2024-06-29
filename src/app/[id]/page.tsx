import styles from './page.module.scss'
import { Logo } from '../_components/Logo'
import { QrCode } from '../_components/qrcode'
import { TanzakuToImage } from '../_components/t2i'
import { MetaInfo } from './_components/info'

export const runtime = 'edge'

export default function TanzakuShow({ params }: { params: { id: string } }) {
  return (
    <main className={styles.main}>
      <div className={styles.sasa}>
        <TanzakuToImage id={params.id} />
      </div>
      <MetaInfo id={params.id} />
    </main>
  )
}
