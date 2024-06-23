'use client'

import { useEffect, useRef, useState } from 'react'
import { CreateTanzaku } from './createTanzaku'

export const TanzakuToImage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)

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
      {positionArray.map((position, index) => {
        return (
          <CreateTanzaku
            key={index}
            textLine1="たんざくで"
            textLine2="ざっくざく"
            nameLine="みずさわ"
            style={{
              position: 'absolute',
              left: position.x,
              top: position.y,
              height: '200px',
              width: 'auto',
            }}
          />
        )
      })}
    </>
  )
}
