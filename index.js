const {createStore} = require("redux")


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const Add_User = 'ADD_USER';
// state 
const initialCouterState = {
    count: 0,
}

const initialCounterState = {
    count: 0,
}
const initialUserState = {
    user:[{name: 'Pobarul islam'}]
}

// action - object- type, palod
const incrementCounter= ()=>{
    return{
        type: INCREMENT
    }
}
const decrementCounter= ()=>{
    return{
        type: DECREMENT
    }
}


const addUser = ()=>{
    return{
        type: ADD_USER,
        payload: {name: "Pobarul islam"}
    }
}


// 1. State 
// 2. dispatch Action 
// 3. reducer 
// 4. store 


// redux 2


// create reduser for counter 

const counterReducer = (state = initialCouterState, action) =>{

    switch (action.type) {
        case INCREMENT:

        return{
            ...state,
            count: state.count + 1
        }

        //    break 

        case DECREMENT:

        
            return{
                ...state,
                count: state.count - 1
            }
    
    
        default:
            break;
    }
}

// create store 

const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
})

// dispatch 

store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());