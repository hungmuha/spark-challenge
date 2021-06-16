import React, {useState, useEffect} from "react";

//custom hook to save the objects in local state
//use of persistence state help saved the user input on reload
const useCustomLocalStateHook = (key,initialState) => {
    const [value,setValue] = useState(JSON.parse(localStorage.getItem(key))||initialState);

    useEffect(() => {
      localStorage.setItem(key,JSON.stringify(value));
    },[key,value]);
    
    return [value,setValue];
}

export default useCustomLocalStateHook;