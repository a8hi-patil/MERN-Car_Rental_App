const carReducer = (state, action) => {
    switch (action.type) {
        case "GET_ALL_CARS":
            console.log('Reduccerrrrrrrrrrrrr')
            console.log(action.payload)
            return {
                ...state,
                allCars: action.payload,
            }
            
        default:
            return state
    }


}
export default carReducer;