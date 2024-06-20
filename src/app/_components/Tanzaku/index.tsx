import { forwardRef } from 'react'
import styles from './index.module.scss'

type TanzakuProps = {
  tanzakuBg?: string
  hasAnimation?: boolean
} & React.HTMLAttributes<SVGElement>

export const Tanzaku = forwardRef<SVGElement, TanzakuProps>(function Tanzaku({
  tanzakuBg = '#eee',
  ...props
}: TanzakuProps) {
  return (
    <svg
      width="145"
      height="215"
      viewBox="0 0 145 215"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.hasAnimation ? styles.yure : ''}
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M57.4712 215L144.17 209.648C87.0843 143.286 71.7426 44.1005 71.7426 44.1005L2.16968 65.8643C2.16968 65.8643 -0.255552 110.447 13.23 143.286C25.7301 173.726 57.4712 215 57.4712 215ZM33.9235 79.0653C39.2437 79.0653 43.5566 74.7524 43.5566 69.4322C43.5566 64.1119 39.2437 59.799 33.9235 59.799C28.6032 59.799 24.2903 64.1119 24.2903 69.4322C24.2903 74.7524 28.6032 79.0653 33.9235 79.0653Z"
        fill={tanzakuBg}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.132 4.86376C32.5727 1.86225 42.6385 7.01403 49.6274 15.9867C56.6036 24.9431 59.8872 36.9613 56.3304 46.5002C51.6603 59.0249 42.5359 67.1891 29.7525 66.6081C28.0408 66.5303 26.4105 66.2919 24.8625 65.9064C24.4822 66.8693 24.1784 68.197 24.2857 69.8896C25.9596 70.2768 27.7211 70.5199 29.5709 70.604C44.6253 71.2882 55.0126 61.4835 60.0784 47.8977C64.2761 36.6399 60.2967 23.175 52.7831 13.5287C45.2822 3.89875 33.6315 -2.67167 21.92 1.05178C4.45562 6.60427 -2.74532 24.9261 0.94676 42.2638C2.65584 50.2895 6.16596 57.6685 11.5406 62.8886L16.0037 61.4939C10.3873 56.9712 6.64399 49.8127 4.85904 41.4307C1.46492 25.4922 8.17332 9.61959 23.132 4.86376Z"
        fill="#ddd"
      />
    </svg>
  )
})
