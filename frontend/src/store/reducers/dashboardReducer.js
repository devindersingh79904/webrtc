import { SET_USERNAME } from "../constant/dashboarbConstant";

const initialState = {
    username:''
}
const dashboardReducer = (state=initialState,action)=>{
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username:action.payload
            }
        default:
            return state;
    }
}

export default dashboardReducer;