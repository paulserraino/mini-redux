#mini-redux
Small implementation of [redux](https://github.com/reactjs/redux) to better understand it's design patterns

```js
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

store.dispatch({ type: 'init'}) // => 0
store.dispatch({ type: 'foo'}) // => 0
store.dispatch({ type: 'inc'}) // => 1
store.dispatch({ type: 'inc'}) // => 2
store.dispatch({ type: 'bar'}) // => 2

unsubscribe()
```

## License
MIT
