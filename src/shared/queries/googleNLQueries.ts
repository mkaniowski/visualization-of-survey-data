import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/api.ts'
import { GoogleApiRequest, GoogleApiResponse } from '@/shared/model/googleApi.ts'

export const useSentimentMutation = () =>
  useMutation({
    mutationKey: ['sentiment'],
    mutationFn: async (request: GoogleApiRequest) => {
      const { data } = await api.post<GoogleApiResponse>('/documents:analyzeSentiment', request, {
        params: { key: import.meta.env.VITE_GOOGLE_API_KEY },
      })
      return data
    },
  })
