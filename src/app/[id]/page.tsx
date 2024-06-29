import { MetaInfo } from './_components/info'
import styles from './page.module.scss'
import { TanzakuToImage } from '../_components/t2i'

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
