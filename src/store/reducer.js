const initState = {
    counter: 1
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INC':
            return {
                counter: state.counter + 1
            };
        case 'DEC':
            return {
                counter: state.counter - 1
            };
        case 'ADD_TEN':
            return {
                counter: state.counter + 10
            };
        case 'RESET':
                return {
                    counter: 0
                };
        default:
            break;
    };
    return state;
}

export default reducer;