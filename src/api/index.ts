import createClient from 'openapi-fetch'
import type { paths } from './client'

const client = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_ENDPOINT,
})

export const getAllTanzaku = async () => {
  const res = await client.GET('/tanzaku/{projectId}/list', {
    params: {
      path: {
        projectId: process.env.NEXT_PUBLIC_EVENTID || '',
      },
    },
  })

  if (res.error) {
    throw new Error(res.error)
  }

  return res.data
}
