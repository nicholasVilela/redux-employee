export const changeName = (e) => {
    return {
        type: 'Name',
        payload: e.target.value
    }
}