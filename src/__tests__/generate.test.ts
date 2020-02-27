import generateFavicon from '../generate'
import request from './assets/base-request'

test('Throws on invalid API key', async () => {
  expect.assertions(2)
  return generateFavicon(
    {
      ...request,
      api_key: ''
    },
    'coverage'
  ).catch(err => {
    expect(err.response.status).toBe(400)
    expect(err.response.statusText).toBe('Invalid API key')
  })
})