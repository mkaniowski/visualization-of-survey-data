import { motion } from 'framer-motion'

import styles from './button.module.scss'

export interface IButton {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  color?: 'primary' | 'secondary'
  isDisabled?: boolean
}

export const Button = ({
  label,
  onClick,
  type = 'button',
  color = 'primary',
  isDisabled = false,
}: IButton) => {
  return (
    <motion.button
      className={`${styles.button} ${styles[color]}`}
      onClick={onClick}
      disabled={isDisabled}
      type={type}
      layout
      animate={isDisabled ? {} : { backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={
        isDisabled
          ? {}
          : {
              backgroundPosition: { duration: 6, ease: 'easeInOut', repeat: Infinity },
            }
      }
      whileHover={
        isDisabled ? {} : { scale: 1.05, transition: { duration: 0.1, ease: 'easeInOut' } }
      }
      whileTap={isDisabled ? {} : { scale: 0.95, transition: { duration: 0.1, ease: 'easeInOut' } }}
    >
      {label}
    </motion.button>
  )
}
