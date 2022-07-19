const reducer =(state=10000,action)=>{
    if(action.type==="deposit"){
        return state+action.payload
    }
    else if(action.type==="withdraw"){
        return state-action.payload
    }
    // else if(action.type==="BAL"){
    //    return state-action.payload
    // }
    else {
        return state;
    }
}

export default reducer