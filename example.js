const createStore = require('./mini-redux').createStore;

function AppReducer(state, action) {
    switch (action.type) {
        case 'inc':
            return state + 1
        default:
            return state
    }
}

var intialState = 0;

var store = createStore(intialState, AppReducer);

var unsubscribe = store.subscribe((state) => {
    console.log(state);
})

store.dispatch({ type: 'init'})
store.dispatch({ type: 'foo'})
store.dispatch({ type: 'inc'})
store.dispatch({ type: 'inc'})
store.dispatch({ type: 'bar'})

unsubscribe();
