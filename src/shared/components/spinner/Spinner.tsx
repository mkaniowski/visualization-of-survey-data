import { motion, Repeat } from 'framer-motion'

import styles from './spinner.module.scss'

const rotate = {
  animate: {
    rotate: 360,
  },
  transition: {
    duration: 1,
    ease: 'linear',
    repeat: Infinity,
  },
}

const prixClipFix = {
  animate: {
    clipPath: [
      'polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)',
      'polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)',
      'polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)',
      'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)',
      'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)',
    ],
  },
  transition: {
    duration: 2,
    ease: 'linear',
    repeat: Infinity,
    repeatType: 'reverse',
  } as Repeat,
}

export const Spinner = () => {
  return (
    <motion.div
      className={styles.loader}
      {...rotate}
    >
      <motion.div
        className={styles['loader-before']}
        {...prixClipFix}
      />
    </motion.div>
  )
}
