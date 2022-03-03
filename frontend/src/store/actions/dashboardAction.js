import { SET_USERNAME } from "../constant/dashboarbConstant"

export const setUserName = (userName) => (dispatch)=>{
    dispatch({
        type:SET_USERNAME,
        payload:userName
    })
}