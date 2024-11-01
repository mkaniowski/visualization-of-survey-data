import { useForm } from '@tanstack/react-form'
import { useCallback, useState } from 'react'

import { Button, Card, Textarea, Wrapper } from '@/shared/components'
import { SentimentVisualizer } from '@/shared/components/SentimentVisualizer/SentimentVisualizer.tsx'
import { Spinner } from '@/shared/components/spinner/Spinner.tsx'
import { IEntry } from '@/shared/model/charts.ts'
import { GoogleApiRequest } from '@/shared/model/googleApi.ts'
import { useSentimentMutation } from '@/shared/queries/googleNLQueries.ts'
import { highlightText } from '@/shared/utils/highlightText.ts'

import styles from './home.module.scss'

const Home = () => {
  const { mutateAsync: analyzeSentiment, isPending } = useSentimentMutation()
  const [highlightedText, setHighlightedText] = useState<string>('')
  const [data, setData] = useState<IEntry[]>([])

  const handleHighlight = useCallback((text: string) => {
    const highlighted = highlightText(text, '#input-textarea')
    setHighlightedText(highlighted)
  }, [])

  const form = useForm({
    defaultValues: {
      text: '',
    },
    onSubmit: async ({ value }) => {
      const request = {
        document: {
          content: value.text,
          type: 'PLAIN_TEXT',
        },
        encodingType: 'UTF8',
      } as GoogleApiRequest
      analyzeSentiment(request).then((response) => {
        const transformedResponse = response.sentences.map(
          (sentence, index) =>
            ({
              name: `Sentence ${index + 1}`,
              sentiment: sentence.sentiment.score,
              magnitude: sentence.sentiment.magnitude,
              sentence: sentence.text.content,
            }) as IEntry,
        )

        setData(transformedResponse)
      })
    },
  })

  return (
    <Wrapper
      backgroundType='waves'
      className={styles.wrapper}
    >
      <h1>Visualization of survey data</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <Card>
          <form.Field
            name='text'
            children={(field) => {
              return (
                <Textarea
                  id='input-textarea'
                  value={field.state.value}
                  onChange={(e) => {
                    field.handleChange(e.target.value)
                  }}
                  highlightedText={highlightedText}
                />
              )
            }}
          />
        </Card>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              isDisabled={!canSubmit}
              label={isSubmitting ? '...' : 'Submit'}
              type='submit'
            />
          )}
        />
      </form>

      {(!!data?.length || isPending) && (
        <Card>
          {!!data?.length && (
            <SentimentVisualizer
              data={data}
              onBarHover={(data) => handleHighlight(data.activePayload?.[0].payload.sentence)}
            />
          )}
          {isPending && (
            <div className={styles['spinner-wrapper']}>
              <Spinner />
            </div>
          )}
        </Card>
      )}
    </Wrapper>
  )
}

export default Home
