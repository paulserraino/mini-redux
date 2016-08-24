module.exports.createStore = function (intialState, reducer) {
    var currentState = intialState;
    var currentReducer = reducer;
    var listeners = [];

    return {

        subscribe(listener) {
            listeners.push(listener);

            return function unsubscribe() {
                var index = listeners.indexOf(listener);
                listeners.splice(index, 1);
            };
        },

        dispatch(action) {
            currentState = currentReducer(currentState, action);

            listeners.forEach(listener => {
                listener.call(this, currentState);
            });
        }
    };
};
