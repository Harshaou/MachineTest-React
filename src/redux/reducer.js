

const initialState = 'PENDING'

export default (state = initialState, action) => {
    switch(action.type){
        case 'ACTIVE':
            return 'active'
        case 'SERVICES':
            return 'payment'
        case 'PAYMENT':
            return 'payment-success'
    default: 
        return state
    }
}