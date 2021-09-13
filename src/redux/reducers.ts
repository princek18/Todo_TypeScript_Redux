export interface stateType{
    value: string;
}

interface action{
    type: string,
    payload: string
}

const addReducer = (state:stateType[] = [], action:action) => {
    switch(action.type){
        case "ADD":
            state.push({value: action.payload});
            return state;
        case "DELETE":
            return state.filter((one) => one.value !== action.payload);
        default:
            return state;
    }
}

export default addReducer;