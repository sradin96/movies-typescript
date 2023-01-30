export const useSearchFilter = () => {
    const setSearchFilter = (array: [], value: string, callback: Function) => {
        callback(array?.filter((arr: any) => {
            return value.toLowerCase() === '' ? array : arr.Title.toLowerCase().includes(value.toLowerCase())
        }))
     }
     return { setSearchFilter };
}
