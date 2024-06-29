import createClient from 'openapi-fetch'
import type { paths } from './client'

const client = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_ENDPOINT,
})

export const getTenTanzaku = async (id: string) => {
  const res = await client.GET('/tanzaku/{id}', {
    params: {
      path: {
        id: id,
      },
    },
  })

  if (res.error) {
    if (res.response.status === 500) {
      return []
    }
    throw new Error(res.error)
  }

  return res.data
}
export const getProjectInfo = async (id: string) => {
  const res = await client
    .GET('/pub/{projectId}', {
      params: {
        path: {
          projectId: id,
        },
      },
    })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      new Error(error)
      console.error('error', error)
    })
  return res
}
