const initialState=null;
const userStats=(state=initialState,action)=>{
switch(action.type){
    case 'GOOGLELOGIN': return action.type
    case 'LOGIN': return action.type
    default: return null
}
}

export default userStats;