import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import styles from './card.module.scss'

export interface ICard {
  children: ReactNode
}

export const Card = ({ children }: ICard) => {
  return <motion.div className={styles.card}>{children}</motion.div>
}
