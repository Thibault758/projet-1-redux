const initialState = {
    value : "",
    denominations: [
        [1, 5, 10, 20, 50, 100],
        [1, 2, 3, 5, 10 ],
    ],
    denomination : [1, 5, 10, 20, 50, 100],
    results: null,
    config: false
}

export default (state = initialState, action = {}) => {

    switch (action.type) {

        case "CALCULATION":

            var denomination = [...state.denomination];
            denomination = denomination.reverse();
            var results = [];
            var restValue = null;

            denomination.forEach(element => {
                let valueForCalcul = restValue == null ? state.value : restValue
                let containDenomination = Math.floor(valueForCalcul / element)
                results.push(containDenomination)
                restValue = valueForCalcul - (containDenomination * element)
            });
            return {...state, results: results}

        case "SET_VALUE":

            return {...state, value: action.value}

        case "CONFIG":

            return {...state, config: true}

        case "CHANGE_DENOMINATION":

        return {...state, value: "", results: null,  config: false, denomination: state.denominations[action.value]}

        default:
            return state;
    }
}