import { motion } from 'framer-motion'

import styles from './textarea.module.scss'

export const Textarea = () => {
  return <motion.textarea className={styles.textarea} />
}
