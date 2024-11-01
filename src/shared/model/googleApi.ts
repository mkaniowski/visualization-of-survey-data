export interface Sentiment {
  magnitude: number
  score: number
}

export interface TextSpan {
  content: string
  beginOffset: number
}

export interface Sentence {
  text: TextSpan
  sentiment: Sentiment
}

export interface GoogleApiResponse {
  documentSentiment: Sentiment
  languageCode: string
  sentences: Sentence[]
  languageSupported: boolean
}

export type EncodingType = 'NONE' | 'UTF8' | 'UTF16' | 'UTF32'

export type DocumentType = 'PLAIN_TEXT' | 'HTML'

export interface Document {
  type: DocumentType
  languageCode: string
  content: string
  gcsContentUri: string
}

export interface GoogleApiRequest {
  document: Document
  encodingType: EncodingType
}
