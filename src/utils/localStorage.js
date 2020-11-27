export const setStorage = (key, value) => {
    const json = JSON.stringify(value);
    const encrypted = btoa(json);
    localStorage.setItem(key, encrypted);
}

export const getStorage = (key) => {
    const encryptedValue = localStorage.getItem(key);
    if (!encryptedValue) {
        return false;
    }
    else {
        return JSON.parse(atob(encryptedValue));
    } 
}

export const clearStorage = () => {
    localStorage.clear();
}