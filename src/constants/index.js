export const USER_AUTHENTICATION = 'USER_AUTHENTICATION';
export const ADD_CREDENTIALS = 'ADD_CREDENTIALS';

export const USER_INFORMATION = 'USER_INFORMATION';
export const ARTIST_FOLLOWED = 'ARTIST_FOLLOWED';
export const USER_LISTENING = 'USER_LISTENING';

export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';

const baseUrl = 'https://api.spotify.com/v1';

export const LOGIN_TOKEN = 'https://localhost:5001/api/token';

// export const LOGIN_TOKEN = 'https://spotifyauth.azurewebsites.net/api/token';

export const selfInformation = `${baseUrl}/me`;
export const followingInformation = `${baseUrl}/me/following`;
export const userListening = `${baseUrl}/me/player`;