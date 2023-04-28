const useLocalStorage = (key) => {
    const loaclData = JSON.parse(localStorage.getItem(key))
    return loaclData
}

export default useLocalStorage