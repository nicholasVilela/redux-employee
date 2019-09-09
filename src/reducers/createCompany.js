export const createCompany = (state = '', action) => {
    switch(action.type) {
        case 'Name':
            return state = action.payload
        default:
            return state
    }
} 