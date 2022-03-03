import { SET_USERNAME } from "../constant/dashboarbConstant"

export const setuser = (userName) => (dispatch)=>{
    dispatch({
        type:SET_USERNAME,
        payload:userName
    })
}