'use client'

import { useEffect, useRef, useState } from 'react'
import { getTenTanzaku } from '@/api'
import { CreateTanzaku } from './createTanzaku'

type tanzakuType = {
  textLine1: string
  textLine2?: string
  nameLine: string
}
type Props = {
  id: string
}

export const TanzakuToImage: React.FC<Props> = ({ id }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [tanzakuArray, setTanzakuArray] = useState([] as tanzakuType[])

  useEffect(() => {
    const fetchTanzaku = async () => {
      try {
        const tanzakuData = await getTenTanzaku(id).catch((error) => {
          console.error('error', error)
          alert('問題が発生しました。\n エラーコード: geterr2')
        })
        if (tanzakuData) {
          if (tanzakuData.length === 0) {
            location.reload()
          }
          if (tanzakuData) {
            setTanzakuArray(tanzakuData)
          } else {
            console.error('error')
          }
        }
      } catch (error) {
        console.error('error', error)
      }
    }
    fetchTanzaku().catch((error) => {
      console.error('error', error)
    })
    const interval = setInterval(() => {
      location.reload()
    }, 60000)
    return () => {
      return clearInterval(interval)
    }
  }, [id])

  useEffect(() => {
    const image = new Image()
    image.src = '/sasa.webp'

    image.onload = () => {
      setImage(image)
      setImageLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (imageLoaded && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      if (ctx) {
        const width = image?.width
        const height = image?.height
        canvas.width = width as number
        canvas.height = height as number
        ctx.drawImage(
          image as HTMLImageElement,
          0,
          0,
          width as number,
          height as number,
        )
      }
    }
  }, [image, imageLoaded])

  const positionArray = [
    { x: '900px', y: '80px' },
    { x: '1000px', y: '300px' },
    { x: '720px', y: '230px' },
    { x: '460px', y: '460px' },
    { x: '620px', y: '393px' },
    { x: '730px', y: '460px' },
    { x: '160px', y: '600px' },
    { x: '380px', y: '650px' },
    { x: '560px', y: '650px' },
    { x: '500px', y: '810px' },
  ]

  return (
    <>
      <canvas
        ref={canvasRef}
        width={1000}
        height={1000}
        style={{
          position: 'absolute',
          width: 'auto',
          height: '100vh',
        }}
      />
      {tanzakuArray.map((tanzaku, index) => {
        return (
          <CreateTanzaku
            key={index}
            textLine1={tanzaku.textLine1}
            textLine2={tanzaku.textLine2}
            nameLine={tanzaku.nameLine}
            style={{
              position: 'absolute',
              height: '220px',
              width: 'auto',
              left: positionArray[index].x,
              top: positionArray[index].y,
            }}
          />
        )
      })}
    </>
  )
}
