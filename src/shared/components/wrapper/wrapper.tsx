import { ReactNode } from 'react'

import { Background, BackgroundType } from '@/shared/components/background/background.tsx'

import styles from './wrapper.module.scss'

export interface IWrapper {
  backgroundType: BackgroundType
  children: ReactNode
  className?: string
}

export const Wrapper = ({ backgroundType, children, className }: IWrapper) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <Background type={backgroundType} />
      {children}
    </div>
  )
}
