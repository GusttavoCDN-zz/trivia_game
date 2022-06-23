export const getUser = () => localStorage.getItem('user') || '';

export const saveUSerOnStorage = (user: string) => localStorage.setItem('user', user);
