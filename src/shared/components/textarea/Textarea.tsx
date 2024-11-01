import { ChangeEvent, useEffect, useRef } from 'react'

import styles from './textarea.module.scss'

export interface ITextarea {
  id?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
  highlightedText?: string
}

export const Textarea = ({ id, value, onChange, highlightedText }: ITextarea) => {
  const textareaReference = useRef<HTMLTextAreaElement>(null)
  const highlightedTextReference = useRef<HTMLDivElement>(null)

  const handleScrollWrapper = () => {
    if (!textareaReference.current || !highlightedTextReference.current) {
      return
    }
    highlightedTextReference.current.scrollTop = textareaReference.current.scrollTop
  }

  useEffect(() => {
    handleScrollWrapper()
  }, [highlightedText])

  return (
    <div className={styles.textareaWrapper}>
      <div
        ref={highlightedTextReference}
        className={styles.highlightedText}
        dangerouslySetInnerHTML={{ __html: highlightedText ?? '' }}
      />
      <textarea
        ref={textareaReference}
        className={styles.textarea}
        id={id}
        value={value}
        onChange={onChange}
        onScroll={handleScrollWrapper}
      />
    </div>
  )
}
