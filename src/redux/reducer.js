
const initialState ={
    count :50
};
export const reducer = (state = initialState,action)=>{
    switch(action.type){
        case "INCREMENT":
            return {count:state.count +1 };
        case "DECREMENT":
            return {count: state.count -1};
        default:
            return state;
    }

}