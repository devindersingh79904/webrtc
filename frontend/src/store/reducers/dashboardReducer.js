
const initialState = {
    username:''
}
const dashboardReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'ABC':
            return {
                ...state
            }
        default:
            return state;
    }
}

export default dashboardReducer;