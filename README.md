# Visualization of survey data

Project for Jetbrains internship

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_GOOGLE_API_KEY`

## Run Locally

Clone the project

```bash
  git clone https://github.com/mkaniowski/visualization-of-survey-data
```

Go to the project directory

```bash
  cd visualization-of-survey-data
```

Install dependencies

```bash
  npm install
```

Acquire Google API Key from https://cloud.google.com/docs/authentication/api-keys

Enable "Cloud Natural Language API" in Google Cloud Console

Create .env file with key "VITE_GOOGLE_API_KEY" and paste your api key here

Start the server

```bash
  npm start
```

## Run without API key

You can run this code without API key, but the data is going to be hardcoded

in src/views/home/home.tsx insted of `const form` paste:

```js
const temporary = {
  documentSentiment: {
    magnitude: 2.748,
    score: 0.287,
  },
  languageCode: 'en',
  sentences: [
    {
      text: {
        content: 'I like apples.',
        beginOffset: -1,
      },
      sentiment: {
        magnitude: 0.815,
        score: 0.787,
      },
    },
    {
      text: {
        content: 'You are my favourite person.',
        beginOffset: -1,
      },
      sentiment: {
        magnitude: 0.977,
        score: 0.926,
      },
    },
    {
      text: {
        content: "I don't like you",
        beginOffset: -1,
      },
      sentiment: {
        magnitude: 0.956,
        score: -0.852,
      },
    },
  ],
  languageSupported: true,
}
as
GoogleApiResponse

const form = useForm({
  defaultValues: {
    text: '',
  },
  onSubmit: async ({ value }) => {

    const transformedResponse = temporary.sentences.map(
      (sentence, index) =>
        ({
          name: `Sentence ${index + 1}`,
          sentiment: sentence.sentiment.score,
          magnitude: sentence.sentiment.magnitude,
          sentence: sentence.text.content,
        })
    as
    IEntry,
  )

    setData(transformedResponse)

  },
})
```

also insted of

```js
      {
  (!!data?.length || isPending) && (
    <Card>
      {!!data?.length && (
        <SentimentVisualizer
          data={data}
          onBarHover={(data) => handleHighlight(data.activePayload?.[0].payload.sentence)}
        />
      )}
      {isPending && (
        <div className={styles['spinner-wrapper']}>
          <Spinner/>
        </div>
      )}
    </Card>
  )
}
```

paste:

```js
{
  !!data?.length(
    <Card>
      {!!data?.length && (
        <SentimentVisualizer
          data={data}
          onBarHover={(data) => handleHighlight(data.activePayload?.[0].payload.sentence)}
        />
      )}
      {isPending && (
        <div className={styles['spinner-wrapper']}>
          <Spinner/>
        </div>
      )}
    </Card>
  )
}
```

## Authors

- [@mkaniowski](https://www.github.com/mkaniowski)

