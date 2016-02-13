module.exports.createStore = function (intialState, reducer) {
    var currentState = intialState;
    var currentReducer = reducer;
    var listeners = [];

    function subscribe(listener) {
        listeners.push(listener);
    }

    function dispatch(action) {
        currentState = currentReducer(currentState, action);
        listeners.forEach(listener => {
            listener.call(this, currentState);
        })
    }

    return {
        subscribe,
        dispatch
    };

}
