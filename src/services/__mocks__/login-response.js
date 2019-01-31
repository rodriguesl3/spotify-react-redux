export const loginMocks = {
  data: 'https://accounts.spotify.com/authorize?client_id=dc6af13b21094058a9b5e104eccee32e&response_type=code&redirect_uri=https://spotifyauth.azurewebsites.net/api/callback?development=true&scope=user-read-private%20user-read-email%20user-follow-read%20user-read-playback-state',
  status: 200,
  statusText: 'OKe',
  headers: {
    'content-type': 'text/plain; charset=utf-8'
  },
  config: {
    transformRequest: {},
    transformResponse: {},
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    headers: {
      Accept: 'application/json, text/plain, */*'
    },
    method: 'get',
    url: 'https://localhost:5001/api/token?development=true'
  },
  request: {},
};