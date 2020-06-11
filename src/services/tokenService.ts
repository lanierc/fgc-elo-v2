export const setToken = (token: string): void => {
  localStorage.setItem('vueBlogToken', token);
};

export const getToken = (): string => {
  return localStorage.getItem('vueBlogToken');
};

export const removeToken = (): void => {
  localStorage.removeItem('vueBlogToken');
};
