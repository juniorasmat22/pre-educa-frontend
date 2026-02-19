import Cookies from 'js-cookie';

export const tokenStorage = {
  setTokens: (access: string, refresh: string) => {
    Cookies.set('access_token', access, { expires: 1, secure: true, sameSite: 'strict' });
    Cookies.set('refresh_token', refresh, { expires: 7, secure: true, sameSite: 'strict' });
  },
  getAccessToken: () => Cookies.get('access_token') || null,
  getRefreshToken: () => Cookies.get('refresh_token') || null,
  clearTokens: () => {
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
  }
};