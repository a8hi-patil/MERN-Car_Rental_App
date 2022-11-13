import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import reducer from '../reducer/carReducer'
import axios from 'axios'
const initiaState = {
    allCars: []
}



const Cars = createContext()

const CarProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initiaState);

    const getData = async () => {
        let tocken = localStorage.getItem('tocken')
        console.log('tokl', tocken)
        let url = "http://localhost:5000/getallcars"
        const data = await axios.get(url, {
            headers: {
                'authorization': tocken,
            }
        })
        console.log('sdjk')
        console.log(data)
        dispatch({ type: "GET_ALL_CARS", payload: data.data })
    }
    useEffect(() => {
        getData()
    }, []);


    return < Cars.Provider value={{ ...state }} > {children}</Cars.Provider >
    // console.log(state)
    // console.log('jkdfg')
}

const useCars = () => {
    return useContext(Cars)
}

export { useCars, CarProvider }