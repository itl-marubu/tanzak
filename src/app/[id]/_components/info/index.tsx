'use client'
import { useEffect, useState } from 'react'
import { getProjectInfo } from '@/api'
import { Logo } from '@/app/_components/Logo'
import { QrCode } from '@/app/_components/qrcode'

type Props = {
  id: string
}

type projectData = {
  id: string
  name: string
  description: string
  noticeLarge?: string
  noticeQR?: string
}

export const MetaInfo: React.FC<Props> = ({ id }) => {
  const [projectData, setProjectData] = useState({} as projectData)
  useEffect(() => {
    const fetchProjectInfo = async () => {
      try {
        const projectData = await getProjectInfo(id).catch((error) => {
          console.error('error', error)
          alert('問題が発生しました。\n エラーコード: geterr1')
        })
        if (projectData) {
          setProjectData(projectData)
        }
      } catch (error) {
        console.error('error', error)
      }
    }
    fetchProjectInfo().catch((error) => {
      console.error('error', error)
    })
  }, [id])
  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: '30%',
          top: '10vh',
          right: '50px',
        }}
      >
        <Logo logoColor="#fff" />
        <p>{projectData.noticeLarge || ''}</p>
        <div style={{ position: 'fixed', bottom: '20px', right: '300px' }}>
          <h2>{projectData.noticeQR || '短冊の投稿はこちらから'}</h2>
          <QrCode
            url={`${process.env.NEXT_PUBLIC_POSTSITE_BASEURL}/${process.env.NEXT_PUBLIC_EVENTID}/post`}
          />
        </div>
      </div>
    </>
  )
}
