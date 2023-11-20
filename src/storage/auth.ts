export const setToken = (token: string) => {
    localStorage.setItem('token', JSON.stringify(token));
}

export const getToken = () => {
    return localStorage.getItem('token');
}

export const setRefreshToken = (token: string) => {
    localStorage.setItem('refresh', JSON.stringify(token));
}