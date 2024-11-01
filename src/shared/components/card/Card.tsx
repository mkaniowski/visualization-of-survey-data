import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import styles from './card.module.scss'

export interface ICard {
  children: ReactNode
  className?: string
}

export const Card = ({ children, className }: ICard) => {
  return <motion.div className={`${styles.card} ${className}`}>{children}</motion.div>
}
