export const depositMoney =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type: "deposit",
            payload: amount
        })
        // console.log(amount)
    }
}

export const withdrawMoney =(amount)=>{
    return(dispatch)=>{
        dispatch({
            type: "withdraw",
            payload: amount
        })
        // console.log(amount)
    }
}




export const ADD = (item) => {
    return(dispatch) =>{
        dispatch({ type: "ADD_CART",
        payload: item})
       
    }
}



export const DEL = (id) => {
    return(dispatch) =>{
        dispatch({ type: "RMV_CART",
        payload: id
    })     
    }
}



export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}


// export const BALANCE = (amount)=>{
//     return{
//         type: "BAL",
//         payload: amount
//     }
// }