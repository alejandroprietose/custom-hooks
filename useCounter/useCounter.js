import { useState } from "react"

export const useCounter = (initialState=10) => {

    const [counter, setCounter] = useState(initialState);

    const reset =()=> {
        setCounter (initialState);
    }
    
    /*
    const increment =(factor = 1)=> {
        setState (state + factor);
    }
    */
    const increment =()=> {
        setCounter (counter + 1);
    }

    /*
    const decrement =(factor = 1)=> {
        setState (state - 1);
    }
    */

    const decrement =()=> {
        setCounter (counter - 1);
    }

    return {
        counter,
        reset,
        increment,
        decrement
    };
}